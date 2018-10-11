import { Injectable } from '@angular/core';

import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromWishlist from '../actions/wishlist.actions';
import * as fromNotification from '../../../../core/@store/actions';
import * as fromServices from '../../services';
import { WishlistResponse } from '../../models/wishlist-response';
import { WishList } from '../../../wishlist/models/wishlist';

@Injectable()
export class WishlistShopEffects {
  constructor(
    private actions$: Actions,
    private wishlistService: fromServices.WishlistShopService
  ) {}

  @Effect()
  createWishlistEffect$: Observable<any> = this.actions$.pipe(
    ofType(fromWishlist.CREATE_NEW_WISHLIST),
    map((action: fromWishlist.ShopWishlistAction) => action.payload),
    switchMap((payload: WishList) => this.wishlistService.createWishlist(payload).pipe(
      switchMap((wishlistResponse: WishlistResponse) => {
        return [
          new fromWishlist.CreateNewWishlistSuccess(wishlistResponse.wishlist),
          new fromNotification.ShowMessage('Successfully created a wishlist')
        ];
      }),
      catchError((error: any) => {
        return [
          new fromWishlist.CreateNewWishlistFailed(error),
          new fromNotification.ShowError(error.message)
        ];
      })
    ))
  );

  @Effect()
  addProductToWishlist$: Observable<any> = this.actions$.pipe(
    ofType(fromWishlist.ADD_PRODUCT_TO_WISHLIST),
    map((action: fromWishlist.ShopWishlistAction) => action.payload),
    switchMap((payload: WishList) => this.wishlistService.updateWishlist(payload, payload.client.id).pipe(
      switchMap(() => {
        return [
          new fromWishlist.AddToWishlistSuccess(payload),
          new fromNotification.ShowMessage('Successfully added product to wishlist!')
        ];
      }),
      catchError((error: any) => {
        return [
          new fromWishlist.AddToWishlistFailed(error),
          new fromNotification.ShowError(error.message)
        ];
      })
    ))
  );
  // TODO fix any's
  @Effect()
  removeProductFromWishlist$: Observable<any> = this.actions$.pipe(
    ofType(fromWishlist.REMOVE_FROM_WISHLIST),
    map((action: fromWishlist.ShopWishlistAction) => action.payload),
    switchMap((payload: WishList) => this.wishlistService.updateWishlist(payload, payload.client.id).pipe(
      switchMap(() => {
        return [
          new fromWishlist.RemoveFromWishlistSuccess(payload),
          new fromNotification.ShowMessage('Successfully removed product from wishlist!')
        ];
      }),
      catchError((error: any) => {
        return [
          new fromWishlist.RemoveFromWishlistFailed(error),
          new fromNotification.ShowError('Error: Can not remove product from wishlist')
        ];
      })
    ))
  );
}
