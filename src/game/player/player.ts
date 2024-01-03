import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";
import { Node2 } from "../../engine/classes/assets";
import player_body from "./player_body";

class Player extends Object2d{
    keysSet: Set<string>;
    rotationSpeed: number;
    
    constructor(){
        super({nodes: player_body, position: new Vector2(0,0), speed: 1});
        this.keysSet = new Set();
        this.rotationSpeed = 1;

        window.addEventListener("keypress", (e)=>{
            this.keysSet.add(e.key);
        })
        window.addEventListener("keyup", (e)=>{
            this.keysSet.delete(e.key);
        })
    }

    onFrame(delta: number): void {
        // y -= this.keysSet.has("w") ? this.speed : 0;
        
        this.rotation -= this.keysSet.has("a") ? this.rotationSpeed : 0;
        this.rotation += this.keysSet.has("d") ? this.rotationSpeed : 0;
        // S0cha TODO: Dodaj movement oparty na velocity
        //this.position.translate(new Vector2(x*delta, y*delta));rp
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
        const drawCircle = (node: Node2, radius:number =1.5, color = "yellow") =>{
            ctx.beginPath();
            const pos = this.getAbsolutePosition(node);
            ctx.arc(pos.x, pos.y, radius, 0, 3* Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
        }
        // this.nodes.forEach(n => drawCircle(n))
        drawCircle(new Node2(0,0), 4, "blue");
    }
}
const player = new Player();

export {player};