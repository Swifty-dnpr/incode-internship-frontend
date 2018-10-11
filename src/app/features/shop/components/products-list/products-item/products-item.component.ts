import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../../shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent {
  @Input() product: Product;
  @Input() viewMode$: Observable<string>;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() addToWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removeFromWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  isAddedToWishlist: boolean = false;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onWishlistClick(): void {
    if (!this.isAddedToWishlist) {
      this.addToWishlist.emit(this.product);
      this.isAddedToWishlist = true;
    } else {
      this.removeFromWishlist.emit(this.product);
      this.isAddedToWishlist = false;
    }
  }
}
