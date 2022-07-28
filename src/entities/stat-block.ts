import { Ability, AbilityType } from "./ability";

export interface StatBlockParams {
  str: Ability
  dex: Ability
  con: Ability
  int: Ability
  wis: Ability
  cha: Ability
  ac: number
  statblock: Record<string, any>
}

export class StatBlock {
  str: Ability = new Ability(AbilityType.STR, 0);
  dex: Ability = new Ability(AbilityType.DEX, 0);
  con: Ability = new Ability(AbilityType.CON, 0);
  int: Ability = new Ability(AbilityType.INT, 0);
  wis: Ability = new Ability(AbilityType.WIS, 0);
  cha: Ability = new Ability(AbilityType.CHA, 0);
  ac: number = 0;

  constructor(str?: Ability, dex?: Ability, con?: Ability, int?: Ability, wis?: Ability, cha?: Ability, ac?: number, statblock?: Record<string, any>) {
    if (!!statblock) {
      this.str = new Ability(undefined, undefined, statblock['str']);
      this.dex = new Ability(undefined, undefined, statblock['dex']);
      this.con = new Ability(undefined, undefined, statblock['con']);
      this.int = new Ability(undefined, undefined, statblock['int']);
      this.wis = new Ability(undefined, undefined, statblock['wis']);
      this.cha = new Ability(undefined, undefined, statblock['cha']);
      this.ac = statblock['ac'] as number;
    } else if (str && dex && con && int && wis && cha && ac !== undefined) {
      this.str = str;
      this.dex = dex;
      this.con = con;
      this.int = int;
      this.wis = wis;
      this.cha = cha;
      this.ac = ac;
    } else {
      throw Error('StatBlock constructor must have all abilities provided individually or as a dict')
    }
  }

  getAbility(abilityType: AbilityType): Ability | undefined {
    switch (abilityType) {
      case AbilityType.STR:
        return this.str;
      case AbilityType.DEX:
        return this.dex;
      case AbilityType.CON:
        return this.con;
      case AbilityType.INT:
        return this.int;
      case AbilityType.WIS:
        return this.wis;
      case AbilityType.CHA:
        return this.cha;
    }
  }
}
