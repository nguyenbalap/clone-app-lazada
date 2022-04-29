/* eslint-disable prettier/prettier */
export const FETCH_REQUEST_PRODUCTS = 'FETCH_REQUEST_PRODUCTS';

export function GetProductAction(payload) {
  return {
    type: FETCH_REQUEST_PRODUCTS,
    payload,
  };
}
