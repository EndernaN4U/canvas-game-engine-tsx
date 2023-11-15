import { EngineBase } from "../classes";
import { Object2d } from "../classes/assets";

export abstract class Engine2d extends EngineBase {
  objects: Object2d[];
  constructor(objects: Object2d[] = []) {
    super();
    this.objects = objects;
  }
  onFrame(delta: number): void {
    this.objects.forEach((obj) => {
      obj.onFrame(delta);
    });
    // console.log("frame");
  }

  addObject(object: Object2d) {
    this.objects.push(object);
  }

  draw(): void {
    this.objects.forEach((gameObject) => {
      gameObject.nodes.forEach((node) => {
        this.ctx.strokeStyle = gameObject.color;

        const nodeStart = gameObject.getAbsolutePosition(node);

        node.conects.forEach((destNode) => {
          this.ctx.beginPath();
          this.ctx.moveTo(nodeStart.x, nodeStart.y);

          const destPosition = gameObject.getAbsolutePosition(
            gameObject.nodes[destNode]
          );

          this.ctx.lineTo(destPosition.x, destPosition.y);
          this.ctx.stroke();
        });
      });
    });
  }
}
