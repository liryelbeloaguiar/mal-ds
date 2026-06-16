import { ENVIRONMENT_INITIALIZER, inject, makeEnvironmentProviders } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DesignSystemConfig } from './design-system.config';
import { DESIGN_SYSTEM_CONFIG } from './design-system.token';


export function provideDesignSystem(config: DesignSystemConfig = {}) {
  return makeEnvironmentProviders([
    {
      provide: DESIGN_SYSTEM_CONFIG,
      useValue: config,
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,

      useValue: () => {
        const themeService = inject(ThemeService);

        themeService.initialize();
      },
    },
  ]);
}
