import { Object2d } from "../../engine/classes/assets";
import base_body from "./base";
import { Vector2 } from "../../engine";

class Obstacle extends Object2d{
    constructor() {
        super({nodes:base_body, position: new Vector2(0,0)});
    }
    onFrame(delta: number): void {
        
    }
}
const obstacle = new Obstacle();

export {obstacle}