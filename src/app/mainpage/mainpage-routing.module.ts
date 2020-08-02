import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { CvComponent } from './cv/cv.component';
import { KontaktComponent } from './kontakt/kontakt.component';


export const routes: Routes = [
  { path: 'hjem', component: WelcomeTextComponent},
  { path: 'cv', component: CvComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: '', redirectTo: 'hjem', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
