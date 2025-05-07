import { Component } from '@angular/core';
import { ScheduleComponent } from '../../Component/schedule/schedule.component';

@Component({
  selector: 'app-schedules',
  imports: [ScheduleComponent],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css',
})
export class SchedulesComponent {}
