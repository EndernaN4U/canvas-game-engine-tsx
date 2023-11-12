import { Vector2 } from "../engine";
import { Object2d, Node2 } from "../engine/classes/assets";

class TwojTataPoPiwieEnemi extends Object2d{
    iloscPiwa: number;

    constructor(piwo: number, position: Vector2, nodes: Node2[]){
        super({position, nodes});
        this.iloscPiwa = piwo;
    }

    onFrame(delta: number): void {
        console.log(`Tata pije i bije hehe (${3600/delta} razy)`);
    }
}