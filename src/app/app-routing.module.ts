import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamResultCardComponent } from './basket_teams/team-result-card/team-result-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'results/:teamID', component: TeamResultCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
