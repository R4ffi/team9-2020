import Matter from "matter-js";
import Constants from "../Constants";

const Physics = (entities, { touches, time, input }) => {

    //Handle User Input
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
    if (payload) {
        const player = entities["player1"];
        let movment = Constants.SPEED * 3;
        //Move player to the left, if hit on the left side
        if (payload.pageX < Constants.MAX_WIDTH / 2) {
            movment *= -1;
        }

        Matter.Body.setVelocity(player.body, { x: movment, y: 0 });
    }

    //Claculate gravitiy stuff
    let engine = entities.physics.engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
};

export default Physics;