import {
  LIST_MACHINERY,
  LIST_MACHINERY_BY_PLANTATION_ID,
  LIST_MACHINERY_SUCCESS,
  LIST_MACHINERY_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  machinery: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_MACHINERY:
      return { ...state, loading: true, machinery: action.payload }
    case LIST_MACHINERY_BY_PLANTATION_ID:
      return { ...state, loading: true, plantationId: action.payload }
    case LIST_MACHINERY_SUCCESS:
      return { ...state, loading: false, machinery: action.payload }
    case LIST_MACHINERY_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
