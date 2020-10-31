import Matter from 'matter-js';
import Constants from '../Constants';

const Physics = (entities, { time, input }) => {
  // Handle User Input
  const { payload } = input.find((x) => x.name === 'onMouseDown' || x.name === 'onKeyDown') || {};
  if (payload) {
    // If it is a keydown event we only accept arrow left or arrow right.
    if (payload.type !== 'keydown' || payload.key === 'ArrowLeft' || payload.key === 'ArrowRight') {
      const player = entities.player1;
      let movment = Constants.SPEED * 3;
      // Move player to the left, if hit on the left side
      if (payload.pageX < Constants.MAX_WIDTH / 2 || payload.key === 'ArrowLeft') {
        movment *= -1;
      }

      Matter.Body.setVelocity(player.body, Matter.Vector.create(movment, 0));
    }
  }

  // Claculate gravitiy stuff
  const { engine } = entities.physics;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;
