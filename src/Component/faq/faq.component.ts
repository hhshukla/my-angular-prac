import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs = [
    {
      question: 'When is the conference?',
      answer: 'The conference takes place from November 8-10.',
      isOpen: false,
    },
    {
      question: 'Where is the venue?',
      answer: 'At the Downtown Convention Center, Main Hall.',
      isOpen: false,
    },
    {
      question: 'Are meals included?',
      answer:
        'Yes, lunch and dinner are included with Premium and Special tickets.',
      isOpen: false,
    },
    {
      question: 'How to become a speaker?',
      answer: 'Submit your proposal on our website before April 1st.',
      isOpen: false,
    },
  ];

  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
