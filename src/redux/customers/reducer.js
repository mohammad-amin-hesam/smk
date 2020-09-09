import {
  LIST_CUSTOMERS,
  LIST_CUSTOMERS_SUCCESS,
  LIST_CUSTOMERS_FAILD,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  customers: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_CUSTOMERS:
      return { ...state, loading: true, customers: action.payload }
    case LIST_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, customers: action.payload }
    case LIST_CUSTOMERS_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case ADD_CUSTOMER:
      return { ...state, loading: false, customer: action.payload }
    case EDIT_CUSTOMER:
      return { ...state, loading: false, ...action.payload }
    case EDIT_CUSTOMER_SUCCESS:
      return { ...state, loading: false, ...action.payload }
    case EDIT_CUSTOMER_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
