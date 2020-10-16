import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponent } from './cv.component';
import { Component } from '@angular/core';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  @Component({
    selector: 'ng-scrollbar',
    template: '<div></div>'

  })
  class ScrollbarCompenent{}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvComponent, ScrollbarCompenent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
