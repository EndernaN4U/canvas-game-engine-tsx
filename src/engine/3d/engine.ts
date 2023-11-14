import { EngineBase } from "../classes";
import { Object3d } from "../classes/assets";

export abstract class Engine3d extends EngineBase {
  objects: Object3d[];
  constructor() {
    super();
    this.objects = [];
  }
  draw(): void {
    throw new Error("Method not implemented.");
  }
}
