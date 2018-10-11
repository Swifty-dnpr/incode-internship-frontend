import { UserModel } from '../../../shared/models/UserModel';
import { Product } from '../../../shared/models/product';

export class WishlistResponse {
  success: boolean;
  wishlist: {
    id: string,
    client: UserModel,
    items: Product[]
  };
}
