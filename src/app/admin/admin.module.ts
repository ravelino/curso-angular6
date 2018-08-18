import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.module-routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user/user.service';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRouting,
  ],
  providers : [UserService],
  declarations: [DashboardComponent, AdminComponent]
})
export class AdminModule { }
