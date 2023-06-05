import { Team } from "../basket_teams/team";
export interface Sport{
    id: number;
    date: string;
    home_team_score: number;
    home_team: Team;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team_score: number;
    visitor_team: Team;
}

export interface AccessSport {
    data:  Sport[]; 
  }