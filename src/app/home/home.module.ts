import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home-routing.module';

import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
  ],
  declarations: [HomeComponent, UserComponent]
})
export class HomeModule { }
