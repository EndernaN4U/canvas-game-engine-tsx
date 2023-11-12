import React, { useEffect, useRef } from "react";

type CanvasProps = {
  children?: JSX.Element | JSX.Element[];
};

export default function Canvas({ children }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {}, []);

  return <canvas ref={canvasRef}>{children}</canvas>;
}
