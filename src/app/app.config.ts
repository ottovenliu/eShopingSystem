import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './core/routes/app.routes';
import { provideStore } from '@ngrx/store';
import { reducer } from './core/store/reducers';
import { layoutReducerKey } from './core/store/reducers/layout.reducers';
// import { effects } from './core/store/effects';
// import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      [layoutReducerKey]: reducer[layoutReducerKey],
      // detail: reducer.detail,
      // systemConfig: reducer.systemConfig,
    }),
    // provideEffects(effects),
  ],
};
