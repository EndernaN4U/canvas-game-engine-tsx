import { LevelType } from ".";
import { Node2 } from "../../../engine/classes/assets";

const level1 = {
    id: 1,
    outside: [
        new Node2(-500, -250),
        new Node2(-500, 250),
        new Node2(500, 250),
        new Node2(500, -250)
    ],
    inside: [
        new Node2(-250, -125),
        new Node2(-250, 125),
        new Node2(250, 125),
        new Node2(250, -125)
    ]
} as LevelType;


export { level1 };