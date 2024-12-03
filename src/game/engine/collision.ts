import { GameObject } from './types';
import { Vector2D } from '../utils/vector';

export function checkCollision(a: GameObject, b: GameObject): boolean {
  const aLeft = a.position.x;
  const aRight = a.position.x + a.size.x;
  const aTop = a.position.y;
  const aBottom = a.position.y + a.size.y;

  const bLeft = b.position.x;
  const bRight = b.position.x + b.size.x;
  const bTop = b.position.y;
  const bBottom = b.position.y + b.size.y;

  return !(
    aRight < bLeft ||
    aLeft > bRight ||
    aBottom < bTop ||
    aTop > bBottom
  );
}

export function isOutOfBounds(obj: GameObject, bounds: { width: number; height: number }): boolean {
  return (
    obj.position.x < -obj.size.x ||
    obj.position.x > bounds.width ||
    obj.position.y < -obj.size.y ||
    obj.position.y > bounds.height
  );
}