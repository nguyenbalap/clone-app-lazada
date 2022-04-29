/* eslint-disable prettier/prettier */

const INITIAL_STATE = {
  isLogin: false,
  user: '',
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      let {isLogin, user} = state;
      isLogin = true;
      user = action.payload;
      const newstate = {isLogin, user};
      return newstate;
    case 'WRONG_ACCOUNT':
      isLogin = false;
      const newstate0 = {isLogin};
      return newstate0;
    case 'LOGOUT':
      isLogin = false;
      const newstate1 = {isLogin};
      return newstate1;
    default:
      return state;
  }
};
export default LoginReducer;
