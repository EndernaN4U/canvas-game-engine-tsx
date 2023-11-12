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

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
