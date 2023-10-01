import { Route } from '@angular/router';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { ShoppingDetailComponent } from './shopping-detail/shopping-detail.component';

export default [
  { path: 'Home', component: ShoppingHomeComponent },
  { path: 'ShoppingDetail/:id', component: ShoppingDetailComponent },
  { path: '**', redirectTo: '/eShopping/Home' },
] as Route[];
