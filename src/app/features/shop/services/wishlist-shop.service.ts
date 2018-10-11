import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WishList } from '../../wishlist/models/wishlist';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistShopService {
  private wishlistURL: string = `${environment.baseUrl}/wishlists`;

  constructor(private http: HttpClient) {
  }

  // TODO Change type of what functions return
  createWishlist(wishlist: WishList): Observable<any> {
    return this.http.post(this.wishlistURL, wishlist);
  }

  updateWishlist(wishlist: WishList, id: string): Observable<any> {
    return this.http.put(`${this.wishlistURL}/${id}`, wishlist);
  }

}
