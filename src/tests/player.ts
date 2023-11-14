import { Object2d, Node2 } from "../engine/classes/assets";
import { Vector2 } from "../engine";

type PlayerParams = {
    hp: number;
    atck: number;
    position: Vector2;
    nodes: Node2[];
    onFrameCall: (delta: number, dis: Player)=>void;
}

class Player extends Object2d{
    hp: number;
    atck: number;
    tick: number;
    onFrameCall: (delta: number, dis: Player)=>void;

    constructor({hp, atck, position, nodes, onFrameCall}: PlayerParams){
        super({position, nodes});
        this.hp = hp;
        this.atck = atck;
        this.tick = 0;
        this.onFrameCall = onFrameCall;
    }
    onFrame(delta: number): void {
        this.onFrameCall(delta, this);
    }
}

export const playerObj = new Player({
    hp: 100,
    atck: 2.5,
    position: new Vector2(50, 50),
    nodes: [
        new Node2(-25, -25, [1]),
        new Node2(25, -25, [2]),
        new Node2(25, 25, [3]),
        new Node2(-25, 25, [0]),
    ],
    onFrameCall: (delta: number, dis: Player)=>{
        dis.rotation += (360 * delta) / 10000;
        dis.position.x += Math.sin(dis.tick / 100);
        dis.tick++;
    }
})