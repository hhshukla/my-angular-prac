import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  title = 'Welcome to the Event of Digital Marketing';
  subtitle = 'Join us for an unforgettable experience';
  imageUrl = '../../../assets/images/banner.png';
  buttonText = 'Get Started';
  buttonUrl = '/signup';
}
