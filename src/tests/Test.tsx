import React, { useRef } from "react";
import { Canvas, Engine2d, Vector2 } from "../engine";
import { player } from "./player";

class Game extends Engine2d {
  constructor() {
    super();
    this.addObject(player);
  }
}

export default function Test() {
  const engine = useRef(new Game()).current;

  return <Canvas engine={engine} background="#000" />;
}
