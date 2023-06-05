import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { AccessTeam, Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseURL: string = 'https://free-nba.p.rapidapi.com/teams/';
  constructor(private http: HttpClient) {}

  getTeamsList(): Observable<Team[]> {
    return this.http.get<AccessTeam>(this.baseURL).pipe(map(response=>response.data));
  }

  getTeam(teamID: string): Observable<Team> {
    return this.http.get<Team>(this.baseURL + teamID);
  }}
