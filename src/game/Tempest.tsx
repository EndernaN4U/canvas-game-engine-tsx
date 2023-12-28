import { useRef } from 'react';
import { Canvas, Engine2d, Vector2 } from '../engine';

import { Level } from './level/level';

import { level1 } from './level/assets';

class TempestGame extends Engine2d{
    screenSize: Vector2;
    level: Level;

    constructor(){
        super();

        this.screenSize = new Vector2(window.innerWidth, window.innerHeight);

        this.level = new Level(this.screenSize, level1);
        this.addObject(this.level);
    }
}

export default function Tempest() {
    const tempest_game = useRef(new TempestGame()).current;
    return <Canvas engine={tempest_game} />;   
}
