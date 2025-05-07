import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contentblock',
  imports: [CommonModule],
  templateUrl: './contentblock.component.html',
  styleUrl: './contentblock.component.scss',
})
export class ContentblockComponent {
  title = 'Contentblock';
  description = 'Learn more about our company.';
  testimonials = [
    {
      quote: `Attending the Makers Conference was a turning point in my career. The sessions were not only insightful but also practical, providing tools I could immediately apply.`,
      image:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f8_testimonial%20portrait%201.png',
      name: 'Emily Davis',
      title: 'Freelance Digital Artist',
    },
    {
      quote: `The networking opportunities at the conference were invaluable. I met industry leaders and fellow developers who have since become mentors and collaborators.`,
      image:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f7_testimonial%20portrait%202.png',
      name: 'John Smith',
      title: 'App Developer',
    },
    {
      quote: `I left feeling motivated, equipped with new skills, and connected to a network of professionals who share my dedication to enhancing user experiences.`,
      image:
        'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80ea_speaker%202.png',
      name: 'Lisa Nguyen',
      title: 'UX Designer',
    },
  ];
}
