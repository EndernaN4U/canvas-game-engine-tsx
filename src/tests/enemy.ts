import { Vector2 } from "../engine";
import { Object2d, Node2 } from "../engine/classes/assets";

export class TestEnemy extends Object2d {
  iloscPiwa: number;

  constructor(piwo: number, position: Vector2, nodes: Node2[]) {
    super({ position, nodes, color: "#0000ff" });
    this.iloscPiwa = piwo;
  }

  onFrame(delta: number): void {
    console.log(`Tata pije i bije hehe (${3600 / delta} razy)`);
  }
}
