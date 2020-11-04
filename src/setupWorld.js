import Matter from 'matter-js';
import Background from './Entities/Background';
import Ball from './Entities/Ball';
import Floor from './Entities/Floor';
import YbPlayer from './Entities/YbPlayer';
import addEnemies from './addEnemies';
import club from './Constants/club';
import gameWorld, { getAbsolutHeightPosition, getAbsolutWidthPosition } from './Constants/gameWorld';
import headerSound from './Assets/Sounds/header.mp3';
import skinColor from './Constants/skinColor';

const headerAudio = new Audio(headerSound);

const bodiesAreColliding = (pair, nameA, nameB) => {
  const isAColidingWithB = (pair.bodyB.label === nameA && pair.bodyA.label === nameB);
  const isBColidingWithA = (pair.bodyB.label === nameB && pair.bodyA.label === nameA);
  return isAColidingWithB || isBColidingWithA;
};

const setupWorld = (gameEngine, enemy) => {
  const engine = Matter.Engine.create();
  const { world } = engine;
  world.gravity.y = gameWorld.GRAVITY;
  const ball = Matter.Bodies.circle(gameWorld.MAX_WIDTH / 2, 0, getAbsolutHeightPosition(3));
  const stadium = Matter.Bodies.rectangle(0, 0, 0, 0);
  const city = Matter.Bodies.rectangle(0, 0, 0, 0);

  ball.label = 'ball';
  ball.isNotFixed = false;

  const floor1 = Matter.Bodies.rectangle(
    gameWorld.MAX_WIDTH / 2,
    gameWorld.MAX_HEIGHT - getAbsolutHeightPosition(10),
    gameWorld.MAX_WIDTH + 4,
    getAbsolutHeightPosition(10),
    { isStatic: true },
  );
  floor1.label = 'floor';
  const player1 = Matter.Bodies.rectangle(
    gameWorld.MAX_WIDTH / 2,
    gameWorld.MAX_HEIGHT - getAbsolutHeightPosition(20),
    getAbsolutWidthPosition(10),
    getAbsolutHeightPosition(20),
    {
      inertia: Infinity,
    },
  );
  player1.label = 'player1';
  player1.mass = 1;
  player1.inverseMass = 1;

  Matter.World.add(world, [ball, floor1, player1]);
  Matter.Events.on(engine, 'collisionStart', (event) => {
    const isGoalReached = ball.isNotFixed;

    if (event.pairs.filter((element) => bodiesAreColliding(element, 'player1', 'ball')).length !== 0) {
      if (isGoalReached) {
        Matter.Body.setVelocity(ball, {
          x: getAbsolutWidthPosition(1),
          y: ball.velocity.y,
        });
      } else {
        Matter.Body.setVelocity(ball, {
          x: ball.velocity.x,
          y: -getAbsolutWidthPosition(1),
        });
      }
      headerAudio.play();
      gameEngine.current.dispatch({ type: 'score' });
    } else if (event.pairs.filter((element) => bodiesAreColliding(element, 'floor', 'ball')).length !== 0 && !isGoalReached) {
      // The ball collided with the floor.
      gameEngine.current.dispatch({ type: 'game-over' });
    }
  });
  const enemies = addEnemies(engine, enemy);

  return {
    ...enemies,
    physics: { engine, world },
    ball: { body: ball, renderer: Ball },
    floor1: { body: floor1, renderer: Floor },
    player1: {
      body: player1,
      stadium,
      city,
      renderer: YbPlayer,
      skinColor: skinColor.latin,
      club: club.yb,
    },

    bg: {
      stadium,
      city,
      endReached: () => {
        gameEngine.current.dispatch({ type: 'end-reached' });
      },
      goalReached: () => {
        if (ball.isNotFixed === false) {
          ball.isNotFixed = true;
        }
      },
      renderer: Background,
    },
  };
};

export default setupWorld;
