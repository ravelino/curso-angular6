import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "../shared/guards/auth-guard.service";



export class AdminRoutes {

    static Routes = [
        {
            path: 'admin',
            component: DashboardComponent,
            pathMatch: 'full',
            canActivate: [AuthGuard],
            children:[
                {path: 'dashboard', component:DashboardComponent}
            ]
        }
    ]

}

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(AdminRoutes.Routes);
