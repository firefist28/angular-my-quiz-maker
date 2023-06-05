import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeadersInterceptor } from './headers.interceptor';
import { TeamDetailCardComponent } from './basket_teams/team-detail-card/team-detail-card.component';
import { TeamResultCardComponent } from './basket_teams/team-result-card/team-result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamDetailCardComponent,
    TeamResultCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,  
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
