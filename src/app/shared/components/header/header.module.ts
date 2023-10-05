import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    SidebarModule,
    ButtonModule,
    BlockUIModule,
    ProgressSpinnerModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
