import { useEffect } from 'react';
import { GameEngine } from '../engine/game-engine';
import { Vector2D } from '../utils/vector';

export function useGameControls(engineRef: React.RefObject<GameEngine>) {
  useEffect(() => {
    const keys = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.add(e.key.toLowerCase());
      updateMovement();
      
      if (e.code === 'Space') {
        engineRef.current?.shoot();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.delete(e.key.toLowerCase());
      updateMovement();
    };

    const updateMovement = () => {
      if (!engineRef.current) return;

      const direction = new Vector2D(0, 0);
      
      if (keys.has('a') || keys.has('arrowleft')) direction.x -= 1;
      if (keys.has('d') || keys.has('arrowright')) direction.x += 1;
      if (keys.has('w') || keys.has('arrowup')) direction.y -= 1;
      if (keys.has('s') || keys.has('arrowdown')) direction.y += 1;

      engineRef.current.movePlayer(direction.normalize());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [engineRef]);
}