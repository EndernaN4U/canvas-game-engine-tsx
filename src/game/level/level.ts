import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

import { level1 } from "./levels_assets";

class Level extends Object2d{
    outside: Node2[];
    inside: Node2[];

    constructor(screenSize: Vector2){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            ),
            nodes: [...level1.outside, ...level1.inside]
        });
        this.outside = level1.outside;
        this.inside = level1.inside;
    }

    onFrame(delta: number): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
        
        // For level making: Show were nodes are
        const drawCircle = (node: Node2, radius: number)=>{
            ctx.beginPath();
            const pos = this.getAbsolutePosition(node);
            ctx.arc(pos.x, pos.y, radius, 0, 3 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        this.outside.forEach(node=>drawCircle(node, 3));
        this.inside.forEach(node=>drawCircle(node, 2));
    }
}

export { Level };