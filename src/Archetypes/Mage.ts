import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances = (): number => this.instances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
