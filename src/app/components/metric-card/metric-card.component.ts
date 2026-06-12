import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.css',
})
export class MetricCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() trend = '';
  @Input() direction: 'up' | 'down' = 'up';
}
