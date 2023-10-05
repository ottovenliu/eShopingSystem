// INFO: 系統layout參數Type
/**
 * 載入遮照狀態
 */
export interface LoadingStatus {
  status: boolean;
}
/**
/**
 * 側邊功能列表展示狀態
 */
export interface SlideMenuStatus {
  /**
   * 是否呈現側邊清單
   */
  isShow: boolean;
  /**
   * 側邊清單是否為最小呈現狀態
   */
  isMini: boolean;
  /**
   * 側邊清單是否為延伸狀態
   */
  isExtant: boolean;
}
