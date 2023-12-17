import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";

class Level extends Object2d{
    constructor(screenSize: Vector2){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            )
        });
    }

    onFrame(delta: number): void {
        
    }
}

export { Level };