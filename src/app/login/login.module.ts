import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.module-routing';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthService } from './services/authentication/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    SharedModule
  ],
  declarations: [LoginComponent], 
  providers: [
    AuthenticationService, 
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ]
})
export class LoginModule { }
