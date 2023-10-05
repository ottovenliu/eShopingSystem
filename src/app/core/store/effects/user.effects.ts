import { Injectable, inject } from '@angular/core';
import { catchError, concatMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserInfoService } from 'src/app/shared/service/user-info.service';
import * as UserActions from '../actions/user.actions';
@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userInfoService = inject(UserInfoService);

  /**
   * 取得UserList
   */
  userLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.GET_USER_LIST),
      concatMap(() =>
        this.userInfoService.getUserList().pipe(
          map((result) => {
            if (result.data) {
              return UserActions.GET_USER_LIST_SUCCESS({
                userList: result.data,
              });
            } else {
              return UserActions.GET_USER_LIST_FAIL({
                userList: [],
              });
            }
          }),
          catchError(() =>
            of(
              UserActions.GET_USER_LIST_FAIL({
                userList: [],
              })
            )
          )
        )
      )
    );
  });
}
