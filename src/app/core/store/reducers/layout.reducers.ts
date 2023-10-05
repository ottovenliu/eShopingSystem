import { createReducer, on } from '@ngrx/store';
import { UPDATE_LOADING_STATUS, UPDATE_MENU_STATUS } from '../actions/layout.action';
import { SlideMenuStatus } from 'src/app/shared/types/layout-setting/layout';

export const layoutReducerKey = 'layout';
export const initialState: State = {
  Loading: false,
  SlideMenuStatus: {
    isShow: true,
    isExtant: true,
    isMini: false,
  },
};
export interface State {
  Loading: boolean;
  SlideMenuStatus: SlideMenuStatus;
}
export const reducer = createReducer(
  initialState,
  on(UPDATE_LOADING_STATUS, (state, action) => {
    return {
      ...state,
      Loading: action.Status,
    };
  }),
  on(UPDATE_MENU_STATUS, (state, action) => {
    return {
      ...state,
      SlideMenuStatus: action.Status,
    };
  })
);
