import { LevelType } from ".";
import { Node2 } from "../../../engine/classes/assets";

const level1 = {
    id: 1,
    rounded: true,
    outside: [
        new Node2(-75, 110),
        new Node2(-200, 200),
        new Node2(-375, 130),
        new Node2(-430, 0),
        new Node2(-430, -150),
        new Node2(-350, -220),
        new Node2(-200, -250),
        new Node2(-75, -180),

        new Node2(75, -180),
        new Node2(200, -250),
        new Node2(350, -220),
        new Node2(430, -150),
        new Node2(430, 0),
        new Node2(375, 130),
        new Node2(200, 200),
        new Node2(75, 110),
    ],
    inside: [
        new Node2(-15, 22),
        new Node2(-40, 40),
        new Node2(-75, 26),
        new Node2(-86, 0),
        new Node2(-86, -30),
        new Node2(-70, -44),
        new Node2(-40, -50),
        new Node2(-15, -36),

        new Node2(15, -36),
        new Node2(40, -50),
        new Node2(70, -44),
        new Node2(86, -30),
        new Node2(86, 0),
        new Node2(75, 26),
        new Node2(40, 40),
        new Node2(15, 22),
    ]
} as LevelType;


export { level1 };