import { LevelType } from ".";
import { Node2 } from "../../../engine/classes/assets";

const level1 = {
    id: 1,
    rounded: false,
    outside: [
        // level 1
        // new Node2(250, 400),
        // new Node2(150, 400),
        // new Node2(150, 300),
        // new Node2(50, 300),
        // new Node2(50, 200),
        // new Node2(-50, 200),
        // new Node2(-50, 300),
        // new Node2(-150, 300),
        // new Node2(-150, 400),
        // new Node2(-250, 400),

        // level 2
        new Node2(300, 100),
        new Node2(200, 100),
        new Node2(100, 100),
        new Node2(0, 100),
        new Node2(-100, 100),
        new Node2(-200, 100),
        new Node2(-300, 100),
        new Node2(-400, 100),

        // level 3 
        // new Node2(-75, 110),
        // new Node2(-200, 200),
        // new Node2(-375, 130),
        // new Node2(-430, 0),
        // new Node2(-430, -150),
        // new Node2(-350, -220),
        // new Node2(-200, -250),
        // new Node2(-75, -180),

        // new Node2(75, -180),
        // new Node2(200, -250),
        // new Node2(350, -220),
        // new Node2(430, -150),
        // new Node2(430, 0),
        // new Node2(375, 130),
        // new Node2(200, 200),
        // new Node2(75, 110),
    ],
    inside: []
} as LevelType;


export { level1 };