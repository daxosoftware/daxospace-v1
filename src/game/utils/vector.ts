export class Vector2D {
  constructor(public x: number, public y: number) {}

  add(other: Vector2D): Vector2D {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }

  subtract(other: Vector2D): Vector2D {
    return new Vector2D(this.x - other.x, this.y - other.y);
  }

  multiply(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vector2D {
    const mag = this.magnitude();
    return mag === 0 ? new Vector2D(0, 0) : new Vector2D(this.x / mag, this.y / mag);
  }

  distance(other: Vector2D): number {
    return this.subtract(other).magnitude();
  }
}