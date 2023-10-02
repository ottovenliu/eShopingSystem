import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
