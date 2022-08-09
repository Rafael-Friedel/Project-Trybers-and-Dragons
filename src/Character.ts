import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const amountEnergy = getRandomInt(1, 10);

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      amount: amountEnergy,
      type_: this._archetype.energyType,
    };
  }

  get race() {
    return this._race;
  }

  get archertype() {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return this._energy;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    this._defense -= attackPoints;
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  special(enemy: Fighter): void {
    console.log(
      `${this._name} falou: passaaaaa 7, e você está no sal ${enemy}`,
    );
  }
}

export default Character;
