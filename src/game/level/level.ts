import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";

class Level extends Object2d{
    constructor(screenSize: Vector2){
        super({
            position: new Vector2(
                screenSize.x / 2,
                screenSize.y / 2
            ),
            nodes: [
                new Node2(-50, -50, [{id: 1, color: "red"}, 3]),
                new Node2(-50, 50),
                new Node2(50, 50, [1, 3]),
                new Node2(50, -50),
            ]
        });  
    }

    onFrame(delta: number): void {

    }
}

export { Level };