import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { HomeComponent } from './components/home-component/home-component';
import { StudentListComponent } from './components/student-list-component/student-list-component';

@Component({
  imports: [RouterOutlet , HeaderComponent, FooterComponent, DashboardComponent, HomeComponent, StudentListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LibMang');

   isSHowHeader=false;

  constructor(){
    debugger;
    if(window.location.pathname=='/login'){
      this.isSHowHeader=false;
    }else {
      this.isSHowHeader=true;
    }
  }
}
