import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as wishlistActions from '../actions/wishlist.action';
import * as notificationActions from '../../../../core/@store/actions';
import * as fromServices from '../../services';
import { WishList } from '../../models/wishlist';

@Injectable()
export class WishlistEffects {
  constructor(
    private actions$: Actions,
    private wishlistService: fromServices.WishlistService
  ) {}

  @Effect()
  loadWishlist$: Observable<any> = this.actions$.pipe(
    ofType(wishlistActions.LOAD_WISHLIST),
    map((action: wishlistActions.WishlistAction) => action.payload),
    switchMap((payload: string) => {
      return this.wishlistService
        .getWishList(payload)
        .pipe(
          map((response: {success: boolean; wishlist: WishList}) => {
            return new wishlistActions.LoadPWishlistSuccess(response.wishlist);
          }),
          catchError((error: any) => {
            return [
              new wishlistActions.LoadWishlistFail(error),
              new notificationActions.ShowError(error.message)
            ];
          })
        );
    })
);
}
