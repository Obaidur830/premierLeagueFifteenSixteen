import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatchDetails} from './interfaces/match-details';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'premierLeagueFifteenSixteen';
  url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  obj: any;
  matches: MatchDetails[] = [];
  match: MatchDetails;
  // tslint:disable-next-line: align
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
      this.obj = data;
      // console.log(this.obj.rounds[0].matches[0].date);

      // tslint:disable-next-line: forin
      for (const i in this.obj.rounds) {
       // tslint:disable-next-line: forin
       for (const j in this.obj.rounds[i].matches){

             this.match = {
                date: this.obj.rounds[i].matches[j].date,
                team1: this.obj.rounds[i].matches[j].team1,
                team2: this.obj.rounds[i].matches[j].team2,
                score1: this.obj.rounds[i].matches[j].score.ft[0],
                score2: this.obj.rounds[i].matches[j].score.ft[1]

              };
             this.matches.push(this.match);
        }
      }
     // console.log(this.matches);
      this.listData = new MatTableDataSource<MatchDetails>(this.matches);
      console.log(this.matches);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });

  }
  listData: MatTableDataSource<MatchDetails>;
  displayedColumns: string[] = ['date', 'team1', 'score1'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    
  }
}
