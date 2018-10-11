import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from '../reducers/products.reducer';
import * as fromCategories from '../reducers/categories.reducer';
import * as fromCart from '../reducers/cart.reducer';
import * as fromWishlist from '../reducers/wishlist.reducer';

export interface ShopState {
  products: fromProducts.ProductState;
  categories: fromCategories.CategoriesState;
  cart: fromCart.CartState;
  wishlist: fromWishlist.WishlistState;
}

export const reducers: ActionReducerMap<ShopState> = {
  products: fromProducts.reducer,
  categories: fromCategories.reducer,
  cart: fromCart.reducer,
  wishlist: fromWishlist.reducer
};
