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
};

export abstract class Object2d {
  position: Vector2;
  nodes: Node2[];
  color: string;
  abstract onFrame(delta: number): void;

  constructor({ position, nodes, color }: Object2dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
  }
}
