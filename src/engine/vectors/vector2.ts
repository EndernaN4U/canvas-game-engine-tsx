export default class Vector2 {
  x: number;
  y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
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

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}
