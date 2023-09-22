import { Routes } from '@angular/router';
import { IndexLayoutComponent } from '../../shared/templates/index-layout/index-layout.component';

export const routes: Routes = [
  {
    path: 'eShopping',
    component: IndexLayoutComponent,
    loadChildren: () => import('../../feature/e-shopping/e-shopping.routes'),
  },
  {
    path: '**',
    redirectTo: '/eShopping/Home',
    pathMatch: 'full',
  },
];
