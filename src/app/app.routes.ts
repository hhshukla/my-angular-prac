import { Routes } from '@angular/router';
import { AboutComponent } from '../Component/about/about.component';
import { ContactComponent } from '../Component/contact/contact.component';
import { ServiceComponent } from '../Component/service/service.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'services',
    component: ServiceComponent,
  },
];
