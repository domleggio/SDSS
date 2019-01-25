import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/entities/league.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FooterService } from 'src/app/services/entities/footer.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public league: any = [];
  public sport: any;

  constructor(private leagueService: LeagueService, private auth: AuthService, private footer: FooterService) { }

  ngOnInit() {

    this.footer.show();
    
    this.leagueService.getSports().subscribe(result => {
      console.log(result);
      this.sport=result;
    })


  }
}
