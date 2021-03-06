import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatBadgeModule} from "@angular/material/badge";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
    LayoutRoutingModule,
    MatBadgeModule
  ]
})
export class LayoutModule {
}
