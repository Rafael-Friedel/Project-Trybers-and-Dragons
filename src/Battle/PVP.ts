import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private player1: Fighter, private _player2: Fighter) {
    super(player1);
  }

  fight(): number {
    this.player1.attack(this._player2);
    if (this._player2.lifePoints <= 0) {
      return 1;
    }
    this._player2.attack(this.player1);
    if (this.player1.lifePoints <= 0) {
      return -1;
    }
    return 0;
  }
}

export default PVP;
