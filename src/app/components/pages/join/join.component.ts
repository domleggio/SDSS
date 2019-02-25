import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/entities/footer.service';
import { NavbarService } from 'src/app/services/entities/navbar.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(
    private footer: FooterService,
    private navbar: NavbarService,

  ) { }

  ngOnInit() {


    this.footer.show();
    this.navbar.show();
  }

}
