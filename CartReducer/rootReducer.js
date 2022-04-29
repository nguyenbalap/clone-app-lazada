/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import RegisReducer from './RegisReducer';
import LoginReducer from './LoginReducer';
import GetProductReducer from './GetProducts';
const root = combineReducers({
  carts: cartReducer,
  registration: RegisReducer,
  login: LoginReducer,
  fetchProduct: GetProductReducer,
});
// (state, action) => {
//     return {
//       carts: cartReducer(state, action),
//       Products: productReducer(state, action),
//     };
//   };
export default root;
