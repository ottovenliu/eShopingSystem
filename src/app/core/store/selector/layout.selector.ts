import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from '../reducers/layout.reducers';

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutReducerKey
);
export const selectLayoutLoading = createSelector(selectLayoutState, (state) => state.Loading);
export const selectLayoutSlideMenuStatus = createSelector(
  selectLayoutState,
  (state) => state.SlideMenuStatus
);
