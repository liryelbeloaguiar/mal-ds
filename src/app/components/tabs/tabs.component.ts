import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() items: string[] = [];
  @Input() activeIndex = 0;

  select(index: number): void {
    this.activeIndex = index;
  }
}
