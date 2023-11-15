import { Vector2 } from "..";

/**
 * Calculates cross products, also known as vector product
 * @returns magnitude ('z' coordinate) of resulting 3D vector
 */

export function crossProduct2D(vec1: Vector2, vec2: Vector2): number {
  return vec1.x * vec2.y - vec1.y * vec2.x;
}
