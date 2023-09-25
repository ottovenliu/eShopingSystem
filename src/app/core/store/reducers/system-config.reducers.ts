// import { createReducer, on } from '@ngrx/store';
// import {
//   GET_PAGE_FEATURE_FAIL,
//   GET_PAGE_FEATURE_SUCCESS,
//   GET_ROLE_LIST_FAIL,
//   GET_ROLE_LIST_SUCCESS,
// } from '../actions/system-config.actions';
// import { AuthParentPermissionItem, RoleListItem } from '../../models';

// export const initialState: State = {
//   RoleList: [],
//   PageFeatures: [],
// };

// export interface State {
//   RoleList: Array<RoleListItem>;
//   PageFeatures: Array<AuthParentPermissionItem>;
// }

// export const reducer = createReducer(
//   initialState,
//   on(GET_ROLE_LIST_SUCCESS, (state, action) => {
//     return {
//       ...state,
//       RoleList: action.respond.Data,
//     };
//   }),
//   on(GET_ROLE_LIST_FAIL, (state, action) => {
//     return {
//       ...state,
//       RoleList: action.respond.Data,
//     };
//   }),
//   on(GET_PAGE_FEATURE_SUCCESS, (state, action) => {
//     return {
//       ...state,
//       PageFeatures: action.respond,
//     };
//   }),
//   on(GET_PAGE_FEATURE_FAIL, (state, action) => {
//     return {
//       ...state,
//       PageFeatures: action.respond,
//     };
//   })
// );
