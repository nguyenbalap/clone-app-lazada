/* eslint-disable prettier/prettier */
export const FETCH_REQUEST_PRODUCTS = 'FETCH_REQUEST_PRODUCTS';
export const FETCH_SUCCESS_PRODUCTS = 'FETCH_SUCCESS_PRODUCTS';
export const FETCH_ERROR_PRODUCTS = 'FETCH_ERROR_PRODUCTS';

export function fetchPostsRequest() {
  return {
    type: FETCH_REQUEST_PRODUCTS,
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: FETCH_SUCCESS_PRODUCTS,
    payload,
  };
}

export function fetchPostsError() {
  return {
    type: FETCH_ERROR_PRODUCTS,
  };
}
