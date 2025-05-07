import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  data = {
    title: 'Testimonial',
    description:
      'Join us at Digital Makers, where digital creators unite to innovate, collaborate, and inspire new possibilities.',
    link: 'Learn More',
  };
}
