import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header-component';
import { FooterComponent } from '../../components/footer-component/footer-component';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  selector: 'stu-portal-layout',
  styleUrl: './portal-layout.css',
  templateUrl: './portal-layout.html',
})
export class PortalLayout {}
