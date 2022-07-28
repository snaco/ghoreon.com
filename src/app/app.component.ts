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
      new Ability(AbilityType.STR, 15),
      new Ability(AbilityType.DEX, 12),
      new Ability(AbilityType.CON, 10),
      new Ability(AbilityType.INT, 17),
      new Ability(AbilityType.WIS, 13),
      new Ability(AbilityType.CHA, 9),
      12
    );
    this.ghoreonService.getStatBlock().subscribe((statBlock: StatBlock) => this.statBlock = statBlock);
  }

  getStats(): Ability[] {
    return [this.statBlock.str, this.statBlock.dex, this.statBlock.con, this.statBlock.int, this.statBlock.wis, this.statBlock.cha]
  }
}
