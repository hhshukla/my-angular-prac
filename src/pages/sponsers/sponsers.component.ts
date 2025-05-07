import { Component } from '@angular/core';
import { ContentblockComponent } from '../../Component/contentblock/contentblock.component';
import { CardComponent } from '../../Component/card/card.component';

@Component({
  selector: 'app-sponsers',
  imports: [ContentblockComponent, CardComponent],
  templateUrl: './sponsers.component.html',
  styleUrl: './sponsers.component.css',
})
export class SponsersComponent {}
