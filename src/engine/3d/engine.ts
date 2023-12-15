import { Vector2, Vector3 } from "..";
import { EngineBase } from "../classes";
import { Object3d } from "../classes/assets";
import { CameraObject3D } from "../classes/assets/cameraObject";

export abstract class Engine3d extends EngineBase {
  objects: Object3d[];
  camera: CameraObject3D;
  constructor() {
    super();
    this.objects = [];
    this.camera = new CameraObject3D({
      position: new Vector3(0, 0, 0),
      FOV: 20,
      screenSize: new Vector2(this.canvas.width, this.canvas.height),
    });
  }
  draw(): void {
    this.objects.forEach((gameObject) => {
      gameObject.draw(this.ctx, this.camera);
    });
  }
  onFrame(delta: number): void {
    this.objects.forEach((obj) => obj.onFrame(delta));
  }
}
