import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";

class Player extends Object2d{
    hp: number;

    constructor(position: Vector2){
        super({position});

        this.hp = 2;
    }

    onFrame(delta: number): void {
        
    }
}