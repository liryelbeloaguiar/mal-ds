import { Component } from '@angular/core';
import { DesignSystemPageComponent } from './pages/design-system/design-system-page.component';

@Component({
  selector: 'app-root',
  imports: [DesignSystemPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
