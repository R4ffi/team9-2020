import Matter from 'matter-js';
import EnemyPlayer from './Entities/EnemyPlayer';
import gameWorld, { getAbsolutHeightPosition, getAbsolutWidthPosition } from './Constants/gameWorld';
import skinColor from './Constants/skinColor';

const newEnemy = (xPosition) => {
  const body = Matter.Bodies.rectangle(
    xPosition,
    gameWorld.MAX_HEIGHT - getAbsolutHeightPosition(20),
    getAbsolutWidthPosition(10),
    getAbsolutHeightPosition(20),
    {
      inertia: Infinity,
    },
  );

  body.mass = 10;
  body.inverseMass = 1 / 10;
  return body;
};

const addEnemies = (engine, club) => {
  const enemies = [newEnemy(getAbsolutWidthPosition(100))];

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
