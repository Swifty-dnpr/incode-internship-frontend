import { Action } from '@ngrx/store';
import { WishList } from '../../models/wishlist';

// load wishlist
export const LOAD_WISHLIST: string = '[Whislist] Load Wishlist';
export const LOAD_WISHLIST_FAIL: string = '[Whislist] Load Wishlist Fail';
export const LOAD_WISHLIST_SUCCESS: string = '[Whislist] Load Wishlist Success';

export class LoadWishlist implements Action {
  readonly type: string = LOAD_WISHLIST;
  constructor(public payload: string) {}
}

export class LoadWishlistFail implements Action {
  readonly type: string = LOAD_WISHLIST_FAIL;
  constructor(public payload: any) {}
}

export class LoadPWishlistSuccess implements Action {
  readonly type: string = LOAD_WISHLIST_SUCCESS;
  constructor(public payload: WishList) {}
}

// action types
export type WishlistAction =
  | LoadWishlist
  | LoadWishlistFail
  | LoadPWishlistSuccess;
