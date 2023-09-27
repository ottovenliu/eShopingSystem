import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPagesReducers from '../../../core/store/reducers';
import {
  selectLayoutLoading,
  selectLayoutState,
} from 'src/app/core/store/selector/layout.selector';
// import * as fromPagesActions from '../../../core/store/actions';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-home.component.html',
  styleUrls: ['./shopping-home.component.scss'],
})
export class ShoppingHomeComponent implements OnInit {
  private storeR = inject(Store<fromPagesReducers.State>);
  private store = inject(Store);
  private destroy$ = new Subject<void>();
  loading$: Observable<boolean> = this.storeR
    .select((x) => x.layout.Loading)
    .pipe(takeUntil(this.destroy$));
  isLoading$ = this.store.select(selectLayoutLoading);

  ngOnInit(): void {
    this.store
      .select(selectLayoutState) // 指定 Selector
      .subscribe((data) => console.log(data));
    this.store
      .select(selectLayoutLoading) // 指定 Selector
      .subscribe((data) => console.log(data));
    this.isLoading$.subscribe((res) => {
      console.log(res);
    });
  }
}
