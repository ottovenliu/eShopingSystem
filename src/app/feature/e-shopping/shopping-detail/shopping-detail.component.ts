import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss'],
})
export class ShoppingDetailComponent implements OnInit {
  private activeRouter = inject(ActivatedRoute);
  ngOnInit(): void {
    this.getDetailID();
  }

  getDetailID(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(id);
  }
}
