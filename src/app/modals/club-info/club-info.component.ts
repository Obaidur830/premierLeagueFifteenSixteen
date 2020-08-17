import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClubInfoService } from '../club-info.service';
import { ClubStatistics } from 'src/app/interfaces/club-statistics';

@Component({
  selector: 'app-club-info',
  templateUrl: './club-info.component.html',
  styleUrls: ['./club-info.component.scss']
})
export class ClubInfoComponent implements OnInit {
  clubStat: ClubStatistics;
  constructor(  private clubInfoService: ClubInfoService,  public dialogRef: MatDialogRef<ClubInfoComponent>,
    ) { }

  ngOnInit(): void {
    this.clubStat = this.clubInfoService.getClubStatistics();
    console.log(this.clubStat);
  }

  onClose() {

    this.dialogRef.close();
  }


}
