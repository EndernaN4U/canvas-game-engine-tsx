import { Vector2 } from "../..";
import { crossProduct2D } from "../../functions/crossProduct";
import BaseObject from "./baseObject";

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
  nodes?: Node2[];
  color?: string;
  scale?: number;
  rotation?: number;
  hitboxes?: number[][];
  isMovable?: boolean;
  speed?: number;
  velocity?: Vector2;
  maxVelocity?: number;
  audioMap?: Map<string, HTMLAudioElement>;
}

export abstract class Object2d implements BaseObject {
  position: Vector2;
  nodes: Node2[];
  color: string;
  scale: number;
  rotation: number;

  // Audio map

  audioMap: Map<string, HTMLAudioElement>;
  
  // Params for movement

  isMovable: boolean;
  speed: number;
  maxVelocity: number;
  velocity: Vector2;

  private _hitboxes: number[][] = [];

  public set hitboxes(hitboxes: number[][]) {
    this._hitboxes = hitboxes
      .filter((list) => list.length == 3)
      .filter(
        (triangle) =>
          !triangle.some((nodeId) => nodeId > this.nodes.length || nodeId < 0) // checks if there is any of the node ids have invalid value
      );
  }
  public get hitboxes() {
    return this._hitboxes;
  }

  abstract onFrame(delta: number): void;
  /**
   * @param rotation is represented in degrees.
   * @param hitboxes represent array of triangles defined by node ids. list of ids should have exactly 3 elements. Any invalid triangles will be ignored
   */
  constructor({
    position,
    nodes = [],
    color = "#fff",
    scale = 1,
    rotation = 0,
    hitboxes = [],
    audioMap = new Map<string, HTMLAudioElement>(),
    isMovable = false,
    speed = 0,
    maxVelocity = 0,
    velocity = new Vector2(0,0),
  }: Object2dParams) {
    this.position = position;
    this.nodes = nodes;
    this.color = color;
    this.scale = scale;
    this.rotation = rotation;
    this.hitboxes = hitboxes;

    this.audioMap = audioMap;

    this.isMovable = isMovable;
    this.speed = speed;
    this.maxVelocity = maxVelocity;
    this.velocity = velocity;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.nodes.forEach((node) => {  
      ctx.strokeStyle = this.color;

      const nodeStart = this.getAbsolutePosition(node);

      node.conects.forEach((destNode) => {
        ctx.beginPath();
        ctx.moveTo(nodeStart.x, nodeStart.y);

        const destPosition = this.getAbsolutePosition(
          this.nodes[destNode]
        );

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
  getAbsolutePosition(node: Node2): Vector2 {
    return node.position
      .clone()
      .multiplyBy(this.scale)
      .rotateBy(this.rotation)
      .translate(this.position);
  }

  static areColiding(obj1: Object2d, obj2: Object2d): boolean {
    return (
      obj1.nodes.some((node) => obj2.isInHitbox(node.position)) ||
      obj2.nodes.some((node) => obj1.isInHitbox(node.position))
    );
  }

  /**
   * Checks if given point is in hitbox of an object. Complexity O(n) where n is number of hitbox triangles
   */
  isInHitbox(point: Vector2): boolean {
    return this.hitboxes.some((ids) => {
      const triangle = ids.map((id) =>
        this.getAbsolutePosition(this.nodes[id])
      );
      return this.isInTriangle(triangle, point);
    });
  }
  /**
   * Based on article https://blackpawn.com/texts/pointinpoly/
   */
  private isInTriangle(triangle: Vector2[], point: Vector2): boolean {
    return (
      this.sameSide(triangle[2], triangle[1], triangle[0], point) &&
      this.sameSide(triangle[0], triangle[2], triangle[1], point) &&
      this.sameSide(triangle[0], triangle[1], triangle[2], point)
    );
  }

  private sameSide(a: Vector2, b: Vector2, c: Vector2, p: Vector2): boolean {
    const xprod1 = crossProduct2D(Vector2.between(b, a), Vector2.between(p, a));
    const xprod2 = crossProduct2D(Vector2.between(b, a), Vector2.between(c, a));
    return xprod1 * xprod2 >= 0;
  }
}
