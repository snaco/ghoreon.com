import { Component, Input, OnInit } from '@angular/core';
import { Ability, AbilityType } from 'src/entities/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input() ability: Ability = new Ability(AbilityType.CHA, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
