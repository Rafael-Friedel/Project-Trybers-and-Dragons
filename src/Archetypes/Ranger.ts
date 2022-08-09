import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances = (): number => this.instances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
