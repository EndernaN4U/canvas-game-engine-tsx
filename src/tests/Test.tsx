import React, { useEffect, useRef } from "react";
import { Canvas, Engine2d } from "../engine";
import { playerObj } from "./player";

class Game extends Engine2d{
  constructor(){
    super();
    this.addObject(playerObj);
  }
}

export default function Test() {
  const engine = useRef(new Game()).current;

  return (
    <div>
      <Canvas engine={engine} background="#000"/>
    </div>
  );
}
