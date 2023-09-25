import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPagesReducers from '../../../core/store/reducers';
// import * as fromPagesActions from '../../../core/store/actions';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-home.component.html',
  styleUrls: ['./shopping-home.component.scss'],
})
export class ShoppingHomeComponent {
  private store = inject(Store<fromPagesReducers.State>);
  private destroy$ = new Subject<void>();
  loading$: Observable<boolean> = this.store
    .select((x) => x.layout.Loading)
    .pipe(takeUntil(this.destroy$));
}
