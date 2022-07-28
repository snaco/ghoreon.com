import { Component } from '@angular/core';
import { AbilityType, Ability as Ability } from 'src/entities/ability';
import { StatBlock } from 'src/entities/stat-block';
import { GhoreonService } from 'src/services/ghoreon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ghoreon.com';
  statBlock: StatBlock;

  constructor(private ghoreonService: GhoreonService) {
    this.statBlock = new StatBlock(
      new Ability(AbilityType.STR, 0, undefined),
      new Ability(AbilityType.DEX, 0, undefined),
      new Ability(AbilityType.CON, 0, undefined),
      new Ability(AbilityType.INT, 0, undefined),
      new Ability(AbilityType.WIS, 0, undefined),
      new Ability(AbilityType.CHA, 0, undefined),
      0,
      undefined
    );
    this.ghoreonService.getStatBlock('').subscribe((statBlock: StatBlock) => {
      this.statBlock = new StatBlock(undefined, undefined, undefined, undefined, undefined, undefined, undefined, statBlock);
    });
  }

  keyEvent(event: any) {
    if (event.key === 'Enter') {
      this.fetchNewData(event.target.value)
    }
  }

  getStats(): Ability[] {
    return [this.statBlock.str, this.statBlock.dex, this.statBlock.con, this.statBlock.int, this.statBlock.wis, this.statBlock.cha]
  }

  fetchNewData(input: string) {
    this.ghoreonService.getStatBlock(input).subscribe((statBlock: StatBlock) => {
      this.statBlock = new StatBlock(undefined, undefined, undefined, undefined, undefined, undefined, undefined, statBlock);
    });
  }
}
