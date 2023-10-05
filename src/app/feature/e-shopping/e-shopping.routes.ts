import { Route } from '@angular/router';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';

export default [
  { path: 'Home', component: ShoppingHomeComponent },
  // { path: '', redirectTo: '/AccountsManagement/Home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/Web/NotFoundPage' },
  // ...
] as Route[];
