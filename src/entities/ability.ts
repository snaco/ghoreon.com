export class Ability {
  abilityType: AbilityType;

  constructor(abilityType: AbilityType, private score: number) {
    this.score = score;
    this.abilityType = abilityType;
  }

  getScore(): number {
    return this.score
  }

  getModifier(): number {
    return (((this.score - 10) / 2) | 0);
  }

  getLabel(): string {
    switch (this.abilityType) {
      case AbilityType.STR:
        return 'Strength';
      case AbilityType.DEX:
        return 'Dexterity';
      case AbilityType.CON:
        return 'Constitution';
      case AbilityType.INT:
        return 'Intelligence'
      case AbilityType.WIS:
        return 'Wisdom';
      case AbilityType.CHA:
        return 'Charisma'
    }
  }
}

export enum AbilityType {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA
}
