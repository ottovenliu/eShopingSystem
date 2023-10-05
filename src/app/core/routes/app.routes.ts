import { Routes } from '@angular/router';
import { IndexLayoutComponent } from '../../shared/templates/index-layout/index-layout.component';
// import { StoreManagementGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'eShopping',
    // canActivateChild: [StoreManagementGuard],
    component: IndexLayoutComponent,
    loadChildren: () => import('../../feature/e-shopping/e-shopping.routes'),
  },
  {
    path: '**',
    redirectTo: '/eShopping/Home',
    pathMatch: 'full',
  },
];
