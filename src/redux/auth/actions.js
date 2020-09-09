import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAILD
} from '../../constants/actionTypes'

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
})
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
})
export const loginUserFaild = (msg) => ({
  type: LOGIN_USER_FAILD,
  payload: msg
})

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history }
})
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
})

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history }
})
