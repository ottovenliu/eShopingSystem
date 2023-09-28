// import { Injectable, inject } from '@angular/core';
// import { UserActions } from '../actions';
// import { catchError, concatMap, map, of } from 'rxjs';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { UserInfoService } from 'src/app/shared/service/user-info.service';
// import { TOKEN_KEY, TOKEN_REFRESH_KEY, UserLoginInfo, userLoginInfo } from '../../models';

// @Injectable()
// export class UserEffects {
//   private actions$ = inject(Actions);
//   private userInfoService = inject(UserInfoService);

//   /**
//    * 取得JWT
//    */
//   userLogin$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(UserActions.USER_LOGIN),
//       concatMap((action) =>
//         this.userInfoService.login(action.userLogin).pipe(
//           map((result: UserLoginInfo) => {
//             if (typeof result.RefreshToken === 'string' && result.RefreshToken !== '') {
//               localStorage.setItem(TOKEN_REFRESH_KEY, result.RefreshToken);
//               localStorage.setItem(TOKEN_KEY, result.JwtToken);
//               return UserActions.USER_LOGIN_SUCCESS({
//                 userLoginStatus: true,
//                 userLoginDetail: result,
//               });
//             } else {
//               return UserActions.USER_LOGIN_FAIL({
//                 userLoginStatus: false,
//                 userLoginDetail: result,
//               });
//             }
//           }),
//           // 發生例外的話，使用 USER_LOGIN_FAIL Action
//           catchError(() =>
//             of(
//               UserActions.USER_LOGIN_FAIL({
//                 userLoginStatus: false,
//                 userLoginDetail: userLoginInfo,
//               })
//             )
//           )
//         )
//       )
//     );
//   });
//   /**
//    * 進行憑證重認證 RefreshToken
//    */
//   userRefresh$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(UserActions.USER_REFRESH),
//       concatMap((action) =>
//         this.userInfoService.refreshToken(action.userRefreshToken).pipe(
//           map((result: UserLoginInfo) => {
//             if (typeof result.RefreshToken === 'string' && result.RefreshToken !== '') {
//               localStorage.setItem(TOKEN_REFRESH_KEY, result.RefreshToken);
//               localStorage.setItem(TOKEN_KEY, result.JwtToken);
//               return UserActions.USER_LOGIN_SUCCESS({
//                 userLoginStatus: true,
//                 userLoginDetail: result,
//               });
//             } else {
//               return UserActions.USER_LOGIN_FAIL({
//                 userLoginStatus: false,
//                 userLoginDetail: result,
//               });
//             }
//           }),
//           // 發生例外的話，使用 USER_LOGIN_FAIL Action
//           catchError(() =>
//             of(
//               UserActions.USER_LOGIN_FAIL({
//                 userLoginStatus: false,
//                 userLoginDetail: userLoginInfo,
//               })
//             )
//           )
//         )
//       )
//     );
//   });
// }
