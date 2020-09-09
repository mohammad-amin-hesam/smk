import {
  LIST_FARMS,
  LIST_FARMS_SUCCESS,
  LIST_FARMS_FAILD,
  LIST_FARMS_BY_COMPANY_ID,
  FETCH_FARMS,
  FETCH_FARMS_START,
  FETCH_FARMS_FAIL,
  FETCH_FARMS_SUCCESS,
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  farms: [],
  selectedItem:null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LIST_FARMS:
        return { ...state, loading: false, farms: action.payload }
      case LIST_FARMS_BY_COMPANY_ID:
        return { ...state, loading: true, companyId: action.payload }
      case LIST_FARMS_SUCCESS:
        return { ...state, loading: false, farms: action.payload }
      case LIST_FARMS_FAILD:
        return { ...state, loading: false, msg: action.payload }
      default:
        return { ...state }
    }
}
