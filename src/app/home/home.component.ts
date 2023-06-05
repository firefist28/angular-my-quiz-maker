import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { BasketService } from '../basket_teams/basket.service';
import { Team } from '../basket_teams/team';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  selectedTeam: Team;
  teams: Team[];
  teamData: Team[] = [];
  isTeamDisplay = false;
  appTitle = 'NBA Score Tracking App';

  constructor(private basketService: BasketService, private router: Router) {

  }
  ngOnInit(): void {
    this.subscription = this.basketService
      .getTeamsList().subscribe((data: Team[]) => {
        this.teams = data;
      });
  }
  getSelectedTeam(selectedTeam: Team): void {
    if (this.teamData.indexOf(selectedTeam) === -1) {
      this.teamData.push(selectedTeam);
    }
    this.isTeamDisplay = true;
  }
  removeTeamCard(team: Team): void {
    const teamIndex: number = this.teamData.findIndex((t: Team) => t === team);
    this.teamData.splice(teamIndex, 1);
  }

  isDisplayResult(): boolean {
    return this.router.url.includes('/results');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
