import React, { useEffect, useRef } from "react";
import { EngineBase } from ".";

type CanvasProps = {
  children?: JSX.Element | JSX.Element[];
  engine: EngineBase;
  background: string;
};

export default function Canvas({ children, engine, background }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    if(canvasRef.current) engine.setCanvas(canvasRef.current, background);
  },[])

  return <canvas ref={canvasRef}>{children}</canvas>;
}
