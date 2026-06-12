import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() items: string[] = [];
  @Input() activeIndex = 0;
  @Input() branded = true;
}
