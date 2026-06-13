import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'mal-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
  imports: [CommonModule],
  standalone: true,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() icon = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
}
