import { useRef } from 'react';
import { Canvas, Engine2d, Vector2 } from '../engine';

import { Level } from './level/level';

class TempestGame extends Engine2d{
    screenSize: Vector2;
    constructor(){
        super();
        this.screenSize = new Vector2(window.innerWidth, window.innerHeight);

        this.addObject(new Level(this.screenSize));
    }
}

export default function Tempest() {
    const tempest_game = useRef(new TempestGame()).current;
    return <Canvas engine={tempest_game} />;   
}
