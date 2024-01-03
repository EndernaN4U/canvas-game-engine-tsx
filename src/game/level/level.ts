import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

import type { LevelType } from "./assets";
import type { Connection } from "../../engine/classes/assets";
import { Player } from "../player/player";

class Level extends Object2d{
    level: LevelType;
    player: Player;

    constructor(screenSize: Vector2, level: LevelType){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            ),
            nodes: [],
            color: "blue"
        });
        
        this.level = level;

        this.player = new Player(this);
    }

    onFrame(delta: number): void {
        
    }

    drawLine(ctx: CanvasRenderingContext2D, vec1: Vector2, vec2: Vector2, color = this.color){
        ctx.strokeStyle = color;
        
        ctx.beginPath();
        ctx.moveTo(vec1.x, vec1.y);
        ctx.lineTo(vec2.x, vec2.y);
        ctx.stroke();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const pos_set = new Set(this.player.getIndexesAroundPlayer())

        this.level.outside.forEach((node: Node2, ind: number)=>{
            if(!ind && !this.level.rounded) return;
            const vec_start = this.getAbsolutePosition(node);

            const vec_inside = this.getAbsolutePosition(
                this.level.inside[ind]
            );

            this.drawLine(ctx, vec_start, vec_inside, pos_set.has(ind) ? "yellow" : this.color);
            
            const vec_before = this.getAbsolutePosition(
                this.level.outside[ind-1] ||
                this.level.outside[this.level.outside.length-1]
            );

            this.drawLine(ctx, vec_start, vec_before);

            const vec_inside_bef = this.getAbsolutePosition(
                this.level.inside[ind - 1] ||
                this.level.inside[this.level.inside.length-1]
            );

            this.drawLine(ctx, vec_inside, vec_inside_bef);

        });

        this.player.draw(ctx);

        // For level making: Show were nodes are
        const drawCircle = (node: Node2, radius: number)=>{
            ctx.beginPath();
            const pos = this.getAbsolutePosition(node);
            ctx.arc(pos.x, pos.y, radius, 0, 3 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        this.level.outside.forEach(node=>drawCircle(node, 3));
        this.level.inside.forEach(node=>drawCircle(node, 2));
    }
}

export { Level };