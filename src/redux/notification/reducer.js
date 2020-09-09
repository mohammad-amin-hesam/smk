import {
  LIST_NOTIFICATION,
  LIST_NOTIFICATION_SUCCESS,
  LIST_NOTIFICATION_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  notifications: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_NOTIFICATION:
      return { ...state, loading: true, notifications: action.payload }
    case LIST_NOTIFICATION_SUCCESS:
      return { ...state, loading: false, notifications: action.payload }
    case LIST_NOTIFICATION_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
