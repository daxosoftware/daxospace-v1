import { Vector2D } from '../utils/vector';

export interface GameObject {
  id: string;
  position: Vector2D;
  velocity: Vector2D;
  size: Vector2D;
  rotation: number;
  active: boolean;
}

export interface Player extends GameObject {
  health: number;
  score: number;
  powerUps: PowerUpType[];
  invulnerable: boolean;
}

export interface Enemy extends GameObject {
  health: number;
  pattern: MovementPattern;
  points: number;
}

export interface Projectile extends GameObject {
  damage: number;
  owner: 'player' | 'enemy';
}

export interface PowerUp extends GameObject {
  type: PowerUpType;
  duration: number;
}

export type PowerUpType = 'shield' | 'rapidFire' | 'multiShot' | 'speedBoost';
export type MovementPattern = 'linear' | 'sine' | 'circular' | 'zigzag';

export interface GameState {
  player: Player;
  enemies: Enemy[];
  projectiles: Projectile[];
  powerUps: PowerUp[];
  score: number;
  level: number;
  gameOver: boolean;
  paused: boolean;
}