import React, { useEffect, useRef, useState } from "react";
import { EngineBase, Vector2 } from ".";
import { Engine2d } from "./2d";
import { Engine3d } from "./3d";
import { TestEnemy } from "../tests/enemy";
import { Node2 } from "./classes/assets";

type CanvasProps = {
  dim: "2d" | "3d";
  children?: JSX.Element | JSX.Element[];
};

export default function Canvas({ children, dim }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [engine, setEngine] = useState<EngineBase>();
  useEffect(() => {
    if (canvasRef.current) {
      setEngine(
        dim == "2d"
          ? new Engine2d(canvasRef.current, "#333333")
          : new Engine3d(canvasRef.current)
      );
    }
  }, [dim]);
  useEffect(() => {
    if (!engine) return;
    engine.stop();
    engine.start();
    console.log("start");
    if (engine instanceof Engine2d) {
      engine.addObject(
        new TestEnemy(
          0,
          new Vector2(100, 100),
          [
            new Node2(-50, -50, [1]),
            new Node2(50, -50, [2]),
            new Node2(50, 50, [3]),
            new Node2(-50, 50, [0]),
          ],
          0.5,
          45
        )
      );
    }
  }, [engine]);
  engine?.draw();
  return <canvas ref={canvasRef}>{children}</canvas>;
}
