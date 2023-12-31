import { Vector2 } from "../../engine";
import { Object2d } from "../../engine/classes/assets";
import { Level } from "../level/level";
import { player_body } from "./assets/player_body";

class Player extends Object2d {
  hp: number;

  level: Level;
  outside_position: number;

  lastMovement: number; 

  constructor(level: Level) {
    super({ position: new Vector2(0, 0), nodes: player_body,color: 'yellow' } );

    this.hp = 2;
    this.level = level;

    this.lastMovement = Date.now();

    const middle_ind = Math.floor(level.level.outside.length / 2) - 1;
    this.outside_position = middle_ind;

    this.calcPosition();
    this.calcRotation();

    window.addEventListener("keypress", (e) => {
      if(Date.now() - this.lastMovement < 45) return;   // Movement limiter ( 45ms beetwen movement )
      const last_index = this.level.level.outside.length - 1;
      
      switch (e.key) {
        case "a":
          if (this.outside_position == 0) this.outside_position = last_index; // Movement guards
          else this.outside_position--;
          break;
          case "d":
            if (this.outside_position == last_index) this.outside_position = 0;
            else this.outside_position++;
            break;
          }
        this.calcPosition();
        this.calcRotation();
        this.lastMovement = Date.now();
    });
  }

  onFrame(): void {}

  calcPosition(): void {
    const lvlType = this.level.level;
    const length = lvlType.outside.length;

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

  calcRotation(): void{
    // TODO: Make a method for getting level outside nodes
    const lvlType = this.level.level;
    const length = lvlType.outside.length;

    const index = this.outside_position;
    const second_index = index == length - 1 ? 0 : this.outside_position + 1;

    /*
      Calculates diffrence of 2 nodes 
      so we can calculate radians with formula
      tan(x) = y / x
    */
   
    const between = Vector2.between(
      lvlType.outside[index].position,
      lvlType.outside[second_index].position
    );

    const tan = between.y / between.x;
    const rotation = Math.atan(tan) / Math.PI * 180  // Change radians to degrees
    this.rotation = between.x < 0 ? 180 + rotation : rotation;  
    // If diff.x is smaller from 0 then we need to rotate it
  }

}

export { Player };