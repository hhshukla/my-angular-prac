import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // ✅ Include here
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardData = [
    {
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e8_speaker%201.png',
      buttonText: 'Learn More',
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2.',
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80ea_speaker%202.png',
      buttonText: 'Learn More',
    },
    {
      title: 'Card Title 3',
      description: 'This is a description for card 3.',
      imageUrl:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80e9_speaker%203.png',
      buttonText: 'Learn More',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.cardData);
    this.cdr.detectChanges();
  }
}
