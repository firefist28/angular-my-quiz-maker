import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'new-quiz', component: HomeComponent },
  { path: '', redirectTo: 'new-quiz', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
