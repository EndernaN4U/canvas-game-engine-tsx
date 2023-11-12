import React, { useEffect, useRef, useState } from "react";
import { EngineBase } from ".";
import { Engine2d } from "./2d";
import { Engine3d } from "./3d";

type CanvasProps = {
  dim: "2d" | "3d";
  children?: JSX.Element | JSX.Element[];
};

export default function Canvas({ children, dim }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [engine, setEngine] = useState<EngineBase>();
  useEffect(() => {
    if (canvasRef.current)
      setEngine(
        dim == "2d"
          ? new Engine2d(canvasRef.current)
          : new Engine3d(canvasRef.current)
      );
  }, [dim]);
  engine?.draw();
  return <canvas ref={canvasRef}>{children}</canvas>;
}
