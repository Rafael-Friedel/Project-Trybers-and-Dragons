import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances = (): number => this.instances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
