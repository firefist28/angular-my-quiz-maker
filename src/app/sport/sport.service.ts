import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Sport, AccessSport } from './sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {


  dateList: string[] = [];
  dateURL = '';
  baseURL = 'https://free-nba.p.rapidapi.com/games/?';
  constructor(private http: HttpClient) { }

  getAllGame(): Observable<Sport[]> {
    let currentDate: Date = new Date();
    for (let i: number = 0; i < 12; i++) {
      currentDate.setDate(currentDate.getDate() - (i ? 1 : 0));
      const dateString: string = currentDate.toISOString().split('T')[0];
      this.dateList.push('dates[]=' + dateString);
    }
    let dateURL: string = this.baseURL + this.dateList.join('&');
    return this.http.get<AccessSport>(dateURL, {
      params: { per_page: '100' },
    }).pipe(map((response: AccessSport) => response.data));
  }
}
