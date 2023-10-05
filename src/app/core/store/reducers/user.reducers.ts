import { createReducer, on } from '@ngrx/store';
import { GET_USER_LIST_FAIL, GET_USER_LIST_SUCCESS } from '../actions/user.actions';

export const userReducerKey = 'user';
export const initialState: userState = {
  userList: [],
};
export interface userState {
  userList: Array<unknown>;
}
export const reducer = createReducer(
  initialState,
  on(GET_USER_LIST_SUCCESS, (state, action) => {
    return {
      ...state,
      userList: action.userList,
    };
  }),
  on(GET_USER_LIST_FAIL, (state, action) => {
    return {
      ...state,
      userList: action.userList,
    };
  })
);
