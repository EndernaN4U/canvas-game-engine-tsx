import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

import { level1 } from "./levels_assets";

class Level extends Object2d{
    outside: Node2[];
    inside: Node2[];

    constructor(screenSize: Vector2){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            ),
            nodes: [...level1.outside, ...level1.inside]
        });
        this.outside = level1.outside;
        this.inside = level1.inside;
    }

    onFrame(delta: number): void {
        
    }
}

export { Level };