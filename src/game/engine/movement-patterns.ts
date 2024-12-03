import { Vector2D } from '../utils/vector';
import { MovementPattern } from './types';

export function calculateMovement(
  pattern: MovementPattern,
  currentPosition: Vector2D,
  time: number,
  speed: number
): Vector2D {
  switch (pattern) {
    case 'linear':
      return new Vector2D(currentPosition.x, currentPosition.y + speed);
    
    case 'sine':
      return new Vector2D(
        currentPosition.x + Math.sin(time * 0.05) * speed,
        currentPosition.y + speed * 0.5
      );
    
    case 'circular':
      return new Vector2D(
        currentPosition.x + Math.cos(time * 0.05) * speed,
        currentPosition.y + Math.sin(time * 0.05) * speed
      );
    
    case 'zigzag':
      const zigzagWidth = 100;
      const zigzagPeriod = 2000;
      const horizontalOffset = Math.sin((time % zigzagPeriod) / zigzagPeriod * Math.PI * 2) * zigzagWidth;
      return new Vector2D(
        currentPosition.x + horizontalOffset,
        currentPosition.y + speed
      );
    
    default:
      return currentPosition;
  }
}