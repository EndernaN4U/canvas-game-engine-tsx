import { useRef } from 'react';
import { Canvas, Engine2d } from '../engine';

class TempestGame extends Engine2d{

}

export default function Tempest() {
    const tempest_game = useRef(new TempestGame()).current;
  return (
    <Canvas engine={tempest_game} />
  )
}
