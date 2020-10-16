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
    'https://picsum.photos/300/600?randomnumber=1',
    'https://picsum.photos/300/600?randomnumber=2',
    'https://picsum.photos/300/600?randomnumber=3',
    'https://picsum.photos/300/600?randomnumber=4',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
