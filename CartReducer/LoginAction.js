/* eslint-disable prettier/prettier */

export const loginAction = index => ({
  type: 'LOGIN',
  payload: index,
});
export const loginWrong = index => ({
  type: 'WRONG_ACCOUNT',
  payload: index,
});
export const logoutAction = index => ({
  type: 'LOGOUT',
  payload: index,
});
