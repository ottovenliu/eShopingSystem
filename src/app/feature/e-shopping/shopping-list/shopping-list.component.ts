import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
    });
  }
  goToCategory(categoryID: number): void {
    this.router.navigate(['/eShopping/ShoppingList'], { queryParams: { category: categoryID } });
  }
}
