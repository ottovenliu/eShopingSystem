import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducers';

export const selectUserState = createFeatureSelector<fromUser.userState>(fromUser.userReducerKey);
export const selectUserList = createSelector(selectUserState, (state) => state.userList);
