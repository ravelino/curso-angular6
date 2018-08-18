import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
    {path:'', redirectTo: 'dashboard' , pathMatch: 'full'},
    {path:'home', loadChildren: './home/home.module#HomeModule' },
    {path:'login', loadChildren: './login/login.module#LoginModule' },
    {path:'dashboard', loadChildren: './admin/admin.module#AdminModule' },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
