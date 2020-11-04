import React, { useState, useRef } from 'react';
import { GameEngine } from 'react-game-engine';
import EnemySource from './EnemySource';
import GameOver from './GameOver';
import LevelUp from './LevelUp';
import Physics from './Physics/Physics';
import Welcome from './Welcome';
import gameOverSound from './Assets/Sounds/gameOver.mp3';
import gameWorld from './Constants/gameWorld';
import levelUpSound from './Assets/Sounds/levelup.mp3';
import pokal from './Assets/Images/Pokal.jpg';
import setupWorld from './setupWorld';

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
    width: gameWorld.MAX_WIDTH,
    height: gameWorld.MAX_HEIGHT,
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
    left: gameWorld.MAX_WIDTH / 2 - 20,
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
    left: gameWorld.MAX_WIDTH - (gameWorld.MAX_WIDTH / 4 - 20),
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
    left: gameWorld.MAX_WIDTH / 4 - 80,
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

const Game = () => {
  const gameEngine = useRef(null);

  const [enemySource] = useState(new EnemySource());
  const [isLevelCompleted, setLevelCompleted] = useState(false);
  const [isWelcomeScreenVisible, showWelcomeScreen] = useState(true);
  const [isGameRunning, runGame] = useState(false);
  const [score, setScore] = useState(0);
  const [numberOfTrophies, setNumberOfTrophies] = useState(0);
  const [year, setYear] = useState(2018);
  const [entities, setEntities] = useState(null);

  if (!entities) {
    setEntities(setupWorld(gameEngine, enemySource.getNextEnemy()));
  }

  const levelUpAudio = new Audio(levelUpSound);
  const gameOverAudio = new Audio(gameOverSound);

  const handleContinue = () => {
    gameEngine.current.swap(setupWorld(gameEngine, enemySource.getNextEnemy()));

    runGame(true);
    setScore(score + 100);
    setYear(year + 1);
    setNumberOfTrophies(numberOfTrophies + 1);
    setLevelCompleted(false);
  };

  const handleReset = () => {
    runGame(true);
    setScore(0);
    setYear(2018);
    setNumberOfTrophies(0);

    gameEngine.current.swap(setupWorld(gameEngine, enemySource.getNextEnemy()));
  };

  const handleEvent = (e) => {
    if (e.type === 'game-over') {
      enemySource.reset();
      gameOverAudio.play();
      runGame(false);
    } else if (e.type === 'score') {
      setScore(score + 1);
    } else if (e.type === 'end-reached') {
      setLevelCompleted(true);
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
        {!isGameRunning && !isLevelCompleted && !isWelcomeScreenVisible && (
          <div style={styles.fullScreen}>
            <GameOver onReset={handleReset} />
          </div>
        )}
        {isLevelCompleted && (
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

export default Game;
