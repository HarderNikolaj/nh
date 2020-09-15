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
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
