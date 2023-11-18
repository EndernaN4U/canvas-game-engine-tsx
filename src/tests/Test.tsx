import React, { useRef } from "react";
import { Canvas, Engine2d, Vector2 } from "../engine";
import { player } from "./player";

class Game extends Engine2d {
  constructor() {
    super();
    this.addObject(player);

    window.addEventListener("click", (e)=>{
      if(player.isInHitbox(new Vector2(e.clientX, e.clientY)))
        player.audioMap.get("freddy")?.play();
    })
  }
}

export default function Test() {
  const engine = useRef(new Game()).current;

  return <Canvas engine={engine} background="#000" />;
}
