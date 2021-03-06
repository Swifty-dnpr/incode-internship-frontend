import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as productActions from '../actions/products.actions';
import * as notificationsActions from '../../../../core/@store/actions';
import * as fromServices from '../../services';
import { Product } from '../../../../shared/models/product';

@Injectable()

export class ProductsEffect {
  constructor(
    private  actions$: Actions,
    private productService: fromServices.ProductsService) {
  }

  @Effect()
  loadProducts$: Observable<any> = this.actions$.pipe(
    ofType(productActions.LOAD_PRODUCTS),
    switchMap((action: Action) => {
      return this.productService.getProducts(action['payload']).pipe(
      map ((response: { success: boolean, products: Product[] }) => {
          const products: Product[] = response['products'];
          const entities: { [key: string]: Product }  = {};

          products.forEach((product: Product) => {
            entities[product.id] = product;
          });

          return new productActions.LoadProductsSuccess({products, entities});
        }),
        catchError((error: Error) => {
          return [
            new productActions.LoadProductsFail(error),
            new notificationsActions.ShowError(error.message)
          ];
        })
      );
    })
  );
}
