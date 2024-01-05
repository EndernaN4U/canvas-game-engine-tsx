import { Node2 } from "../../engine/classes/assets"

const small_asteroid_body = [
    new Node2(-25,-25),
    new Node2(25,-25,[0]),
    new Node2(25,25,[1]),
    new Node2(-25,25,[2]),
];

const middle_asteroid_body = [
    new Node2(-50,-50),
    new Node2(50,-50,[0]),
    new Node2(50,50,[1]),
    new Node2(-50,50,[2]),
];

const big_asteroid_body = [
    new Node2(-75,-75),
    new Node2(75,-75,[0]),
    new Node2(75,75,[1]),
    new Node2(-75,75,[2]),
];

export {small_asteroid_body,middle_asteroid_body,big_asteroid_body};