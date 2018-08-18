import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from './login.component';

export class LoginRoutes {

    static Routes = [
        {
            path: 'login',
            component: LoginComponent
        }
    ]

}

export const LoginRouting: ModuleWithProviders = RouterModule.forChild(LoginRoutes.Routes);
