import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.scss']
})
export class AcComponent implements OnInit {
  @Input() score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
