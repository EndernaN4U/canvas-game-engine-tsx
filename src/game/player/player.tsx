import { Vector2 } from "../../engine";
import { Node2, Object2d } from "../../engine/classes/assets";
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

  getIndexesAroundPlayer(): [number, number]{
    const outside_array = this.level.level.outside;
    const outside_len = outside_array.length;

    const second_index = this.outside_position == outside_len - 1 ? 0 : this.outside_position + 1;
    
    return [
      this.outside_position,
      second_index
    ]
  }

  getNodesAroundPlayer(): [Node2, Node2]{
    const outside_array = this.level.level.outside;
    const [ind1, ind2] = this.getIndexesAroundPlayer();

    return [
      outside_array[ind1],
      outside_array[ind2]
    ]
  }

  calcPosition(): void {
    const [node1, node2] = this.getNodesAroundPlayer();

    this.position = node1.position
    .clone() // Clone position of first outside node
    .translate(this.level.position) // Translate it by level object position
    .translate(
      Vector2.between(
        node1.position,
        node2.position
      ).multiplyBy(0.5)
    ); // Translate it by middle point of 2 nodes
  }

  calcRotation(): void{
    const [node1, node2] = this.getNodesAroundPlayer();

    /*
      Calculates diffrence of 2 nodes 
      so we can calculate radians with formula
      tan(x) = y / x
    */
   
    const between = Vector2.between(
      node1.position,
      node2.position
    );

    const tan = between.y / between.x;
    const rotation = Math.atan(tan) / Math.PI * 180  // Change radians to degrees
    this.rotation = between.x < 0 ? 180 + rotation : rotation;  
    // If between.x is smaller from 0 then we need to rotate it
  }

}

export { Player };