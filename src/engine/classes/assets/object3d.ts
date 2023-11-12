import { Vector3 } from "../..";

export class Node3 extends Vector3{
    id: number;
    conects: number[];

    constructor(x: number, y: number, z: number, id: number, conects: number[]){
        super(x, y, z);
        this.id = id;
        this.conects = conects;
    }
}

type Object3dParams = {
    position: Vector3;
    nodes: Node3[];
}

export abstract class Object3d{
    position: Vector3;
    nodes: Node3[];
    abstract onFrame(delta: number): void;

    constructor({ position, nodes }: Object3dParams){
        this.position = position;
        this.nodes = nodes;
    }
}