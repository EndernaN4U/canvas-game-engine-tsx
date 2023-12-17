import React, { useCallback, useEffect, useRef, useState } from "react";
import { EngineBase } from ".";

type CanvasProps = {
  engine: EngineBase;
  children?: JSX.Element | JSX.Element[];
  background?: string;
};

export default function Canvas({ children, engine, background }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resize = () => {
    setCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      engine.setCanvas(canvasRef.current, background);
      engine.start();
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
    ref={canvasRef}
    width={canvasSize.width} 
    height={canvasSize.height} 
    style={{background}}>
      {children}
    </canvas>
  );
}
