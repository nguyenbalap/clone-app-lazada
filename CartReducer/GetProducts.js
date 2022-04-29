/* eslint-disable prettier/prettier */
import {FETCH_REQUEST_PRODUCTS} from './GetProductAction';
const INITIAL_STATE = {
  data: [],
};
const GetProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST_PRODUCTS:
      let {data} = state;
      if (data.length === 0) {
        data.push(action.payload);
      }
      return {data};
    default:
      return state;
  }
};

export default GetProductReducer;
