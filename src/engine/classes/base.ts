abstract class EngineBase {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (ctx) this.ctx = ctx;
    else throw new Error("Error occured while getting canvas context");
  }
  abstract draw(): void;
}

export default EngineBase;
