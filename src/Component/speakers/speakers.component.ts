import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css',
})
export class SpeakersComponent {
  cardData = {
    title: 'All Speakers',
    description: 'Meet our amazing speakers who will inspire you.',
    speakers: [
      {
        title: 'Alex Thompson',
        description: 'Chief Technology Officer at Innovatech Solutions.',
        imageUrl:
          'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e8_speaker%201.png',
        buttonText: 'Learn More',
      },
      {
        title: 'Sophia Martinez',
        description: 'Head of Digital Strategy at Global Media Inc..',
        imageUrl:
          'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80ea_speaker%202.png',
        buttonText: 'Learn More',
      },
      {
        title: 'Michael Chen',
        description: 'Founder and CEO of Creatify Labs.',
        imageUrl:
          'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e9_speaker%203.png',
        buttonText: 'Learn More',
      },
    ],
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.cardData);
    this.cdr.detectChanges();
  }
}
