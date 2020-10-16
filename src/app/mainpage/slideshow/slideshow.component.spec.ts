import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ SlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      imports: [ NgbModule],
    });
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display at least one image', () => {
    const compiledHTML: HTMLElement = fixture.nativeElement;
    expect(compiledHTML.querySelectorAll('img').length).toBeGreaterThanOrEqual(1);

  })
});
