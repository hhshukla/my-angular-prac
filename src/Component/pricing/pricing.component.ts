import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  pricingPlans = [
    {
      title: 'Basic Pass',
      description:
        'Access to sessions, exhibits, and networking events throughout the conference.',
      price: 59,
    },
    {
      title: 'Premium Pass',
      description:
        'Includes all basic features plus priority seating and workshop access.',
      price: 89,
    },
    {
      title: 'Special Pass',
      description:
        'All premium benefits plus exclusive speaker meet-and-greet and VIP dinner.',
      price: 129,
    },
  ];
}
