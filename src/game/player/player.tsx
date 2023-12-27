import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";
import { Level } from "../level/level";

class Player extends Object2d {
  hp: number;

  level: Level;
  outside_position: number;

  constructor(level: Level) {
    super({ position: new Vector2(0, 0) });

    this.hp = 2;
    this.level = level;

    const middle_ind = Math.floor(level.level.outside.length / 2) - 1;
    this.outside_position = middle_ind;

    this.calcPosition();

    window.addEventListener("keypress", (e) => {
      const last_index = this.level.level.outside.length - 1;

      switch (e.key) {
        case "a":
          if (this.outside_position == 0) this.outside_position = last_index;
          else this.outside_position--;
          break;
        case "d":
          if (this.outside_position == last_index) this.outside_position = 0;
          else this.outside_position++;
          break;
      }
      this.calcPosition();
    });
  }

  onFrame(): void {}

  calcPosition(): void {
    const lvlType = this.level.level;
    const length = lvlType.outside.length

    const index = this.outside_position;
    const second_index = index == length - 1 ? 0 : this.outside_position + 1;

    this.position = lvlType.outside[index].position
      .clone() // Clone position of first outside node
      .translate(this.level.position) // Translate it by level object position
      .translate(
        Vector2.between(
          lvlType.outside[index].position,
          lvlType.outside[second_index].position
        ).multiplyBy(0.5)
      ); // Translate it by middle point of 2 nodes
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    const pos = this.position;
    ctx.arc(pos.x, pos.y, 20, 0, 3 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }
}

export { Player };