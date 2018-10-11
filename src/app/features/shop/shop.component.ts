import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromStore from './@store';
import { Category } from '../../shared/models/category';
import { Product } from '../../shared/models/product';
import { Filter } from './models/filter';
import { User } from '../../shared/models/user';
import { WishList } from '../wishlist/models/wishlist';
import { selectUser } from '../../core/@store';
import * as fromWishlist from '../wishlist/@store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  productsLoaded$: Observable<{}>;

  viewMode$: Observable<string>;

  categories$: Observable<Category[]>;
  categoriesLoaded$: Observable<{}>;

  wishlist: WishList;
  user: User;

  constructor(private store: Store<fromStore.ShopState>) {
  }

  ngOnInit(): void {

    // loading products
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
    this.productsLoaded$ = this.store.pipe(select(fromStore.getProductsLoaded));
    this.productsLoaded$.pipe(
      filter((loaded: boolean) => {
        if (!loaded) {
          return !loaded;
        }
      })
    ).subscribe((loaded: boolean) => {
      this.store.dispatch(new fromStore.LoadProducts());
    });

    // loading categories
    this.categories$ = this.store.pipe(select(fromStore.getAllCategories));
    this.categoriesLoaded$ = this.store.pipe(select(fromStore.getCategoriesLoaded));
    this.categoriesLoaded$.pipe(
      filter((loaded: boolean) => {
        if (!loaded) {
          return !loaded;
        }
      })
    ).subscribe((loaded: boolean) => {
      this.store.dispatch(new fromStore.LoadCategories());
    })
    // loading view mode
    this.viewMode$ = this.store.pipe(select(fromStore.getViewMode));
    // loading user
    this.store.pipe(select(selectUser)).subscribe((user: any) => this.user = user);
    this.store.pipe(select(fromStore.selectWishlistProducts)).subscribe((wishlist: WishList) => this.wishlist = wishlist);
    // loading wishlist
    this.store.dispatch(new fromWishlist.LoadWishlist(this.user.id));
  }

  onFiltersChanged(filters: Filter): void {
    this.store.dispatch(new fromStore.LoadProducts(filters));
  }

  onAddToCart(product: Product): void {
    this.store.dispatch(new fromStore.AddToCart(product));
  }

  onViewChanged(view: string): void {
    this.store.dispatch(new fromStore.ChangeViewMode(view));
  }

  onAddToWishlist(product: Product): void {
    this.store.pipe(select(fromWishlist.getWishlist)).subscribe((wishlist: WishList) => this.wishlist = wishlist);
    if (this.wishlist === null) {
      const wishlistToCreate: WishList = {client: this.user, items: [product]};
      this.store.dispatch(new fromStore.CreateNewWishlist(wishlistToCreate));
    } else {
      const newItems: Product[] = [...this.wishlist.items, product];
      const newWishlist: WishList = {client: this.user, items: newItems};
      this.store.dispatch(new fromStore.AddProductToWishlist(newWishlist));
    }
  }
  onRemoveFromWishlist(product: Product): void {
    const newItems: Product[] = this.wishlist.items.filter((item: Product) => item !== product);
    const newWishlist: WishList = {client: this.user, items: newItems};
    this.store.dispatch(new fromStore.RemoveProductFromWishlist(newWishlist));
  }
}
