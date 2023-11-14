import React, { useEffect, useRef } from "react";
import { Canvas, Engine2d, Vector2 } from "../engine";
import { forplayerobj, Player } from "./player";

class Game extends Engine2d{
  constructor(){
    super();
    window.addEventListener("mousedown", (e)=>{
      const cforplayer = {...forplayerobj};
      cforplayer.position = new Vector2(e.clientX, e.clientY);

      const newplayer = new Player(cforplayer);
      this.addObject(newplayer)
  })
  }
}

export default function Test() {
  const engine = useRef(new Game()).current;

  return (
    <Canvas engine={engine} background="#000"/>
  );
}
