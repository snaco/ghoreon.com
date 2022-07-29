import { Component } from '@angular/core';
import { Ability } from 'src/entities/ability';
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
    if (this.statBlock) {
      return [this.statBlock.str, this.statBlock.dex, this.statBlock.con, this.statBlock.int, this.statBlock.wis, this.statBlock.cha]
    } else {
      return [];
    }
  }

  getAC(): number {
    if (this.statBlock) {
      return this.statBlock.ac;
    } else {
      return 0;
    }
  }

  fetchNewData(input: string) {
    this.ghoreonService.getStatBlock(input).subscribe((statBlock: StatBlock) => {
      this.statBlock = new StatBlock(undefined, undefined, undefined, undefined, undefined, undefined, undefined, statBlock);
    });
  }
}
