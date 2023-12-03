export default abstract class BaseObject {
  abstract onFrame(delta: number): void;
  abstract draw(ctx: CanvasRenderingContext2D): void;
}
