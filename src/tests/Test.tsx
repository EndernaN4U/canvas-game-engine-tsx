import React, { useEffect, useRef } from "react";
import { Canvas, Engine2d } from "../engine";
import { playerObj } from "./player";

class Game extends Engine2d{
  
}

export default function Test() {
  const engine = useRef(new Game()).current;
  useEffect(() => {
    engine.addObject(playerObj)
  }, []);

  return (
    <div>
      <Canvas engine={engine} background="#000"/>
    </div>
  );
}
