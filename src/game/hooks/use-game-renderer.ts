import { useEffect } from 'react';
import { GameEngine } from '../engine/game-engine';
import { GameObject } from '../engine/types';

export function useGameRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  engineRef: React.RefObject<GameEngine>
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (!engineRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const state = engineRef.current.getState();

      // Render player
      renderGameObject(ctx, state.player, '#4f46e5');

      // Render enemies
      state.enemies.forEach(enemy => {
        renderGameObject(ctx, enemy, '#ef4444');
      });

      // Render projectiles
      state.projectiles.forEach(projectile => {
        renderGameObject(ctx, projectile, '#22c55e');
      });

      // Render power-ups
      state.powerUps.forEach(powerUp => {
        renderGameObject(ctx, powerUp, '#eab308');
      });

      requestAnimationFrame(render);
    };

    render();
  }, [canvasRef, engineRef]);
}

function renderGameObject(ctx: CanvasRenderingContext2D, obj: GameObject, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.translate(obj.position.x + obj.size.x / 2, obj.position.y + obj.size.y / 2);
  ctx.rotate(obj.rotation);
  ctx.fillRect(-obj.size.x / 2, -obj.size.y / 2, obj.size.x, obj.size.y);
  ctx.restore();
}