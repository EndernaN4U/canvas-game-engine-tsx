import { Object2d, Node2 } from "../engine/classes/assets";
import { Vector2 } from "../engine";

import music from "./audio/freddy.mp3";
import Bullet from "./bullet";

type PlayerParams = {
  hp: number;
  atck: number;
  position: Vector2;
  nodes: Node2[];
  hitboxes: number[][];
  audioMap: Map<string, HTMLAudioElement>;
  speed: number;
};

class Player extends Object2d {
  hp: number;
  atck: number;
  tick: number;
  keysSet: Set<string>;
  bullets: Array<Bullet>

  constructor({
    hp,
    atck,
    position,
    nodes,
    hitboxes,
    audioMap,
    speed,
  }: PlayerParams) {
    super({ position, nodes, hitboxes, audioMap, isMovable: true, speed });
    this.hp = hp;
    this.atck = atck;
    this.tick = 0;

    this.keysSet = new Set();
    this.bullets = [];

    window.addEventListener("keypress", (e)=>{
        this.keysSet.add(e.key);
        if(e.key == " ") this.bullets.push(new Bullet(this.position.clone()));
    })
    window.addEventListener("keyup", (e)=>{
        this.keysSet.delete(e.key);
    })
  }
  onFrame(delta: number): void {
    // Very basic player movement
    let x = 0, y = 0;
    y -= this.keysSet.has("w") ? this.speed : 0;
    y += this.keysSet.has("s") ? this.speed : 0;
    x -= this.keysSet.has("a") ? this.speed : 0;
    x += this.keysSet.has("d") ? this.speed : 0;

    this.bullets = this.bullets.filter(x=>x.position.x < 1920);
    this.bullets.forEach((bullet)=>bullet.onFrame(delta));

    this.position.translate(new Vector2(x*delta, y*delta));
  }
  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    this.bullets.forEach((bullet)=>{
      bullet.draw(ctx);
    })
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
  ]),
  speed: 1
});
