import Matter from 'matter-js';
import Constants, { GetAbsolutHeightPosition, GetAbsolutWidthPosition } from '../Constants';
import EnemyPlayer from './EnemyPlayer';
import skinColor from '../Constants/skinColor';

const newEnemy = (xPosition) => {
  const body = Matter.Bodies.rectangle(
    xPosition,
    Constants.MAX_HEIGHT - GetAbsolutHeightPosition(20),
    GetAbsolutWidthPosition(10),
    GetAbsolutHeightPosition(20),
    {
      inertia: Infinity,
    },
  );

  body.mass = 10;
  body.inverseMass = 1 / 10;
  return body;
};

const addEnemies = (engine, club) => {
  const enemies = [newEnemy(GetAbsolutWidthPosition(100))];

  Matter.World.add(engine.world, enemies);

  return {
    enemy1: {
      body: enemies[0],
      renderer: EnemyPlayer,
      skinColor: skinColor.black,
      club,
    },
  };
};

export default addEnemies;
