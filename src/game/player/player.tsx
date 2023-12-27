import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";
import { Level } from "../level/level";

class Player extends Object2d{
    hp: number;

    level: Level; 
    outside_position: number;
    
    constructor(level: Level){
        const lvlType = level.level;
        const middle_ind = Math.floor(lvlType.outside.length / 2) - 1;

        const position = lvlType
        .outside[middle_ind]
        .position.clone()           // Clone position of first outside node
        .translate(level.position)  // Translate it by level object position
        .translate(
            Vector2.between(
                lvlType.outside[middle_ind].position,
                lvlType.outside[middle_ind + 1].position
            ).multiplyBy(.5)
        );                          // Translate it by middle point of 2 nodes 

        super({position});

        this.hp = 2;

        this.level = level;
        this.outside_position = middle_ind;
    }

    onFrame(): void {}

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        const pos = this.position;
        ctx.arc(pos.x, pos.y, 20, 0, 3 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}

export { Player };