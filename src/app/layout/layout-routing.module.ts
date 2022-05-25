import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const layoutRoutes: Routes = [
  {path: '',  redirectTo : '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(layoutRoutes)
  ]
})
export class LayoutRoutingModule { }
