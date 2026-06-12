import { Component, Input } from '@angular/core';

type EventVariant = 'default' | 'info' | 'warning';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() time = '';
  @Input() title = '';
  @Input() variant: EventVariant = 'default';
}
