import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  slides = [
    {
      src: 'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dd_male-business-executive-giving-speech%20(1).jpg',
      alt: 'Male business executive giving speech',
    },
    {
      src: 'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dc_female-business-executive-giving-speech%20(1)%20(1).jpg',
      alt: 'Female business executive giving speech',
    },
    {
      src: 'https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80dd_male-business-executive-giving-speech%20(1).jpg',
      alt: 'People in a work meeting',
    },
  ];

  currentSlide = 0;
  autoplayInterval: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayInterval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
}
