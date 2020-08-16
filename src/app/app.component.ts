import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatchDetails} from '../interfaces/match-details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'premierLeagueFifteenSixteen';
  url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  obj: any;
  matches: MatchDetails[];
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      this.obj = data;
      console.log(this.obj.rounds[0].matches[0].date);
    });

  }
}
