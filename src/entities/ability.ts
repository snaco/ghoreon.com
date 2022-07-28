export class Ability {
  abilityType: AbilityType;
  score: number = 0

  constructor(abilityType?: AbilityType | undefined, score?: number | undefined, ability?: Record<string, any>) {
    if (abilityType !== undefined && score !== undefined) {
      this.abilityType = abilityType;
      this.score = score;
    } else if (ability) {
      this.score = ability['score'];
      this.abilityType = ability['abilityType'] as AbilityType;
    } else {
      throw Error('Ability constructor must have score and abilityType provided individually or by a dict');
    }
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
