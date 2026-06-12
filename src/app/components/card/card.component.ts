import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

type CardVariant = 'default' | 'active' | 'dark';
type BadgeVariant = 'success' | 'warning' | 'danger' | 'info';

@Component({
  selector: 'app-card',
  imports: [BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title = '';
  @Input() action = '';
  @Input() href = '#';
  @Input() variant: CardVariant = 'default';
  @Input() badge = '';
  @Input() badgeVariant: BadgeVariant = 'info';
}
