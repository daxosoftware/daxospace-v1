import { useEffect, useRef } from 'react';
import { GameEngine } from '../engine/game-engine';
import { useGameLoop } from '../hooks/use-game-loop';
import { useGameRenderer } from '../hooks/use-game-renderer';
import { useGameControls } from '../hooks/use-game-controls';

interface GameCanvasProps {
  width: number;
  height: number;
}

export function GameCanvas({ width, height }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine>();

  useEffect(() => {
    if (canvasRef.current) {
      engineRef.current = new GameEngine(width, height);
    }
  }, [width, height]);

  useGameLoop(engineRef);
  useGameRenderer(canvasRef, engineRef);
  useGameControls(engineRef);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="bg-gray-900 rounded-lg shadow-lg"
    />
  );
}