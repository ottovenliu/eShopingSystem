// import { ResetPasswordRequest } from './../../core/models/user.model';
// import { Injectable, inject } from '@angular/core';
// import { HttpService } from './http.service';
// import { Observable, catchError, of, take } from 'rxjs';
// import * as fromPagesActions from '../../core/store/actions';
// import * as fromPagesReducers from '../../core/store/reducers';
// import { Store } from '@ngrx/store';
// import {
//   PagingResponse,
//   TOKEN_REFRESH_KEY,
//   UserLoginInfo,
//   UserLoginType,
//   userLogOutInfo,
// } from 'src/app/core/models';
// import { HttpStatusCode } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserInfoService {
//   private store = inject(Store<fromPagesReducers.State>);
//   private http = inject(HttpService);
//   /**
//    * 取得驗證碼
//    * @returns 驗證碼
//    */
//   getVerificationCode(): Observable<PagingResponse> {
//     return this.getAPIVerificationCode();
//   }
//   /**
//    * Action: 登入
//    * @param userInfo
//    */
//   loginAction(userInfo: UserLoginType): void {
//     this.store.dispatch(
//       fromPagesActions.UserActions.USER_LOGIN({
//         userLogin: {
//           Account: userInfo.Account,
//           Password: userInfo.Password,
//           Type: userInfo.Type,
//         },
//       })
//     );
//   }
//   /**
//    * Action: 登出
//    */
//   logOutAction(): void {
//     this.store.dispatch(
//       fromPagesActions.UserActions.USER_LOGOUT({
//         userLoginStatus: false,
//         userLoginDetail: userLogOutInfo,
//       })
//     );
//   }
//   /**
//    * Action: 重整JWT
//    * @param refreshToken
//    */
//   refreshTokenAction(refreshToken = String(localStorage.getItem(TOKEN_REFRESH_KEY))): void {
//     this.store.dispatch(
//       fromPagesActions.UserActions.USER_REFRESH({
//         userRefreshToken: refreshToken,
//       })
//     );
//   }
//   /**
//    * 變更密碼
//    * @param body 變更密碼所需參數
//    * @returns string true/false 是否成功變更
//    */
//   updateUserPassword(body: ResetPasswordRequest): Observable<string> {
//     return this.getAPIResetPassword(body).pipe(take(1));
//   }
//   /**
//    * 重整JWT
//    * @param refreshToken refreshToken
//    * @returns 更新憑證後之使用者資料
//    */
//   refreshToken(refreshToken: string): Observable<UserLoginInfo> {
//     return this.getAPIRefreshToken(refreshToken).pipe(take(1));
//   }
//   /**
//    * 登入
//    * @param body 登入所需參數
//    * @returns 登入帳號之使用者資料
//    */
//   login(body: UserLoginType): Observable<UserLoginInfo> {
//     return this.getAPILogin(body).pipe(take(1));
//   }
//   /**
//    * 取得API: 登入
//    * @param body 登入所需參數
//    * @returns  Post Request
//    */
//   private getAPILogin(body: UserLoginType): Observable<UserLoginInfo> {
//     return this.http.post<UserLoginInfo>('/api/User/Login', null, body);
//   }
//   /**
//    * 取得API: 變更密碼
//    * @param body 變更密碼所需參數
//    * @returns Post Request
//    */
//   private getAPIResetPassword(body: ResetPasswordRequest): Observable<string> {
//     return this.http.post<string>('/api/User/ResetPassword', null, body).pipe(
//       catchError((err) => {
//         if (err.status === HttpStatusCode.Unauthorized) {
//           this.refreshTokenAction();
//         }
//         return of('false');
//       })
//     );
//   }
//   /**
//    * 取得API: 取得驗證碼
//    * @returns  Get Request
//    */
//   private getAPIVerificationCode(): Observable<PagingResponse> {
//     return this.http.get('/api/User/GetVerificationCode');
//   }
//   /**
//    * 取得API: 刷新JWT
//    * @param body ReJWT
//    * @returns  Post Request
//    */
//   private getAPIRefreshToken(body: string): Observable<UserLoginInfo> {
//     return this.http.post<UserLoginInfo>('/api/User/RefreshToken', null, JSON.stringify(body));
//   }
// }
