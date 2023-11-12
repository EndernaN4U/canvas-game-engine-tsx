import { Vector2 } from "../..";

export class Node2 extends Vector2{
    id: number;
    conects: number[];

    constructor(x: number, y: number, id: number, conects: number[]){
        super(x, y);
        this.id = id;
        this.conects = conects;
    }
}

type Object2dParams = {
    position: Vector2;
    nodes: Node2[];
}

export abstract class Object2d{
    position: Vector2;
    nodes: Node2[];
    abstract onFrame(delta: number): void;

    constructor({ position, nodes }: Object2dParams){
        this.position = position;
        this.nodes = nodes;
    }

    
}