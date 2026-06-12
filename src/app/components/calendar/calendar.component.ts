import { Component, Input } from '@angular/core';

interface CalendarDay {
  label: string;
  muted?: boolean;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @Input() title = 'Junho 2026';
  @Input() today = 12;
  @Input() selected = 12;
  @Input() events: number[] = [];

  readonly weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  readonly days: CalendarDay[] = [
    { label: '31', muted: true },
    ...Array.from({ length: 30 }, (_, index) => ({ label: String(index + 1) })),
    { label: '1', muted: true },
    { label: '2', muted: true },
    { label: '3', muted: true },
    { label: '4', muted: true },
  ];

  select(day: CalendarDay): void {
    if (!day.muted) {
      this.selected = Number(day.label);
    }
  }

  hasEvent(day: CalendarDay): boolean {
    return !day.muted && this.events.includes(Number(day.label));
  }
}
