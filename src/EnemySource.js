import enemies from './Constants/enemies';

class EnemySource {
  constructor() {
    this.index = 0;
  }

  getNextEnemy() {
    const enemy = enemies[this.index];

    this.index += 1;
    if (this.index >= enemies.length) {
      this.index = 0;
    }

    return enemy;
  }

  reset() {
    this.index = 0;
  }
}

export default EnemySource;
