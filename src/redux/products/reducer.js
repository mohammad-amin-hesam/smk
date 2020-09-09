import {
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID,
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD,
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  products: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
