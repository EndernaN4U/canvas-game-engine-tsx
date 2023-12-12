import { EngineBase } from "../classes";
import { Object3d } from "../classes/assets";
import { CameraObject3D } from "../classes/assets/cameraObject";

export abstract class Engine3d extends EngineBase {
  objects: Object3d[];
  constructor() {
    super();
    this.objects = [];
  }
  draw(): void {
    this.objects.forEach((gameObject) => {
      gameObject.draw(this.ctx,);
    });
  }
}
