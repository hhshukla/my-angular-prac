import { Component } from '@angular/core';
import { FaqComponent } from '../../Component/faq/faq.component';
import { ContentblockComponent } from '../../Component/contentblock/contentblock.component';

@Component({
  selector: 'app-faqs',
  imports: [FaqComponent, ContentblockComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {}
