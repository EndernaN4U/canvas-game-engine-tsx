import React, { useRef } from "react";
import { Canvas, Engine3d, Vector3 } from "../engine";
import { exampleCube } from "./cube";
class Game extends Engine3d {
  onFrame(delta: number): void {
    super.onFrame(delta);
  }
  constructor() {
    super();
    this.objects.push(exampleCube);
    this.camera.position.translate({ x: -75, y: -50, z: -300 } as Vector3);
  }
}

export default function Test3D() {
  const engine = useRef(new Game()).current;

  return <Canvas engine={engine} background="#000" />;
}
