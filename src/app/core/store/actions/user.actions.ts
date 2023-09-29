import { createAction, props } from '@ngrx/store';

/**
 * 取得使用者清單
 */
export const GET_USER_LIST = createAction('[DETAIL] GET_USER_LIST');

export const GET_USER_LIST_SUCCESS = createAction(
  '[DETAIL] GET_USER_LIST_SUCCESS',
  props<{ userList: Array<unknown> }>()
);
export const GET_USER_LIST_FAIL = createAction(
  '[DETAIL] GET_USER_LIST_FAIL',
  props<{ userList: Array<null> }>()
);
