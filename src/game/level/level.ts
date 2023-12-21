import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

import type { LevelType } from "./levels_assets";
import type { Connection } from "../../engine/classes/assets";
import { level1 } from "./levels_assets";

class Level extends Object2d{
    level: LevelType;

    constructor(screenSize: Vector2){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            ),
            nodes: [...level1.outside, ...level1.inside],
            color: "blue"
        });

        this.level = level1;
        this.newLevel();
    }

    setConnection(which: number, to: number[]): void{
        this.nodes[which].conects =
            to.map(node=>({id: node} as Connection));
    }

    newLevel(): void{
        const nodes_amout = this.level.outside.length;
        let i = 1;
        for(let i = 1; i > nodes_amout; i++){
            this.setConnection(i, [i-1, nodes_amout+i]);
            this.setConnection(nodes_amout+i, [nodes_amout+i-1]);
        }

        if(this.level.rounded){
            // TODO: Add setConnection 0 to -1
        }
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

        this.level.outside.forEach(node=>drawCircle(node, 3));
        this.level.inside.forEach(node=>drawCircle(node, 2));
    }
}

export { Level };