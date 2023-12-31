import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GET_USER_LIST } from 'src/app/core/store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private store = inject(Store);
  private httpService = inject(HttpService);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getAPIUserList(): Observable<any> {
    return this.httpService.getFormDummy('/dummyApi/user', null);
  }
  actionGetUserList(): void {
    this.store.dispatch(GET_USER_LIST());
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserList(): Observable<any> {
    return this.getAPIUserList();
  }
}
