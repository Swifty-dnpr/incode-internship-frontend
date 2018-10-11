import { Action } from '@ngrx/store';
import { WishList } from '../../../wishlist/models/wishlist';

export const CREATE_NEW_WISHLIST: string = '[Shop] Create New Wishlist';
export const CREATE_NEW_WISHLIST_SUCCESS: string = '[Shop] Create New Wishlist Success';
export const CREATE_NEW_WISHLIST_FAILED: string = '[Shop] Create New Wishlist Failed';
export const ADD_PRODUCT_TO_WISHLIST: string = '[Shop] Add Product To Wishlist';
export const ADD_PRODUCT_WISHLIST_SUCCESS: string = '[Shop] Add Product To Wishlist Success';
export const ADD_PRODUCT_WISHLIST_FAIL: string = '[Shop] Add Product To Wishlist Fail';
export const REMOVE_FROM_WISHLIST: string = '[Shop] Remove Product From Wishlist';
export const REMOVE_FROM_WISHLIST_SUCCESS: string = '[Shop] Remove Product From Wishlist Success';
export const REMOVE_FROM_WISHLIST_FAILED: string = '[Shop] Remove Product From Wishlist Failed';

export class CreateNewWishlist implements Action {
  readonly type: string = CREATE_NEW_WISHLIST;
  constructor(public payload: WishList) {}
}

export class CreateNewWishlistSuccess implements Action {
  readonly type: string = CREATE_NEW_WISHLIST_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateNewWishlistFailed implements Action {
  readonly type: string = CREATE_NEW_WISHLIST_FAILED;
  constructor(public payload: any) {}
}

export class AddProductToWishlist implements Action {
  readonly type: string = ADD_PRODUCT_TO_WISHLIST;
  constructor(public payload: WishList) {}
}

export class AddToWishlistSuccess implements Action {
  readonly type: string = ADD_PRODUCT_WISHLIST_SUCCESS;
  constructor(public payload: WishList) {}
}

export class AddToWishlistFailed implements Action {
  readonly type: string = ADD_PRODUCT_WISHLIST_SUCCESS;
  constructor(public payload: any) {}
}

export class RemoveProductFromWishlist implements Action {
  readonly type: string = REMOVE_FROM_WISHLIST;
  constructor(public payload: WishList) {}
}

export class RemoveFromWishlistSuccess implements Action {
  readonly type: string = REMOVE_FROM_WISHLIST_SUCCESS;
  constructor(public payload: WishList) {}
}

export class RemoveFromWishlistFailed implements Action {
  readonly type: string = REMOVE_FROM_WISHLIST_FAILED;
  constructor(public payload: any) {}
}

export type ShopWishlistAction = CreateNewWishlist | AddProductToWishlist | AddToWishlistSuccess | AddToWishlistFailed;
