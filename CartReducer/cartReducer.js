/* eslint-disable prettier/prettier */
import {createStore} from 'redux';
import GetProductReducer from './GetProducts';
const INITIAL_STATE = {
  cartItem: [],
  quantify: 0,
};
const productReduce = createStore(GetProductReducer).getState();
const cartReducer = (state = INITIAL_STATE, action) => {
  let {cartItem, quantify} = state;
  const products = productReduce.data[0];

  switch (action.type) {
    case 'ADD_CART':
      const addCart = products[action.payload];
      if (cartItem.includes(products[action.payload])) {
        products[action.payload].total++;
        quantify++;
      } else {
        cartItem.push(addCart);
        products[action.payload].total++;
        quantify++;
      }
      const newState = {cartItem, products, quantify};

      return newState;
    case 'DE_CREASE':
      if (products[action.payload].total <= 1) {
        cartItem.splice(cartItem.indexOf(products[action.payload]), 1);
        products[action.payload].total--;
        quantify--;
      } else {
        products[action.payload].total--;
        quantify--;
      }
      const newState1 = {cartItem, products, quantify};

      return newState1;

    case 'IN_CREASE':
      products[action.payload].total++;
      quantify++;
      const newState2 = {cartItem, products, quantify};

      return newState2;

    default:
      return state;
  }
};

export default cartReducer;
