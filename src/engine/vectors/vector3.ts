import { Vector2 } from ".";
import { CameraObject3D } from "../classes/assets/cameraObject";

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
   * Uses simplyfied rotation matrix multiplication to rotate vector in Y axis
   * @param {number} deg number representing degrees vector will be rotated by in the Y axis.
   * @returns {Vector3} this
   */
  rotateY(deg: number): Vector3 {
    deg %= 360;
    const rad = (deg * 2 * Math.PI) / 360;
    const newX = Math.cos(rad) * this.x - Math.sin(rad) * this.z;
    this.z = Math.sin(rad) * this.x + Math.cos(rad) * this.z;
    this.x = newX;
    return this;
  }

  /**
   * Uses simplyfied rotation matrix multiplication to rotate vector in X axis
   * @param {number} deg number representing degrees vector will be rotated by in the X axis.
   * @returns {Vector3} this
   */
  rotateX(deg: number): Vector3 {
    deg %= 360;
    const rad = (deg * 2 * Math.PI) / 360;
    const newY = this.y * Math.cos(rad) - this.z * Math.sin(rad);
    this.z = this.y * Math.sin(rad) + this.z * Math.cos(rad);
    this.y = newY;
    return this;
  }

  /**
   * Uses simplyfied rotation matrix multiplication to rotate vector in Z axis
   * @param {number} deg number representing degrees vector will be rotated by in the Z axis.
   * @returns {Vector3} this
   */
  rotateZ(deg: number): Vector3 {
    deg %= 360;
    const rad = (deg * 2 * Math.PI) / 360;
    const newX = Math.cos(rad) * this.x - Math.sin(rad) * this.y;
    this.y = Math.sin(rad) * this.x + Math.cos(rad) * this.y;
    this.x = newX;
    return this;
  }
  /**
   * Uses simplyfied rotation matrix multiplication to rotate vector in 3 axis represented as Vector3
   * @param {Vector3} rotation Vector representing rotaion in 3 axis in degrees
   * @returns {Vector3} this
   */
  rotate(rotation: Vector3): Vector3 {
    this.rotateX(rotation.x);
    this.rotateY(rotation.y);
    this.rotateZ(rotation.z);
    return this;
  }

  project(camera: CameraObject3D): Vector2 {
    const size = camera.screenSize;
    const relativeToCam = Vector3.between(camera.position, this);
    const [x, y] = [
      size.x / 2 +
        ((camera.FOV * relativeToCam.x) / (camera.FOV + relativeToCam.z)) * 100,
      size.y / 2 +
        ((camera.FOV * relativeToCam.y) / (camera.FOV + relativeToCam.z)) * 100,
    ];
    return new Vector2(x, y);
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
