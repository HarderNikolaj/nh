import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { CvComponent } from './cv/cv.component';
import { routes } from './mainpage-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    SlideshowComponent,
    MainpageComponent,
    WelcomeTextComponent,
    CvComponent,
    KontaktComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgScrollbarModule,
    NgbTooltipModule
  ]
})
export class MainpageModule { }
