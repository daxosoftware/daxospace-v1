import { useEffect, useRef } from 'react';
import { GameEngine } from '../engine/game-engine';

export function useGameLoop(engineRef: React.RefObject<GameEngine>) {
  const frameRef = useRef<number>();

  useEffect(() => {
    const gameLoop = () => {
      if (engineRef.current) {
        engineRef.current.update();
      }
      frameRef.current = requestAnimationFrame(gameLoop);
    };

    frameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [engineRef]);
}