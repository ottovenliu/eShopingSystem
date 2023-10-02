import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SwiperModule, RouterModule, SidebarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
