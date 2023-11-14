import { Object2d, Node2 } from "../engine/classes/assets";
import { Vector2 } from "../engine";

type PlayerParams = {
    hp: number;
    atck: number;
    position: Vector2;
    nodes: Node2[];
}

class Player extends Object2d{
    hp: number;
    atck: number;
    tick: number;

    constructor({hp, atck, position, nodes}: PlayerParams){
        super({position, nodes});
        this.hp = hp;
        this.atck = atck;
        this.tick = 0;
    }

    onFrame(delta: number): void {
        this.rotation += (360 * delta) / 10000;
        this.position.x += Math.sin(this.tick / 100);
        this.tick++;
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
    ]
})