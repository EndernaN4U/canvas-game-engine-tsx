import { useRef } from "react";
import { Canvas, Vector2 } from "../engine";
import { Engine2d } from "../engine";
import { player } from "./player/player";
import { obstacle } from "./obstacles/obstacle";

class AsteroidsGame extends Engine2d{
    screenSize: Vector2; 
    constructor(){
        super();
        this.screenSize = new Vector2(screen.width, screen.height);
        this.addObject(player);
        player.position = this.screenSize.clone().multiplyBy(.5);
        this.addObject(obstacle);
        obstacle.position = this.screenSize.clone().multiplyBy(.5);

    }
}

export default function Asteroids() {
    const asteroids_game = useRef(new AsteroidsGame()).current;
    return <Canvas engine={asteroids_game} background="#000"/>
}