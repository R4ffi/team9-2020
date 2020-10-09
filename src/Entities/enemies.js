import Constants, {  GetAbsolutHeightPosition,  GetAbsolutWidthPosition,} from "../Constants";
import EnemyPlayer from "../Entities/enemyPlayer";
import Matter from "matter-js";
import { club } from "../Constants/club";
import { skinColor } from "../Constants/skinColor";

export function addEnemies(engine) {
  const enemies = [newEnemy(3000), newEnemy(10000)];

  Matter.World.add(engine.world, enemies);

  return {
    enemy1: {
      body: enemies[0],
      renderer: EnemyPlayer,
      skinColor: skinColor.black,
      club: club.luzern,
    },
    enemy2: {
      body: enemies[1],
      renderer: EnemyPlayer,
      skinColor: skinColor.latin,
      club: club.luzern,
    },
  };
}

function newEnemy(xPosition) {
  const body = Matter.Bodies.rectangle(
    xPosition,
    Constants.MAX_HEIGHT - GetAbsolutHeightPosition(20),
    GetAbsolutWidthPosition(10),
    GetAbsolutHeightPosition(20),
    {
      inertia: Infinity,
    }
  );

  body.label = "blabla";
  return body;
}
