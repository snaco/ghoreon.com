import { Ability, AbilityType } from "./ability";

export class StatBlock {
  str: Ability;
  dex: Ability;
  con: Ability;
  int: Ability;
  wis: Ability;
  cha: Ability;
  ac: number;

  constructor(str: Ability, dex: Ability, con: Ability, int: Ability, wis: Ability, cha: Ability, ac: number) {
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.ac = ac;
  }

  getAbility(abilityType: AbilityType): Ability {
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
