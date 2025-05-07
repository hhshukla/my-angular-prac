import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'Powering the world’s best companies';
  description =
    'Our event is proudly sponsored by leading tech companies committed to supporting the digital creator community..';
  partners = [
    {
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f4_KOBE-black.svg',
    },
    {
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f1_Manila-black.svg',
    },
    {
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f2_Swiss-black.svg',
    },
    {
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f5_Montreal-black.svg',
    },
    {
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f3_theo-black.svg',
    },
  ];
  buttonText = 'Book your spot now';
}
