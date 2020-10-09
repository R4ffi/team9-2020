import Matter from "matter-js";
import { EnemyPlayer } from "../Entities/enemyPlayer";
import { club } from "../Constants/club";
import { skinColor } from "../Constants/skinColor";

export function addEnemies(engine) {
  const enemy1 = Matter.Bodies.rectangle(400,400, 200, 200, {
    inertia: Infinity,
  });

  Matter.World.add(engine.world, [enemy1]);

  return {
    enemy1: {
      body: enemy1,
      renderer: EnemyPlayer,
      skinColor: skinColor.black,
      club: club.luzern,
    },
  };
}
