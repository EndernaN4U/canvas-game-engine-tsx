import { Vector2 } from "../..";

export class Node2 {
  conects: number[];
  position: Vector2;

  constructor(x: number, y: number, conects: number[]) {
    this.position = new Vector2(x, y);
    this.conects = conects;
  }
}

type Object2dParams = {
  position: Vector2;
  nodes: Node2[];
  color: string;
  scale: number;
  rotation: number;
};

export abstract class Object2d {
  position: Vector2;
  nodes: Node2[];
  color: string;
  scale: number;
  rotation: number;
  abstract onFrame(delta: number): void;
  /**
   * @param rotation is represented in degrees.
   */
  constructor({
    position,
    nodes = [],
    color = "#fff",
    scale = 1,
    rotation = 0,
  }: Object2dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
    this.scale = scale;
    this.rotation = rotation;
  }

  /**
   * Transforms a node with relative position (Vector2) into vector based on 0, 0 (absolute position)
   * @param node node to be transfomed.
   * @reaturns new instance of Vector2 representing absolute coordinates
   */
  getAbsolutePosition(node: Node2): Vector2 {
    return node.position
      .clone()
      .multiplyBy(this.scale)
      .rotateBy(this.rotation)
      .translate(this.position);
  }
}
