import { Node2 } from "../../../engine/classes/assets";

const player_body: Node2[] = [
    // TODO: change player body from static to dynamic sizing

    new Node2(0, -15, [1]),
    new Node2(40, 5, [2]),
    new Node2(17.5, 32.5, [3]),
    new Node2(22.5, 15, [4]),
    new Node2(0, 0, [5]),
    new Node2(-22.5, 15, [6]),
    new Node2(-17.5, 32.5, [7]),
    new Node2(-40, 5, [0]),
];

export { player_body };
