import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances = (): number => this.instances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
