import { Object2d, Node2 } from "../engine/classes/assets";
import { Vector2 } from "../engine";

import music from "./audio/freddy.mp3";

type PlayerParams = {
  hp: number;
  atck: number;
  position: Vector2;
  nodes: Node2[];
  hitboxes: number[][];
  audioMap: Map<string, HTMLAudioElement>;
};

class Player extends Object2d {
  hp: number;
  atck: number;
  tick: number;

  constructor({
    hp,
    atck,
    position,
    nodes,
    hitboxes,
    audioMap
  }: PlayerParams) {
    super({ position, nodes, hitboxes, audioMap });
    this.hp = hp;
    this.atck = atck;
    this.tick = 0;
  }
  onFrame(delta: number): void {
    
  }
}

export const player = new Player({
  hp: 100,
  atck: 2.5,
  position: new Vector2(50, 50),
  nodes: [
    new Node2(-25, -25, [1, 2]),
    new Node2(25, -25, [2]),
    new Node2(25, 25, [3]),
    new Node2(-25, 25, [0]),
  ],
  hitboxes: [
    [0, 1, 2],
    [0, 2, 3],
  ],
  audioMap: new Map([
    ["freddy", new Audio(music)]
  ])
});
