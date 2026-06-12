import { Component, Input } from '@angular/core';

type FieldKind = 'input' | 'textarea' | 'select';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
})
export class TextFieldComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() hint = '';
  @Input() type = 'text';
  @Input() kind: FieldKind = 'input';
  @Input() options: string[] = [];
  @Input() disabled = false;
  @Input() invalid = false;
}
