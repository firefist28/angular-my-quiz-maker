import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Sport } from '../../sport/sport';
import { SportService } from '../../sport/sport.service';
import { BasketService } from '../basket.service';
import { Team } from '../team';

@Component({
  selector: 'app-team-result-card',
  templateUrl: './team-result-card.component.html',
  styleUrls: ['./team-result-card.component.css']
})
export class TeamResultCardComponent {
  subscriptionTeamSvc: Subscription;
  subscriptionGameSvc: Subscription;
  teamResultArr: string[] = [];
  teamData: Team;
  teamID: string;
  constructor(
    private teamService: BasketService,
    private sportService: SportService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.teamID = this.activatedRoute.snapshot.params['teamID'];
    this.subscriptionTeamSvc = this.teamService
      .getTeam(this.teamID)
      .subscribe((data: Team) => {
        this.teamData = data;
        this.subscriptionGameSvc = this.sportService
          .getAllGame()
          .subscribe((sportsData: Sport[]) => {
            for (const match of sportsData) {
              if (match['home_team'].abbreviation === data.abbreviation) {
                let scoreStr = match['home_team'].abbreviation + ' ' +
                  match['home_team_score'] + ' - ' +
                  match['visitor_team_score'] + ' ' +
                  match['visitor_team'].abbreviation
                this.teamResultArr.push(scoreStr);
              }
            }
          });
      });
  }

  backButtonClick(): void {
    this.router.navigateByUrl('');
  }
  ngOnDestroy(): void {
    this.subscriptionTeamSvc.unsubscribe();
    this.subscriptionGameSvc.unsubscribe();
  }
}