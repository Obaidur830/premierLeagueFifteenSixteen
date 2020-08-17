import { Injectable } from '@angular/core';
import { MatchDetails } from '../interfaces/match-details';

import { ClubStatistics } from '../interfaces/club-statistics';


@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line: no-unused-expression

export class ClubInfoService {

  constructor() { }
  clubStat: ClubStatistics;
  // tslint:disable-next-line: typedef
  filterSpecificClub(matches: MatchDetails[], clubName: string){

        // console.log(clubName);
        const filteredClub = matches.filter(item => item.team1 === clubName || item.team2 === clubName );
        // console.log(filteredClub);

        // tslint:disable-next-line: one-variable-per-declaration
        let win = 0 , lost = 0;
        const draw = 0;
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < filteredClub.length; i++){
           if (filteredClub[i].team1 === clubName){
              if (filteredClub[i].score1 > filteredClub[i].score2){
                win++;
              }
              else if (filteredClub[i].score1 < filteredClub[i].score2){
                lost++;
              }
           }
          else if (filteredClub[i].team2 === clubName){
            if (filteredClub[i].score2 > filteredClub[i].score1){
              win++;
            }
            else if (filteredClub[i].score2 < filteredClub[i].score1){
              lost++;
            }
         }
        }
        this.clubStat = {
          name: clubName,
          played: filteredClub.length,
          win,
          lost,
          draw: filteredClub.length - (win + lost)
        };
        //console.log(this.clubStat);
  }
  getClubStatistics(): ClubStatistics{
    return this.clubStat;
  }
}
