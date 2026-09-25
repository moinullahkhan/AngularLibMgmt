import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { LoginLayout } from './layouts/login-layout/login-layout';
import { PortalLayout } from './layouts/portal-layout/portal-layout';
import { authGuard } from './guards/auth-guard';
import { authChildGuard } from './guards/auth-child-guard';
import { LoginTemplateDrivenForm } from './components/login-template-driven-form/login-template-driven-form';
import { LoginReactiveComponent } from './components/login-reactive-component/login-reactive-component';
import { UserList } from './components/user-list/user-list';
import { StudentListComponent } from './components/student-list-component/student-list-component';

export const routes: Routes = [
    {

        path: 'loginrd' , component : LoginReactiveComponent
    },
    {

        path: 'logintd' , component : LoginTemplateDrivenForm
    },

{path:'login', component: LoginLayout,

    children: [
        {path:'', component: LoginComponent}
    ]
},

{
    path: '', component: PortalLayout, canActivateChild :[authChildGuard],

    children: [
        {path:'', component: DashboardComponent},

        {path:'dashboard', component: DashboardComponent},

        {path: 'users', component: UserList },

        {path: 'students', component: StudentListComponent},

        {path:'home', component: HomeComponent},

    ]
}
];
