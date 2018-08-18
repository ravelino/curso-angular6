import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserComponent } from "./user/user.component";



export class HomeRoutes {

    static Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'user',
            component: UserComponent
        }
    ]

}

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HomeRoutes.Routes);
