import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  user: localStorage.getItem('token'),
  loading: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case LOGIN_USER_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case REGISTER_USER:
      return { ...state, loading: true }
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid }
    case LOGOUT_USER:
      return { ...state, user: null }
    default:
      return { ...state }
  }
}
