import { Component, OnInit } from '@angular/core';
import { Talent } from 'src/app/common/Talent';
import { TalentService } from 'src/app/service/talent.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  talents: Talent[];

  constructor(private talentService: TalentService) { }

  ngOnInit(): void {
    this.listTalents();
  }

  listTalents() {
    this.talentService.getTalentList().subscribe(
      data => {
        this.talents = data;
      }
    )
  }

}
