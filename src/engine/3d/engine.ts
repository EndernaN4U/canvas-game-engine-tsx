import { EngineBase } from "../classes";
import { Object3d } from "../classes/assets";

export class Engine3d extends EngineBase {
  objects: Object3d[];
  constructor(
    canvas: HTMLCanvasElement,
    backgroundColor: string | undefined = undefined
  ) {
    super(canvas, backgroundColor);
    this.objects = [];
  }
  draw(): void {
    throw new Error("Method not implemented.");
  }
}
