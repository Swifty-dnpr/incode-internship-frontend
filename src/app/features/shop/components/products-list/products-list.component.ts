import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products$: Observable<Product[]>;
  @Input() viewMode$: Observable<string>;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() changeView: EventEmitter<string> = new EventEmitter<string>();
  @Output() addToWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removeFromWishlist: EventEmitter<Product> = new EventEmitter<Product>();

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

  onChangeView(view: string): void {
    this.changeView.emit(view);
  }

  onAddToWishlist(product: Product): void {
    this.addToWishlist.emit(product);
  }
  onRemoveFromWishlist(product: Product): void {
    this.removeFromWishlist.emit(product);
  }
}
