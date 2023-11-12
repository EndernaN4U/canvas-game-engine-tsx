import { Vector2 } from "..";
import { TestEnemy } from "../../tests/enemy";
import { EngineBase } from "../classes";
import { Node2, Object2d } from "../classes/assets";

export class Engine2d extends EngineBase {
  objects: Object2d[];
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.objects = [
      new TestEnemy(0, new Vector2(20, 20), [
        new Node2(0, 0, [1]),
        new Node2(100, 0, [2]),
        new Node2(100, 100, [3]),
        new Node2(0, 100, [0]),
      ]),
    ];
  }
  draw(): void {
    this.objects.forEach((gameObject) => {
      gameObject.nodes.forEach((node) => {
        this.ctx.strokeStyle = gameObject.color;

        const nodeStart = Vector2.translate(gameObject.position, node.position);

        node.conects.forEach((destNode) => {
          this.ctx.beginPath();
          this.ctx.moveTo(nodeStart.x, nodeStart.y);

          const destPosition = Vector2.translate(
            gameObject.position,
            gameObject.nodes[destNode].position
          );

          this.ctx.lineTo(destPosition.x, destPosition.y);
          this.ctx.stroke();
        });
      });
    });
  }
}
