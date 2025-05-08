import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { title } from 'process';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // ✅ Include here
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardData = {
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
    this.cdr.detectChanges();
  }
}
