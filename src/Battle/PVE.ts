import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private monster: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    const response = this.monster.map((monster) => {
      this.player.attack(monster);
      if (monster.lifePoints <= 0) {
        return 1;
      }
      monster.attack(this.player);
      if (this.player.lifePoints <= 0) {
        return -1;
      }
      return 0;
    });
    return response[0];
  }
}

export default PVE;
