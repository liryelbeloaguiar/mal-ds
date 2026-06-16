import { inject, Injectable, signal } from '@angular/core';
import { DESIGN_SYSTEM_CONFIG } from '../providers/mal-ui.provider.ts/design-system.token';

export type ThemeMode = 'light' | 'dark' | 'high-contrast' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly currentTheme = signal<ThemeMode>('system');

  private mediaQuery?: MediaQueryList;

  private readonly config = inject(
    DESIGN_SYSTEM_CONFIG,
    { optional: true }
  );

  initialize(): void {

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const defaultTheme = this.config?.defaultTheme ?? 'system';

    const savedTheme = localStorage.getItem(this.config?.storageKey || 'mal-theme') as ThemeMode | null;

    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(defaultTheme);
    }

    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    this.listenSystemChanges();
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    localStorage.setItem(this.config?.storageKey || 'mal-theme', theme);

    this.applyTheme(theme);
  }

  private applyTheme(theme: ThemeMode): void {
    const effectiveTheme = theme === 'system' ? this.getSystemTheme() : theme;

    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }

  private getSystemTheme(): 'light' | 'dark' {
    return this.mediaQuery?.matches ? 'dark' : 'light';
  }

  private listenSystemChanges(): void {
    this.mediaQuery?.addEventListener('change', () => {
      if (this.currentTheme() === 'system') {
        this.setTheme('system');
      }
    });
  }
}
