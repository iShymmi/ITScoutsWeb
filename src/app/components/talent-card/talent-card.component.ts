import { Component, Input, OnInit } from '@angular/core';
import { Talent } from 'src/app/common/Talent';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css']
})
export class TalentCardComponent implements OnInit {

  constructor() { }

  @Input()
  talentData: Talent;

  ngOnInit(): void {
  }

}
