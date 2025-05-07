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
  buttonText = 'Book your spot now';
  buttonUrl = '/signup';
  subbannertitle = 'arts center, san francisco.';
  subbannertext =
    'Join us at Digital Makers, where digital creators unite to innovate, collaborate, and inspire new possibilities..';
}
