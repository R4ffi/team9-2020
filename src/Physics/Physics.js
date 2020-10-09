import Matter from "matter-js";
import Constants from "../Constants";

const Physics = (entities, { touches, time, input }) => {

    //Handle User Input
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
    if (payload) {
        const player = entities["player1"];
        let movment = Constants.SPEED * 2;
        Matter.Body.setVelocity(player.body, { x: movment, y: 0 })
    }

    //Claculate gravitiy stuff
    let engine = entities.physics.engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
};

export default Physics;