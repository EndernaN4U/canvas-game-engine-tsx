export default class Vector3 {
  x: number;
  y: number;
  z: number;

  public constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static translate(vec1: Vector3, vec2: Vector3): Vector3 {
    const vec = vec1.clone();
    vec.x += vec2.x;
    vec.y += vec2.y;
    vec.z += vec2.z;
    return vec;
  }
  
  translate(vec: Vector3): Vector3 {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
    return this;
  }

  static between(start: Vector3, end: Vector3): Vector3 {
    return new Vector3(end.x - start.x, end.y - start.y, end.z - start.z);
  }

  multiplyBy(mult: number): Vector3 {
    this.x *= mult;
    this.y *= mult;
    return this;
  }
  /**
   * Uses formula found on https://matthew-brett.github.io/teaching/rotation_2d.html
   * @param deg number representing degrees vector will be rotated by in the Y axis.
   * @returns this (Vector2)
   */
  rotateY(deg: number): Vector3 {
    // TODO test this code pls
    deg %= 360;
    const rad = (deg * 2 * Math.PI) / 360;
    const newX = Math.cos(rad) * this.x - Math.sin(rad) * this.z;
    this.z = Math.sin(rad) * this.x + Math.cos(rad) * this.z;
    this.x = newX;
    return this;
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
