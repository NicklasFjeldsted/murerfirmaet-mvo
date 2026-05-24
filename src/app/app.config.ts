import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { registerIcons } from './shared/icons';
import { SvgIconRegistry } from './core/services/svg-icon-registry';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (library: FaIconLibrary) => () => registerIcons(library),
      deps: [FaIconLibrary],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (registry: SvgIconRegistry) => () => registry.register(),
      deps: [SvgIconRegistry],
      multi: true,
    },
  ]
};
