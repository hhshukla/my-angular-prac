import { Component } from '@angular/core';
import { CardComponent } from '../../Component/card/card.component';
import { AboutComponent } from '../../Component/about/about.component';
import { ContentblockComponent } from '../../Component/contentblock/contentblock.component';
import { TestimonialComponent } from '../../Component/testimonial/testimonial.component';
import { BannerComponent } from '../../Component/banner/banner.component';
import { PricingComponent } from '../../Component/pricing/pricing.component';
import { ImageSliderComponent } from '../../Component/image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CardComponent,
    AboutComponent,
    ContentblockComponent,
    TestimonialComponent,
    PricingComponent,
    ImageSliderComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
