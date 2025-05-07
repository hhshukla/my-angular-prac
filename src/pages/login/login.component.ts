import { Component } from '@angular/core';
import { AuthComponent } from '../../Component/auth/auth.component';
import { BannerComponent } from '../../Component/banner/banner.component';

@Component({
  selector: 'app-login',
  imports: [AuthComponent, BannerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
