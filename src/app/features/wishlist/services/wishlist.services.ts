import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { WishList } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishList(id: string): Observable<{success: boolean; wishlist: WishList}> {

    return this.http.get<{success: boolean; wishlist: WishList}>
    (`${environment.baseUrl}/wishlists/${id}`);
  }
}
