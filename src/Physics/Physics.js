import Matter from "matter-js";

let tick = 0;
let pose = 1;
let pipes = 0;

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    let entity = entities.entity.body;

    let hadTouches = false;
    touches.filter(t => t.type === "press").forEach(t => {
        if (!hadTouches) {
            if (world.gravity.y === 0.0) {
                world.gravity.y = 1.2;

                // addPipesAtLocation((Constants.MAX_WIDTH * 2) - (Constants.PIPE_WIDTH / 2), world, entities);
                // addPipesAtLocation((Constants.MAX_WIDTH * 3) - (Constants.PIPE_WIDTH / 2), world, entities);
            }

            hadTouches = true;
            Matter.Body.setVelocity(entity, {
                x: entity.velocity.x,
                y: -10
            });
        }

    });

    Matter.Engine.update(engine, time.delta);

    Object.keys(entities).forEach(key => {
        if (key.indexOf("pipe") === 0 && entities.hasOwnProperty(key)) {
            Matter.Body.translate(entities[key].body, { x: -2, y: 0 });

            if (key.indexOf("Top") !== -1 && parseInt(key.replace("pipe", "")) % 2 === 0) {
                if (entities[key].body.position.x <= entity.position.x && !entities[key].scored) {
                    entities[key].scored = true;
                    dispatch({ type: "score" });
                }

                if (entities[key].body.position.x <= -1 * (Constants.PIPE_WIDTH / 2)) {
                    let pipeIndex = parseInt(key.replace("pipe", ""));
                    delete(entities["pipe" + (pipeIndex - 1) + "Top"]);
                    delete(entities["pipe" + (pipeIndex - 1)]);
                    delete(entities["pipe" + pipeIndex + "Top"]);
                    delete(entities["pipe" + pipeIndex]);

                    addPipesAtLocation((Constants.MAX_WIDTH * 2) - (Constants.PIPE_WIDTH / 2), world, entities);
                }
            }

        } else if (key.indexOf("floor") === 0) {
            if (entities[key].body.position.x <= -1 * Constants.MAX_WIDTH / 2) {
                Matter.Body.setPosition(entities[key].body, { x: Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2), y: entities[key].body.position.y })
            } else {
                Matter.Body.translate(entities[key].body, { x: -2, y: 0 });
            }
        }
    })

    tick += 1;
    return entities;
};

export default Physics;