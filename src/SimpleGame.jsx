import Matter from 'matter-js';
import React, { useState, useRef } from 'react';
import { GameEngine } from 'react-game-engine';
import Background from './Entities/Background';
import Ball from './Entities/Ball';
import Constants, { GetAbsolutHeightPosition, GetAbsolutWidthPosition } from './Constants';
import Floor from './Entities/Floor';
import Physics from './Physics/Physics';
import YbPlayer from './Entities/YbPlayer';
import addEnemies from './Entities/enemies';
import club from './Constants/club';
import skinColor from './Constants/skinColor';
import levelUpSound from './Assets/Sounds/levelup.mp3';
import gameOverSound from './Assets/Sounds/gameOver.mp3';
import headerSound from './Assets/Sounds/header.mp3';
import pokal from './Assets/Images/Pokal.jpg';
import GameOver from './GameOver';
import LevelUp from './LevelUp';
import Welcome from './Welcome';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    position: 'absolute',
    color: 'white',
    fontSize: 72,
    top: 30,
    left: Constants.MAX_WIDTH / 2 - 20,
    textShadowColor: '#444444',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: '"04b_19", "Courier New"',
  },
  trophy: {
    position: 'absolute',
    color: '#FFD700',
    fontSize: 72,
    top: 30,
    left: Constants.MAX_WIDTH - (Constants.MAX_WIDTH / 4 - 20),
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: '"04b_19", "Courier New"',
  },
  trophyImage: {
    height: 80,
  },
  year: {
    position: 'absolute',
    color: '#FFD700',
    fontSize: 72,
    top: 30,
    left: Constants.MAX_WIDTH / 4 - 80,
    textShadowColor: '#444444',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: '"04b_19", "Courier New"',
  },
  fullScreenButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
};

const clubOrder = [club.luzern, club.basel, club.stGallen];

const SimpleGame = () => {
  const gameEngine = useRef(null);

  const [clubIndex, setClubIndex] = useState(0);
  const [isGoalReached, setGoalReached] = useState(false);
  const [isEndReached, setEndReached] = useState(false);
  const [isWelcomeScreenVisible, showWelcomeScreen] = useState(true);
  const [isGameRunning, runGame] = useState(false);
  const [score, setScore] = useState(0);
  const [numberOfTrophies, setNumberOfTrophies] = useState(0);
  const [year, setYear] = useState(2018);

  const levelUpAudio = new Audio(levelUpSound);
  const gameOverAudio = new Audio(gameOverSound);
  const headerAudio = new Audio(headerSound);

  const bodiesAreColliding = (pair, nameA, nameB) => {
    const isAColidingWithB = (pair.bodyB.label === nameA && pair.bodyA.label === nameB);
    const isBColidingWithA = (pair.bodyB.label === nameB && pair.bodyA.label === nameA);
    return isAColidingWithB || isBColidingWithA;
  };

  const setupWorld = () => {
    const engine = Matter.Engine.create();
    const { world } = engine;
    world.gravity.y = Constants.GRAVITY;
    const ball = Matter.Bodies.circle(Constants.MAX_WIDTH / 2, 0, GetAbsolutHeightPosition(3));
    const stadium = Matter.Bodies.rectangle(0, 0, 0, 0);
    const city = Matter.Bodies.rectangle(0, 0, 0, 0);

    ball.label = 'ball';
    ball.isNotFixed = false;

    const floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - GetAbsolutHeightPosition(10),
      Constants.MAX_WIDTH + 4,
      GetAbsolutHeightPosition(10),
      { isStatic: true },
    );
    floor1.label = 'floor';
    const player1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - GetAbsolutHeightPosition(20),
      GetAbsolutWidthPosition(10),
      GetAbsolutHeightPosition(20),
      {
        inertia: Infinity,
      },
    );
    player1.label = 'player1';
    player1.mass = 1;
    player1.inverseMass = 1;

    Matter.World.add(world, [ball, floor1, player1]);
    Matter.Events.on(engine, 'collisionStart', (event) => {
      if (event.pairs.filter((element) => bodiesAreColliding(element, 'player1', 'ball')).length !== 0) {
        if (isGoalReached) {
          ball.isNotFixed = true;
          Matter.Body.setVelocity(ball, {
            x: GetAbsolutWidthPosition(1),
            y: ball.velocity.y,
          });
        } else {
          Matter.Body.setVelocity(ball, {
            x: ball.velocity.x,
            y: -GetAbsolutWidthPosition(1),
          });
        }
        headerAudio.play();
        gameEngine.current.dispatch({ type: 'score' });
      } else if (event.pairs.filter((element) => bodiesAreColliding(element, 'floor', 'ball')).length !== 0 && !isGoalReached) {
      // The ball collided with the floor.
        gameEngine.current.dispatch({ type: 'game-over' });
      }
    });
    const enemies = addEnemies(engine, clubOrder[clubIndex]);

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
          gameEngine.current.dispatch({ type: 'goal-reached' });
        },
        renderer: Background,
      },
    };
  };

  const [entities] = useState(setupWorld);

  const handleContinue = () => {
    runGame(true);
    setScore(score + 100);
    setYear(year + 1);
    setNumberOfTrophies(numberOfTrophies + 1);
    setClubIndex(clubIndex + 1);

    if (clubIndex >= clubOrder.length) {
      setClubIndex(0);
    }

    gameEngine.current.swap(setupWorld());
  };

  const handleReset = () => {
    gameEngine.current.swap(setupWorld());

    runGame(true);
    setScore(0);
    setYear(2018);
    setNumberOfTrophies(0);
    setClubIndex(0);
  };

  const handleEvent = (e) => {
    if (e.type === 'game-over') {
      // Alert.alert("Game Over");
      setClubIndex(0);
      gameOverAudio.play();
      runGame(false);
    } else if (e.type === 'score') {
      // Alert.alert("Score!");
      setScore(score + 1);
    } else if (e.type === 'goal-reached') {
      setGoalReached(true);
    } else if (e.type === 'end-reached') {
      setEndReached(true);
      levelUpAudio.play();
      runGame(false);
    }
  };

  return (
    <GameEngine
      className="game"
      ref={gameEngine}
      running={isGameRunning}
      systems={[Physics]}
      onEvent={handleEvent}
      entities={entities}
    >
      <div>
        <div style={styles.year}>{year}</div>
        <div style={styles.trophy}>
          {numberOfTrophies}
          <img src={pokal} alt="field" style={styles.trophyImage} />
        </div>

        <div style={styles.score}>{score}</div>
        {!isGameRunning && !isEndReached && !isWelcomeScreenVisible && (
          <div style={styles.fullScreen}>
            <GameOver onReset={handleReset} />
          </div>
        )}
        {isEndReached && (
          <div style={styles.fullScreen}>
            <LevelUp onContinue={handleContinue} />
          </div>
        )}
        {!isGameRunning && isWelcomeScreenVisible && (
          <div style={styles.fullScreen}>
            <Welcome
              onStart={() => {
                const elem = document.documentElement;
                if (elem.requestFullscreen) {
                  elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                  /* Firefox */
                  elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                  /* Chrome, Safari and Opera */
                  elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                  /* IE/Edge */
                  elem.msRequestFullscreen();
                }
                setTimeout(() => { showWelcomeScreen(false); runGame(true); }, 1300);
              }}
            />
          </div>
        )}
      </div>
    </GameEngine>
  );
};

export default SimpleGame;
