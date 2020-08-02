import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';


const routes: Routes = [
  { path: 'jobsogning', component: MainpageComponent, loadChildren: () => import("src/app/mainpage/mainpage.module").then(m => m.MainpageModule)},
  { path: '', redirectTo: 'jobsogning', pathMatch: 'full'},
  { path: '*', redirectTo: 'jobsogning', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
