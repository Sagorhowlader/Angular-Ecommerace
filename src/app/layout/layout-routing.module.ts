import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from "./base/base.component";
import {HomeComponent} from "./home/home.component";

const layoutRoutes: Routes = [
  {path: '',
    children: [
      {path: 'home', component: HomeComponent}
    ]
  , component: BaseComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(layoutRoutes)
  ]
})
export class LayoutRoutingModule { }
