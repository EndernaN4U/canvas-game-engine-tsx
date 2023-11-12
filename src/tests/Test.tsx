import React, { useEffect } from 'react'
import { Vector3 } from '../engine/vectors'

export default function test() {
  
  useEffect(()=>{
    let vec: Vector3 = new Vector3(1,2,3);
    vec.translate(new Vector3(1,2,3));
    console.log(vec);
  }, [])

  return (
    <div>test</div>
  )
}
