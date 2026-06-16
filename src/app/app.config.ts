import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideDesignSystem } from '../../projects/core/src/lib/providers/mal-ui.provider.ts/provide-mal-ui.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideDesignSystem({
      defaultTheme: 'light',
      storageKey: 'mal-theme',
    }),    
  ]
};
