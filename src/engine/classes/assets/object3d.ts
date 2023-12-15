import { Node2 } from ".";
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

export type Object3dParams = {
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
    rotation = new Vector3(0, 0, 0),
  }: Object3dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
    this.scale = scale;
    this.rotation = rotation;
  }

  draw(ctx: CanvasRenderingContext2D, camera: CameraObject3D): void {
    const nodes2d = this.nodes.map((node) => {
      const abs = this.getAbsolutePosition(node);

      const vec = abs.project(camera);
      const node2d = new Node2(vec.x, vec.y, node.conects);
      return node2d;
    });

    nodes2d.forEach((node) => {
      ctx.strokeStyle = this.color;

      node.conects.forEach((destNode) => {
        ctx.beginPath();
        ctx.moveTo(node.position.x, node.position.y);

        const destPosition = nodes2d[destNode].position;

        ctx.lineTo(destPosition.x, destPosition.y);
        ctx.stroke();
      });
    });
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
      .rotate(this.rotation)
      .translate(this.position);
  }
}
