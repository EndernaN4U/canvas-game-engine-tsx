import { Object2d, Object2dParams } from "../../engine/classes/assets";
import { PlayerConsts } from "../consts/player";

export class player extends Object2d {
  presedKeys: { [key: string]: boolean } = {};
  lives = PlayerConsts.lives;

  onFrame(delta: number): void {}

  constructor(props: Object2dParams) {
    super(props);
    window.onkeydown = function (e: KeyboardEvent) {
      (this as player).presedKeys[e.key] = true;
    }.bind(this);
    window.onkeyup = function (e: KeyboardEvent) {
      (this as player).presedKeys[e.key] = false;
    }.bind(this);
  }
}
