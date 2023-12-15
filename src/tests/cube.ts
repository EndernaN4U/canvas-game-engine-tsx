import { Vector3 } from "../engine";
import { Node3, Object3d, Object3dParams } from "../engine/classes/assets";

export class Cube extends Object3d {
  onFrame(delta: number): void {
    this.rotation.y += 360 * (delta / 1000) * 0.3;
    this.rotation.z += 360 * (delta / 1000) * 0.3;
  }
  constructor(params: Object3dParams) {
    super(params);
    this.rotation.x = 45;
  }
}
const exampleCubeNodes: Node3[] = [
  // botton sq
  new Node3(-25, -25, -25, [4, 1, 5, 2]), // 0
  new Node3(25, -25, -25, [5, 2, 6]), // 1
  new Node3(25, -25, 25, [3, 6, 7]), // 2
  new Node3(-25, -25, 25, [0, 4, 7]), // 3
  // top sq
  new Node3(-25, 25, -25, [5, 6]), // 4
  new Node3(25, 25, -25, [6]), // 5
  new Node3(25, 25, 25, [7]), // 6
  new Node3(-25, 25, 25, [4]), // 7
];

export const exampleCube = new Cube({
  position: new Vector3(0, 0, 0),
  nodes: exampleCubeNodes,
  color: "#FFFFFF",
});
