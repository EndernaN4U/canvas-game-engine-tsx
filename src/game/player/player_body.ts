import { Node2 } from "../../engine/classes/assets"

const player_body = [
    new Node2(-25, 0),
    new Node2(5, 15, [0]),
    new Node2(5, -15, [0]),

    new Node2(0, 0),
    new Node2(10, 15, [3, 1]),
    new Node2(10, -15, [3, 2]),

    new Node2(10, 0),
    new Node2(4, 6, [6]),
    new Node2(4, -6, [6]),
];

export default player_body;