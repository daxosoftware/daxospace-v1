import { GameState, Player, Enemy, Projectile, PowerUp, GameObject } from './types';
import { Vector2D } from '../utils/vector';
import { checkCollision, isOutOfBounds } from './collision';
import { calculateMovement } from './movement-patterns';

export class GameEngine {
  private state: GameState;
  private lastUpdate: number;
  private bounds: { width: number; height: number };

  constructor(canvasWidth: number, canvasHeight: number) {
    this.bounds = { width: canvasWidth, height: canvasHeight };
    this.lastUpdate = Date.now();
    this.state = this.createInitialState();
  }

  private createInitialState(): GameState {
    return {
      player: {
        id: 'player',
        position: new Vector2D(this.bounds.width / 2, this.bounds.height - 100),
        velocity: new Vector2D(0, 0),
        size: new Vector2D(40, 40),
        rotation: 0,
        active: true,
        health: 100,
        score: 0,
        powerUps: [],
        invulnerable: false
      },
      enemies: [],
      projectiles: [],
      powerUps: [],
      score: 0,
      level: 1,
      gameOver: false,
      paused: false
    };
  }

  update() {
    if (this.state.gameOver || this.state.paused) return;

    const currentTime = Date.now();
    const deltaTime = (currentTime - this.lastUpdate) / 1000;
    this.lastUpdate = currentTime;

    this.updateGameObjects(deltaTime);
    this.checkCollisions();
    this.cleanupInactiveObjects();
    this.spawnEnemies();
  }

  private updateGameObjects(deltaTime: number) {
    // Update player
    this.state.player.position = this.state.player.position.add(
      this.state.player.velocity.multiply(deltaTime)
    );

    // Update enemies
    this.state.enemies.forEach(enemy => {
      enemy.position = calculateMovement(
        enemy.pattern,
        enemy.position,
        Date.now(),
        2
      );
    });

    // Update projectiles
    this.state.projectiles.forEach(projectile => {
      projectile.position = projectile.position.add(
        projectile.velocity.multiply(deltaTime)
      );
    });

    // Update power-ups
    this.state.powerUps.forEach(powerUp => {
      powerUp.position = powerUp.position.add(
        new Vector2D(0, 50 * deltaTime)
      );
    });
  }

  private checkCollisions() {
    // Player-Enemy collisions
    this.state.enemies.forEach(enemy => {
      if (checkCollision(this.state.player, enemy) && !this.state.player.invulnerable) {
        this.handlePlayerHit();
      }
    });

    // Projectile-Enemy collisions
    this.state.projectiles.forEach(projectile => {
      if (projectile.owner === 'player') {
        this.state.enemies.forEach(enemy => {
          if (checkCollision(projectile, enemy)) {
            this.handleEnemyHit(enemy, projectile);
          }
        });
      }
    });

    // Player-PowerUp collisions
    this.state.powerUps.forEach(powerUp => {
      if (checkCollision(this.state.player, powerUp)) {
        this.handlePowerUpCollection(powerUp);
      }
    });
  }

  private handlePlayerHit() {
    this.state.player.health -= 10;
    if (this.state.player.health <= 0) {
      this.state.gameOver = true;
    } else {
      this.state.player.invulnerable = true;
      setTimeout(() => {
        this.state.player.invulnerable = false;
      }, 2000);
    }
  }

  private handleEnemyHit(enemy: Enemy, projectile: Projectile) {
    enemy.health -= projectile.damage;
    if (enemy.health <= 0) {
      enemy.active = false;
      this.state.score += enemy.points;
    }
    projectile.active = false;
  }

  private handlePowerUpCollection(powerUp: PowerUp) {
    powerUp.active = false;
    this.state.player.powerUps.push(powerUp.type);
    setTimeout(() => {
      const index = this.state.player.powerUps.indexOf(powerUp.type);
      if (index > -1) {
        this.state.player.powerUps.splice(index, 1);
      }
    }, powerUp.duration);
  }

  private cleanupInactiveObjects() {
    this.state.enemies = this.state.enemies.filter(enemy => 
      enemy.active && !isOutOfBounds(enemy, this.bounds)
    );
    this.state.projectiles = this.state.projectiles.filter(projectile => 
      projectile.active && !isOutOfBounds(projectile, this.bounds)
    );
    this.state.powerUps = this.state.powerUps.filter(powerUp => 
      powerUp.active && !isOutOfBounds(powerUp, this.bounds)
    );
  }

  private spawnEnemies() {
    // Implement enemy spawning logic based on level and time
  }

  // Public methods for game control
  movePlayer(direction: Vector2D) {
    this.state.player.velocity = direction.multiply(300);
  }

  shoot() {
    const projectile: Projectile = {
      id: `projectile-${Date.now()}`,
      position: new Vector2D(
        this.state.player.position.x + this.state.player.size.x / 2,
        this.state.player.position.y
      ),
      velocity: new Vector2D(0, -500),
      size: new Vector2D(4, 10),
      rotation: 0,
      active: true,
      damage: 10,
      owner: 'player'
    };
    this.state.projectiles.push(projectile);
  }

  getState(): GameState {
    return this.state;
  }

  pause() {
    this.state.paused = true;
  }

  resume() {
    this.state.paused = false;
    this.lastUpdate = Date.now();
  }

  reset() {
    this.state = this.createInitialState();
    this.lastUpdate = Date.now();
  }
}