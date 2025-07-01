import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withI18nSupport } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideClientHydration(withI18nSupport()),
    provideRouter(routes,
        withInMemoryScrolling({ scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }))
  ]
};
