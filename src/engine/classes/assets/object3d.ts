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
};

export abstract class Object3d {
  position: Vector3;
  nodes: Node3[];
  color: string;
  abstract onFrame(delta: number): void;

  constructor({ position, nodes, color }: Object3dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
  }
}
