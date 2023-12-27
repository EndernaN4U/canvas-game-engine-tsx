import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

import { level1, type LevelType } from "./levels_assets";
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
            nodes: [...level.outside, ...level.inside],
            color: "blue"
        });

        
        this.level = level;
        this.newLevel();

        this.player = new Player(this);
    }

    setConnection(which: number, to: number[]): void{
        this.nodes[which].conects =
            to.map(node=>({id: node} as Connection));
    }

    newLevel(): void{
        const nodes_amout = this.level.outside.length;
        for(let i = 0; i < nodes_amout-1; i++){
            this.setConnection(i, [i+1, nodes_amout+i]);
            this.setConnection(nodes_amout+i, [nodes_amout+i+1]);
        }

        if(this.level.rounded){
            const last_node = this.nodes.length-1
            this.setConnection(nodes_amout-1, [0, last_node]);
            this.setConnection(last_node, [nodes_amout]);
        }
    }

    onFrame(delta: number): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
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