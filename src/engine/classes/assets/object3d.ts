import { Vector3 } from "../..";
import BaseObject from "./baseObject";
import { CameraObject3D } from "./cameraObject";

export class Node3 {
  conects: number[];
  position: Vector3;
  constructor(x: number, y: number, z: number, conects: number[]) {
    this.position = new Vector3(x, y, z);
    this.conects = conects;
  }
}

type Object3dParams = {
  position: Vector3;
  nodes?: Node3[];
  color?: string;
  scale?: number;
  rotation?: Vector3;
};

export abstract class Object3d implements BaseObject {
  position: Vector3;
  nodes: Node3[];
  color: string;
  scale: number;
  rotation: Vector3;
  abstract onFrame(delta: number): void;

  constructor({
    position,
    nodes = [],
    color = "#fff",
    scale = 1,
    rotation = new Vector3(0,0,0),
  }: Object3dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
    this.scale = scale;
    this.rotation = rotation;
  }

  draw(ctx: CanvasRenderingContext2D, camera: CameraObject3D ): void {
    this.nodes.forEach(node => {
      const absPos = this.getAbsolutePosition(node);
      const cameraPos = camera.position;
      const vec = Vector3.between(cameraPos, absPos);

    })
  }

  /**
   * Transforms a node with relative position (Vector2) into vector based on 0, 0 (absolute position)
   * @param node node to be transfomed.
   * @returns new instance of Vector2 representing absolute coordinates
   */
  getAbsolutePosition(node: Node3): Vector3 {
    return node.position
      .clone()
      .multiplyBy(this.scale)
      .rotateY(this.rotation.y)
      .translate(this.position);
  }
}
