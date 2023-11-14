import { sleep } from "../functions/sleep";

abstract class EngineBase {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  private _running: boolean;
  private _lastFrame: number | undefined;
  private _maxFps = 100;

  private _backgroundColor: string;
  public get backgroundColor() {
    return this._backgroundColor;
  }

  public set backgroundColor(newColor: string) {
    this._backgroundColor = newColor;
    this.clearCanvas();
    this.draw();
  }
  
  // Some default values
  constructor(){
    this.canvas = new HTMLCanvasElement();
    this.ctx = new CanvasRenderingContext2D();
    this._running = false;
    this._backgroundColor = "#000";
  }

  // Set canvas so it's not nessesary outside canvas.tsx
  setCanvas(canvas: HTMLCanvasElement, backgroundColor: string = "#000"): void{
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (ctx) this.ctx = ctx;
    else throw new Error("Error occured while getting canvas context");

    this._backgroundColor = backgroundColor;
    this._running = false;
    this.clearCanvas();
  }

  abstract draw(): void;
  /**
   * executes every frame, before object's onFrame event
   * @param delta time (ms) since last frame
   */
  abstract onFrame(delta: number): void;

  clearCanvas() {
    this.ctx.fillStyle = this._backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  async start() {
    this._running = true;
    this._lastFrame = Date.now();
    while (this._running) {
      const waitTo = sleep(1000 / this._maxFps);
      this.frame();
      await waitTo;
    }
  }

  stop() {
    this._running = false;
    this._lastFrame = undefined;
  }

  private frame(): void {
    if (this._lastFrame == undefined) return;
    const delta = Date.now() - this._lastFrame;
    this._lastFrame = Date.now();
    this.onFrame(delta);
    this.clearCanvas();
    this.draw();
  }
}

export default EngineBase;
