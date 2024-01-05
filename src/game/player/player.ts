import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";
import { Node2 } from "../../engine/classes/assets";
import player_body from "./player_body";

class Player extends Object2d{
    keysSet: Set<string>;
    rotationSpeed: number;
    
    constructor(){
        super({nodes: player_body, position: new Vector2(0,0), speed: 0.001, maxVelocity: 5});
        this.keysSet = new Set();
        this.rotationSpeed = 0.25;

        window.addEventListener("keypress", (e)=>{
            this.keysSet.add(e.key);
        })
        window.addEventListener("keyup", (e)=>{
            this.keysSet.delete(e.key);
        })
    }

    traction(delta: number): void{
        const   multx = this.velocity.x >= 0 ? 1 : -1,
                multy = this.velocity.y >= 0 ? 1 : -1;
        
        const traction = this.speed / 5 * delta;
        this.velocity.x = (Math.abs(this.velocity.x) - traction)*multx;
        this.velocity.y = (Math.abs(this.velocity.y) - traction)*multy;
          
    }

    onFrame(delta: number): void {
        this.velocity.x += this.keysSet.has("w") ? this.speed * delta * Math.sin(this.rotation * Math.PI / 180 - 90) : 0;
        this.velocity.y += this.keysSet.has("w") ? this.speed * delta * -Math.cos(this.rotation * Math.PI / 180 - 90) : 0;

        this.traction(delta);
        
        this.rotation -= this.keysSet.has("a") ? this.rotationSpeed * delta : 0;
        this.rotation += this.keysSet.has("d") ? this.rotationSpeed * delta : 0;
        this.position.translate(this.velocity);

        if(this.position.x >= 1500) this.position.x = 0;
        else if(this.position.x <= 0) this.position.x = 1500;
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