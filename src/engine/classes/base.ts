abstract class EngineBase {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  private _backgroundColor: string;
  public get backgroundColor() {
    return this._backgroundColor;
  }

  public set backgroundColor(newColor: string) {
    this._backgroundColor = newColor;
    this.clearCanvas();
    this.draw();
  }

  constructor(canvas: HTMLCanvasElement, backgroundColor: string = "#000") {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (ctx) this.ctx = ctx;
    else throw new Error("Error occured while getting canvas context");

    this._backgroundColor = backgroundColor;
    this.clearCanvas();
  }

  abstract draw(): void;

  clearCanvas() {
    this.ctx.fillStyle = this._backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default EngineBase;
