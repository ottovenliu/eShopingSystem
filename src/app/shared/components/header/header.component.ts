import { Component, HostListener, inject } from '@angular/core';
import { categoryItem } from '../../types/system-setting/system';
import SwiperCore, { Pagination, Navigation, SwiperOptions } from 'swiper';
import { Store } from '@ngrx/store';
import { selectLayoutLoading } from 'src/app/core/store/selector/layout.selector';
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private store = inject(Store);
  isLoading$ = this.store.select(selectLayoutLoading);
  /**
   * sidebarVisible 是否呈現側邊欄位
   *
   * @memberof HeaderComponent
   */
  sidebarVisible = false;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 8,
        spaceBetween: 40,
      },
    },
  };
  /**
   * listen window width
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onResize(event: any): void {
    if (event.target.innerWidth < 660) {
      this.hideSlider();
    }
  }
  hideSlider(): void {
    this.sidebarVisible = false;
  }
  toggleSliderMenu(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
  /**
   *商品種類列表
   *
   * @type {Array<categoryItem>}
   * @memberof HeaderComponent
   */
  categories: Array<categoryItem> = [
    { categoryID: 1, categoryName: 'Category 1' },
    { categoryID: 2, categoryName: 'Category 2' },
    { categoryID: 3, categoryName: 'Category 3' },
    { categoryID: 4, categoryName: 'Category 4' },
    { categoryID: 5, categoryName: 'Category 5' },
    { categoryID: 6, categoryName: 'Category 6' },
    { categoryID: 7, categoryName: 'Category 7' },
    { categoryID: 8, categoryName: 'Category 8' },
    { categoryID: 9, categoryName: 'Category 9' },
    { categoryID: 10, categoryName: 'Category 10' },
  ];
}
