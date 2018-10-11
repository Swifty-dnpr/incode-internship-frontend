import * as fromWishlist from '../actions/wishlist.actions';
import { WishList } from '../../../wishlist/models/wishlist';

export class WishlistState {
  wishlist: WishList;
  loading: boolean;
  loaded: boolean;
  wishlistCreated: boolean;
}

export const initialState: WishlistState = {
  wishlist: null,
  loading: false,
  loaded: false,
  wishlistCreated: false
};

export function reducer(
  state: WishlistState = initialState,
  action: fromWishlist.ShopWishlistAction
): WishlistState {
  switch (action.type) {
    case fromWishlist.CREATE_NEW_WISHLIST: {
      return {
        ...state,
        wishlist: action.payload,
        wishlistCreated: true
      };
    }
    case fromWishlist.ADD_PRODUCT_TO_WISHLIST: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromWishlist.ADD_PRODUCT_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlist: action.payload,
        loading: false,
        loaded: true
      };
    }
    case fromWishlist.ADD_PRODUCT_WISHLIST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromWishlist.REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromWishlist.REMOVE_FROM_WISHLIST_SUCCESS: {
      return {
        ...state,
        wishlist: action.payload,
        loading: false,
        loaded: true
      };
    }
    case fromWishlist.REMOVE_FROM_WISHLIST_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default:
      return state;
  }
}

export const getWishlistProducts: any = (state: WishlistState): WishList => state.wishlist;
export const getWishlistLoading: any = (state: WishlistState): boolean => state.loading;
export const getWishlistLoaded: any = (state: WishlistState): boolean => state.loaded;
export const getWishlistCreated: any = (state: WishlistState): boolean => state.wishlistCreated;
