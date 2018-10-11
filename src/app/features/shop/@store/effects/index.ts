import { ProductsEffect } from './products.effect';
import { CategoriesEffect } from './categories.effects';
import { WishlistShopEffects } from './wishlist.effects';

export const effects: any[] = [ProductsEffect, CategoriesEffect, WishlistShopEffects];

export * from './products.effect';
export * from './categories.effects';
export * from './wishlist.effects';
