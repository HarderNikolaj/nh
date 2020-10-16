import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTextComponent } from './welcome-text.component';
import { Component } from '@angular/core';

describe('WelcomeTextComponent', () => {
  let component: WelcomeTextComponent;
  let fixture: ComponentFixture<WelcomeTextComponent>;

  @Component({
    selector: 'ng-scrollbar',
    template: '<div></div>',
  })
  class ScrollbarComponent{
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeTextComponent, ScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
