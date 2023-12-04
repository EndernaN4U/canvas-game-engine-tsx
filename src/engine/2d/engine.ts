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
      gameObject.draw(this.ctx);
    });
  }
}
