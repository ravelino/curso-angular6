import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../login/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService : AuthService, 
        private router: Router,
        private toastr : ToastrService
    ) {}

    canActivate() {
        if (!this.authService.isAuthenticate()) {
            
            this.router.navigate([
                'login'
            ]);

            this.toastr.error('Nao autenticado!!!');

            return false;
        }

        
        
        return true;
    }
}