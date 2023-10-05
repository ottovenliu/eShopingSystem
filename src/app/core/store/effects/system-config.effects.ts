// import { Injectable, inject } from '@angular/core';
// import { SystemConfigActions } from '../actions';
// import { catchError, concatMap, map, of } from 'rxjs';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import {
//   AuthParentPermissionItem,
//   RoleListModelPagingResponse,
//   roleListResponseFail,
// } from '../../models';
// import { RoleService } from 'src/app/shared/service/role.service';

// @Injectable()
// export class SystemConfigEffects {
//   private actions$ = inject(Actions);
//   private userInfoService = inject(RoleService);
//   /**
//    * 取得JWT
//    */
//   roleList$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(SystemConfigActions.GET_ROLE_LIST),
//       concatMap((action) =>
//         this.userInfoService.getRoleList(action.params).pipe(
//           map((result: RoleListModelPagingResponse) => {
//             return SystemConfigActions.GET_ROLE_LIST_SUCCESS({
//               respond: result,
//             });
//           }),
//           // 發生例外的話，使用 USER_LOGIN_FAIL Action
//           catchError(() =>
//             of(
//               SystemConfigActions.GET_ROLE_LIST_FAIL({
//                 respond: roleListResponseFail,
//               })
//             )
//           )
//         )
//       )
//     );
//   });
//   /**
//    * 取得初始化AuthFeaturesTree
//    */
//   pageFeatures$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(SystemConfigActions.GET_PAGE_FEATURE),
//       concatMap(() =>
//         this.userInfoService.getPageFeature().pipe(
//           map((result: Array<AuthParentPermissionItem>) => {
//             return SystemConfigActions.GET_PAGE_FEATURE_SUCCESS({
//               respond: result,
//             });
//           }),
//           catchError(() =>
//             of(
//               SystemConfigActions.GET_PAGE_FEATURE_FAIL({
//                 respond: [],
//               })
//             )
//           )
//         )
//       )
//     );
//   });
// }
