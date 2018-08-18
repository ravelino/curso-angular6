import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarrelPipes } from './pipe/barrel-pipes';
import { HttpClientModule }  from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    CommonModule,
    
    ReactiveFormsModule,
    BarrelPipes.pipes,
    HttpClientModule,
    CardComponent
    
  ],
  declarations: [CardComponent, BarrelPipes.pipes]
})
export class SharedModule { }
