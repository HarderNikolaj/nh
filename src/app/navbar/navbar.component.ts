import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toActivate: string;
  constructor(private location: Location, private router: Router) {
    router.events.subscribe(val => {
      this.toActivate = this.location.path().split('/')[2];
    })
   }


  ngOnInit(): void {

  }


}
