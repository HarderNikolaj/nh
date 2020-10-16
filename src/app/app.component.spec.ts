import { TestBed, async } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  @Component({
    selector: 'app-navbar',
    template: '<div></div>'
  })
  class ScrollbarComponent{}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, ScrollbarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nh'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nh');
  });

  it('should have outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiledHTML: HTMLElement = fixture.nativeElement;
    expect(compiledHTML.querySelector('router-outlet')).toBeDefined(true);
  });
});
