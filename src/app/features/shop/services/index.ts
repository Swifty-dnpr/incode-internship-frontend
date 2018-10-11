import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';
import { WishlistShopService } from './wishlist-shop.service';

export const services: any[] = [ProductsService, CategoriesService, WishlistShopService];

export * from './products.service';
export * from './categories.service';
export * from  './wishlist-shop.service';
