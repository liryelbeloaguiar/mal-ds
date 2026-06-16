import { InjectionToken } from '@angular/core';
import { DesignSystemConfig } from './design-system.config';

export const DESIGN_SYSTEM_CONFIG = 
    new InjectionToken<DesignSystemConfig>('DESIGN_SYSTEM_CONFIG');
