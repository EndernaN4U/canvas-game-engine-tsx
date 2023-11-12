import React, { useEffect } from "react";
import { Vector3 } from "../engine/vectors";
import { Canvas } from "../engine";

export default function Test() {
  useEffect(() => {
    const vec: Vector3 = new Vector3(1, 2, 3);
    vec.translate(new Vector3(1, 2, 3));
    console.log(vec);
  }, []);

  return (
    <div>
      <Canvas dim="2d"></Canvas>
    </div>
  );
}
