import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title = 'MAL';
  @Input() tagline = 'tecnologia sob medida';
  @Input() logoSrc = '/logo-mal-azul.png';
}
