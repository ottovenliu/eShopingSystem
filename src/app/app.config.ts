import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './core/routes/app.routes';
import { provideStore } from '@ngrx/store';
import { reducer } from './core/store/reducers';
// import { effects } from './core/store/effects';
// import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      layout: reducer.layout,
      // detail: reducer.detail,
      // systemConfig: reducer.systemConfig,
    }),
    // provideEffects(effects),
  ],
};
