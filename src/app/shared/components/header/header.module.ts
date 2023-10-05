import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SwiperModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
