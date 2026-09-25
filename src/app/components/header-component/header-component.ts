import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-header-component',
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {
  router = inject(Router);
  
   logout(){
    localStorage.clear();
   this.router.navigateByUrl('/login');
  }
}
