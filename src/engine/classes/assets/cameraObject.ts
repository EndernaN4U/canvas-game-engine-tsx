import { Object3d } from ".";
import { Vector2, Vector3 } from "../..";

type CameraObject3DParams = {
    position: Vector3;
    FOV: number;
    screenSize: Vector2
}

export class CameraObject3D extends Object3d {
    FOV: number;
    screenSize: Vector2;

    constructor({position, FOV, screenSize}: CameraObject3DParams){
        super({position});

        this.FOV = FOV;
        this.screenSize = screenSize;
    }
    onFrame(delta: number): void {

    }
}