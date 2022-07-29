import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Ability, AbilityType } from 'src/entities/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input() ability: Ability;

  constructor() { }

  ngOnInit(): void {
  }

}
