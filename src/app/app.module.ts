import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeamService } from './services/team.service';
import { PlayerService } from './services/player.service';
import { LeagueService } from './services/league.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { SportspageComponent } from './components/pages/sportspage/sportspage.component';
import { ComplevelComponent } from './components/pages/complevel/complevel.component';
import { AppRoutingModule } from './app-routing.module';
import { AddteamComponent } from './components/pages/addteam/addteam.component';
import { AddplayerComponent } from './components/pages/addplayer/addplayer.component';
import { DisplayteamsComponent } from './components/pages/displayteams/displayteams.component';
import { DisplayplayersComponent } from './components/pages/displayplayers/displayplayers.component';
import { DisplayMyTeamComponent } from './components/pages/display-my-team/display-my-team.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { DisplayMyPlayerComponent } from './components/pages/display-my-player/display-my-player.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { DisplayLeaguesComponent } from './components/pages/display-leagues/display-leagues.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SportspageComponent,
    ComplevelComponent,
    AddteamComponent,
    AddplayerComponent,
    DisplayteamsComponent,
    DisplayplayersComponent,
    DisplayMyTeamComponent,
    SignInComponent,
    LandingComponent,
    DisplayMyPlayerComponent,
    StandingsComponent,
    DisplayLeaguesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TeamService, PlayerService, LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
