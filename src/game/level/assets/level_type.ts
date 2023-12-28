import { Node2 } from "../../../engine/classes/assets";

type LevelType = {
    id: number;
    outside: Node2[];
    inside: Node2[];
    rounded: boolean;
}

export default LevelType;