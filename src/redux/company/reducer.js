import {
  LIST_COMPANIES,
  LIST_COMPANIES_FAILD,
  LIST_COMPANIES_COORDS,
  LIST_COMPANIES_SUCCESS,
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  filter: {},
  companies: [],
  selectedItem: null
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_COMPANIES:
      return { ...state, loading: true, filter: action.payload }
    case LIST_COMPANIES_SUCCESS:
      return { ...state, loading: false, companies: action.payload }
    case LIST_COMPANIES_FAILD:
      return { ...state, loading: false, msg: action.payload }

    default:
      return { ...state }
  }
}
