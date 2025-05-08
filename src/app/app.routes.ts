import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../Component/about/about.component';
import { SpeakersComponent } from '../Component/speakers/speakers.component';
import { SponsersComponent } from '../pages/sponsers/sponsers.component';
import { ErrorpageComponent } from '../Component/errorpage/errorpage.component';
import { ScheduleComponent } from '../Component/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { FaqsComponent } from '../pages/faqs/faqs.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooknowComponent } from '../pages/booknow/booknow.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Home page
  { path: 'about', component: AboutComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'sponsers', component: SponsersComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booknow', component: BooknowComponent },
  { path: '**', component: ErrorpageComponent }, // ✅ 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
