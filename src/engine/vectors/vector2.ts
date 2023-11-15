export default class Vector2 {
  x: number;
  y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static between(start: Vector2, end: Vector2): Vector2 {
    return new Vector2(end.x - start.x, end.y - start.y);
  }

  static translate(vec1: Vector2, vec2: Vector2): Vector2 {
    const vec = vec1.clone();
    vec.x += vec2.x;
    vec.y += vec2.y;
    return vec;
  }

  translate(vec: Vector2): Vector2 {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  multiplyBy(mult: number): Vector2 {
    this.x *= mult;
    this.y *= mult;
    return this;
  }
  /**
   * Uses formula found on https://matthew-brett.github.io/teaching/rotation_2d.html
   * @param deg number representing degrees vector will be rotated by.
   * @returns this (Vector2)
   */
  rotateBy(deg: number): Vector2 {
    deg %= 360;
    const rad = (deg * 2 * Math.PI) / 360;
    const newX = Math.cos(rad) * this.x - Math.sin(rad) * this.y;
    this.y = Math.sin(rad) * this.x + Math.cos(rad) * this.y;
    this.x = newX;
    return this;
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}
