import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLayoutLoading } from 'src/app/core/store/selector/layout.selector';
import { GET_USER_LIST } from 'src/app/core/store/actions/user.actions';
import { UPDATE_LOADING_STATUS } from 'src/app/core/store/actions/layout.action';
import { selectUserList } from 'src/app/core/store/selector/user.selector';
// import * as fromPagesActions from '../../../core/store/actions';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-home.component.html',
  styleUrls: ['./shopping-home.component.scss'],
})
export class ShoppingHomeComponent implements OnInit {
  private store = inject(Store);
  private destroy$ = new Subject<void>();
  isLoading$ = this.store.select(selectLayoutLoading);
  userList$ = this.store.select(selectUserList);
  ngOnInit(): void {
    this.store.dispatch(
      UPDATE_LOADING_STATUS({
        Status: false,
      })
    );
    this.store.dispatch(GET_USER_LIST());
    this.userList$.subscribe((res) => console.log(res));
  }
  getUserList(): void {
    console.log('sad');
    this.store.dispatch(GET_USER_LIST());
  }
}
