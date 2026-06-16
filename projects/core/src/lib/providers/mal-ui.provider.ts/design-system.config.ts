import { ThemeMode } from "../../services/theme.service";

export interface DesignSystemConfig {
  /**
   * The default theme to be applied when the application loads for the first time. It can be 'light', 'dark', or 'system'. If set to 'system', the theme will follow the user's system preference.
   */
  defaultTheme?: ThemeMode;

  /**
   * The key used to store the user's theme preference in localStorage. If not provided, it defaults to 'mal-theme'.
   */
  storageKey?: string;
}
