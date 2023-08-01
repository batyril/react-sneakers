const API_BASE = new URL('http://localhost:3000');
export const URLS = {
  FAVORITES: new URL('favorite', API_BASE),
  SNEAKERS: new URL('sneakers', API_BASE),
  ORDERS: new URL('orders', API_BASE),
  CART: new URL('cart', API_BASE),
};
