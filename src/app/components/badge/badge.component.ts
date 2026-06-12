import { Component, Input } from '@angular/core';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'info';
}
