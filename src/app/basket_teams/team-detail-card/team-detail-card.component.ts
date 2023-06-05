import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Sport } from '../../sport/sport';
import { SportService } from '../../sport/sport.service';
import { Team } from '../team';
@Component({
  selector: 'app-team-detail-card',
  templateUrl: './team-detail-card.component.html',
  styleUrls: ['./team-detail-card.component.css']
})
export class TeamDetailCardComponent {
  @Input() team: Team;
  @Output() removeTeamComponent: EventEmitter<Team> = new EventEmitter();
  subscribeSportService: Subscription;
  averagePoints: number;
  concededPoints: number;
  homeTeamScoreResult: number[] = [];
  visitorTeamScoreResult: number[] = [];
  winLostArr: boolean[] = [];
  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.subscribeSportService = this.sportService
      .getAllGame()
      .subscribe((sportData: Sport[]) => {
        for (const match of sportData) {
          if (match['home_team'].abbreviation === this.team.abbreviation) {
            this.homeTeamScoreResult.push(match['home_team_score']);
            this.visitorTeamScoreResult.push(match['visitor_team_score']);
            if (match['home_team_score'] > match['visitor_team_score']) {
              this.winLostArr.push(true);
            } else {
              this.winLostArr.push(false);
            }
          }
        }
        let homeTeamTotalPoints =
          this.homeTeamScoreResult.reduce((total: number, current: number) => {
            return total + current;
          }, 0);
        let visitorTeamTotalPoints = this.visitorTeamScoreResult.reduce((total: number, current: number) => {
          return total + current;
        }, 0);

        this.averagePoints = homeTeamTotalPoints / this.homeTeamScoreResult.length;
        this.concededPoints = visitorTeamTotalPoints / this.visitorTeamScoreResult.length;
      });
  }
  removeTeam(): void {
    this.removeTeamComponent.emit();
  }
  ngOnDestroy(): void {
    this.subscribeSportService.unsubscribe();
  }
}
