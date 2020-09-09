import {
  LIST_YEARS,
  LIST_YEARS_SUCCESS,
  LIST_YEARS_FAILD,
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  years: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_YEARS:
      return { ...state, loading: true,years: action.payload }
    case LIST_YEARS_SUCCESS:
      return { ...state, loading: false,years: action.payload }
    case LIST_YEARS_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}