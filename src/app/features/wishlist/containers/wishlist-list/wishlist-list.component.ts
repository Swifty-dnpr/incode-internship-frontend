import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../@store';
import * as fromCore from '../../../../core/@store';
import { WishList } from '../../models/wishlist';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {

  wishlist$: Observable<WishList>;
  wishlistLoaded$: Observable<boolean>;
  user: User;

  constructor(private store: Store<fromStore.WhishListFeatureState>) {}

  ngOnInit(): void {
      this.store.pipe(select(fromCore.selectUser)).subscribe((user: User) => this.user = user);
      this.wishlist$ = this.store.pipe(select(fromStore.getWishlist));
      this.wishlistLoaded$ = this.store.pipe(select(fromStore.getWishlistLoaded));
      this.wishlistLoaded$.pipe(
        filter((loaded: boolean) => {
          if (!loaded) {
            return !loaded;
          }
        })
      ).subscribe((loaded: boolean) => {
        this.store.dispatch(new fromStore.LoadWishlist(this.user.id));
      });
  }
}
