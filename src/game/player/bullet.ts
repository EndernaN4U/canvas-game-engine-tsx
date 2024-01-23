import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";

class Bullet extends Object2d{
    constructor(position: Vector2, rotation: number){
        super({position, rotation, speed: 0.5,});
    }

    onFrame(delta: number): void {        
        this.position.x += this.speed * delta * Math.sin(this.rotation * Math.PI / 180 - Math.PI / 2);
        this.position.y += this.speed * delta * -Math.cos(this.rotation * Math.PI / 180  - Math.PI / 2);

    }

    draw(ctx: CanvasRenderingContext2D): void {
        const drawCircle = (radius:number =1.5, color = "white") =>{
            ctx.beginPath();
            const pos = this.position;
            ctx.arc(pos.x, pos.y, radius, 0, 3* Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
        }
        drawCircle(5);
    }

}

export {Bullet}