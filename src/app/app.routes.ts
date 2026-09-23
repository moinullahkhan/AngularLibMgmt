import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { LoginLayout } from './layouts/login-layout/login-layout';
import { PortalLayout } from './layouts/portal-layout/portal-layout';

export const routes: Routes = [

{path:'login', component: LoginLayout,

    children: [
        {path:'', component: LoginComponent}
    ]
},

{
    path: '', component: PortalLayout,

    children: [
        {path:'', component: DashboardComponent},

        {path:'dashboard', component: DashboardComponent},

        {path:'home', component: HomeComponent},

    ]
}
];
