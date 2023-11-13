import { Vector3 } from "../..";

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
  nodes: Node3[];
  color: string;
  scale: number;
  rotationY: number;
};

export abstract class Object3d {
  position: Vector3;
  nodes: Node3[];
  color: string;
  scale: number;
  rotationY: number;
  abstract onFrame(delta: number): void;

  constructor({
    position,
    nodes,
    color = "#fff",
    scale = 1,
    rotationY = 0,
  }: Object3dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
    this.scale = scale;
    this.rotationY = rotationY;
  }

  /**
   * Transforms a node with relative position (Vector2) into vector based on 0, 0 (absolute position)
   * @param node node to be transfomed.
   * @reaturns new instance of Vector2 representing absolute coordinates
   */
  getAbsolutePosition(node: Node3): Vector3 {
    return node.position
      .clone()
      .multiplyBy(this.scale)
      .rotateY(this.rotationY)
      .translate(this.position);
  }
}
