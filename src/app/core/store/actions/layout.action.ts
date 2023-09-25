import { createAction, props } from '@ngrx/store';
import { SlideMenuStatus } from 'src/app/shared/types/layout-setting/layout';

/**
 * 更新系統遮罩狀態
 */
export const UPDATE_LOADING_STATUS = createAction(
  '[LAYOUT] UPDATE_LOADING_STATUS',
  props<{ Status: boolean }>()
);
/**
 * 更新系統選單狀態狀態
 */
export const UPDATE_MENU_STATUS = createAction(
  '[LAYOUT] UPDATE_MENU_STATUS',
  props<{ Status: SlideMenuStatus }>()
);
