import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  schedule = [
    {
      day: 'Day 1 - Friday Nov, 8',
      sessions: [
        {
          time: '09:00 - 13:00pm',
          title: 'Opening',
          description:
            'Kick off the conference with an energizing opening ceremony featuring live performances and an inspiring welcome address.',
          tags: [],
        },
        {
          time: '13:00 - 17:00pm',
          title: 'Consultations',
          description:
            'Attend personalized consultation sessions with industry experts to gain insights and advice on your digital projects.',
          tags: ['Jonah Jones', 'Camille Thompson', 'Donald Duck'],
        },
        {
          time: '17:00 - 19:00pm',
          title: 'Keynote',
          description:
            'Be inspired by our keynote speakers as they share their success stories and visions for the future of digital creation.',
          tags: [
            'Jonah Jones',
            'Camille Thompson',
            'Donald Duck',
            'Donald Duck',
            'Camille Thompson',
            'Jonah Jones',
          ],
        },
        {
          time: '19:00 - 21:00pm',
          title: 'Dinner',
          description:
            'End the day networking over a gourmet dinner, connecting with fellow creators in a relaxed, elegant atmosphere.',
          tags: [],
        },
      ],
    },
    {
      day: 'Day 2 - Saturday Nov, 9',
      sessions: [
        {
          time: '09:00 - 13:00pm',
          title: 'Opening',
          description:
            'Kick off the conference with an energizing opening ceremony featuring live performances and an inspiring welcome address.',
          tags: [],
        },
        {
          time: '13:00 - 17:00pm',
          title: 'Consultations',
          description:
            'Attend personalized consultation sessions with industry experts to gain insights and advice on your digital projects.',
          tags: ['Jonah Jones', 'Camille Thompson', 'Donald Duck'],
        },
        {
          time: '17:00 - 19:00pm',
          title: 'Keynote',
          description:
            'Be inspired by our keynote speakers as they share their success stories and visions for the future of digital creation.',
          tags: [
            'Jonah Jones',
            'Camille Thompson',
            'Donald Duck',
            'Donald Duck',
            'Camille Thompson',
            'Jonah Jones',
          ],
        },
        {
          time: '19:00 - 21:00pm',
          title: 'Dinner',
          description:
            'End the day networking over a gourmet dinner, connecting with fellow creators in a relaxed, elegant atmosphere.',
          tags: [],
        },
      ],
    },
    {
      day: 'Day 3 - Sunday Nov, 10',
      sessions: [
        {
          time: '09:00 - 13:00pm',
          title: 'Opening',
          description:
            'Kick off the conference with an energizing opening ceremony featuring live performances and an inspiring welcome address.',
          tags: [],
        },
        {
          time: '13:00 - 17:00pm',
          title: 'Consultations',
          description:
            'Attend personalized consultation sessions with industry experts to gain insights and advice on your digital projects.',
          tags: ['Jonah Jones', 'Camille Thompson', 'Donald Duck'],
        },
        {
          time: '17:00 - 19:00pm',
          title: 'Keynote',
          description:
            'Be inspired by our keynote speakers as they share their success stories and visions for the future of digital creation.',
          tags: [
            'Jonah Jones',
            'Camille Thompson',
            'Donald Duck',
            'Donald Duck',
            'Camille Thompson',
            'Jonah Jones',
          ],
        },
        {
          time: '19:00 - 21:00pm',
          title: 'Dinner',
          description:
            'End the day networking over a gourmet dinner, connecting with fellow creators in a relaxed, elegant atmosphere.',
          tags: [],
        },
      ],
    },
    {
      day: 'Day 4 - Monday Nov, 11',
      sessions: [
        {
          time: '09:00 - 13:00pm',
          title: 'Opening',
          description:
            'Kick off the conference with an energizing opening ceremony featuring live performances and an inspiring welcome address.',
          tags: [],
        },
        {
          time: '13:00 - 17:00pm',
          title: 'Consultations',
          description:
            'Attend personalized consultation sessions with industry experts to gain insights and advice on your digital projects.',
          tags: ['Jonah Jones', 'Camille Thompson', 'Donald Duck'],
        },
        {
          time: '17:00 - 19:00pm',
          title: 'Keynote',
          description:
            'Be inspired by our keynote speakers as they share their success stories and visions for the future of digital creation.',
          tags: [
            'Jonah Jones',
            'Camille Thompson',
            'Donald Duck',
            'Donald Duck',
            'Camille Thompson',
            'Jonah Jones',
          ],
        },
        {
          time: '19:00 - 21:00pm',
          title: 'Dinner',
          description:
            'End the day networking over a gourmet dinner, connecting with fellow creators in a relaxed, elegant atmosphere.',
          tags: [],
        },
      ],
    },
    {
      day: 'Day 5 - Tuesday Nov, 12',
      sessions: [
        {
          time: '09:00 - 13:00pm',
          title: 'Opening',
          description:
            'Kick off the conference with an energizing opening ceremony featuring live performances and an inspiring welcome address.',
          tags: [],
        },
        {
          time: '13:00 - 17:00pm',
          title: 'Consultations',
          description:
            'Attend personalized consultation sessions with industry experts to gain insights and advice on your digital projects.',
          tags: ['Jonah Jones', 'Camille Thompson', 'Donald Duck'],
        },
        {
          time: '17:00 - 19:00pm',
          title: 'Keynote',
          description:
            'Be inspired by our keynote speakers as they share their success stories and visions for the future of digital creation.',
          tags: [
            'Jonah Jones',
            'Camille Thompson',
            'Donald Duck',
            'Donald Duck',
            'Camille Thompson',
            'Jonah Jones',
          ],
        },
        {
          time: '19:00 - 21:00pm',
          title: 'Dinner',
          description:
            'End the day networking over a gourmet dinner, connecting with fellow creators in a relaxed, elegant atmosphere.',
          tags: [],
        },
      ],
    },
  ];

  openedIndex: number | null = null;

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
