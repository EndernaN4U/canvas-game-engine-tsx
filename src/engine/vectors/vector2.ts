export default class Vector2 {
  x: number;
  y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static translate(vec1: Vector2, vec2: Vector2): Vector2 {
    vec1.x += vec2.x;
    vec1.y += vec2.y;
    return vec1;
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
