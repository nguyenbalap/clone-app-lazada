/* eslint-disable prettier/prettier */
export const addCarts = cartIndex => ({
  type: 'ADD_CART',
  payload: cartIndex,
});
export const decrease = cartIndex => ({
  type: 'DE_CREASE',
  payload: cartIndex,
});
export const increase = cartIndex => ({
  type: 'IN_CREASE',
  payload: cartIndex,
});
