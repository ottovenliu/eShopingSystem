import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderModule],
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.scss'],
})
export class IndexLayoutComponent {}
