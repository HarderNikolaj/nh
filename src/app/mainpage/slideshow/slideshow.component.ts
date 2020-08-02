import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  showNavigationArrows: boolean = true
  showNavigationIndicators: boolean = true
  images: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3y_ivZyezDTDNzN1d4STFsrd5NSUo5b-ZtA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqDKZSbv9Q_jZSHNYmsixGXDb8F4frPD6SOg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi1Ase7lJMZIKPahA1hCMS5NCks2F6R8tfdQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2ORJiwSiNakt8QgHRFBowe2kbWedtHZfWBg&usqp=CAU"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
