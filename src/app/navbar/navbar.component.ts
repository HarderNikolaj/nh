import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toActivate: string;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.toActivate = this.location.path().split('/')[2];

  }


}
