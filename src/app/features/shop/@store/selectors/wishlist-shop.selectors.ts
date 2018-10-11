import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { ShopState } from '../reducers';
import * as fromWishlist from '../reducers/wishlist.reducer';

const getShopState: MemoizedSelector<object, ShopState> = createFeatureSelector<ShopState>('shop');
export const getWishlistState: MemoizedSelector<object, fromWishlist.WishlistState> = createSelector(
  getShopState,
  (state: ShopState) => {
    return state.wishlist;
  }
);

export const selectWishlistProducts: any = createSelector(getWishlistState, fromWishlist.getWishlistProducts);
export const selectLoading: any = createSelector(getWishlistState, fromWishlist.getWishlistLoading);
export const selectLoaded: any = createSelector(getWishlistState, fromWishlist.getWishlistLoaded);
export const selectWishlistCreated: any = createSelector(getWishlistState, fromWishlist.getWishlistCreated);
