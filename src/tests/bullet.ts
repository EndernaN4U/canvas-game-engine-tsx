import { Vector2 } from "../engine";
import { Object2d } from "../engine/classes/assets";

class Bullet extends Object2d{
    radius: number;
    constructor(position: Vector2, speed:number = 2, radius: number = 15){
        super({position, speed});
        this.radius = radius;
    }
    onFrame(delta: number): void {
        this.position.x += this.speed*delta;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

export default Bullet;