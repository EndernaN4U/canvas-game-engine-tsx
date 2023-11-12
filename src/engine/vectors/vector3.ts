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
    vec1.x += vec2.x;
    vec1.y += vec2.y;
    vec1.z += vec2.z;
    return vec1;
  }

  translate(vec: Vector3): Vector3 {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
    return this;
  }

  copy(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
