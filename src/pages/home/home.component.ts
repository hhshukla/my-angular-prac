import { Component } from '@angular/core';
import { CardComponent } from '../../Component/card/card.component';
import { AboutComponent } from '../../Component/about/about.component';
import { ContentblockComponent } from '../../Component/contentblock/contentblock.component';
import { TestimonialComponent } from '../../Component/testimonial/testimonial.component';
import { BannerComponent } from '../../Component/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CardComponent,
    AboutComponent,
    ContentblockComponent,
    TestimonialComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
