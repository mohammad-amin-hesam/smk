import {
  LIST_OPERATION_REPORT,
  LIST_OPERATION_REPORT_SUCCESS,
  LIST_OPERATION_REPORT_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  listOperationReport: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_OPERATION_REPORT:
      return { ...state, loading: true, selectedItems: action.payload }
    case LIST_OPERATION_REPORT_SUCCESS:
      return { ...state, loading: false, listOperationReport: action.payload }
    case LIST_OPERATION_REPORT_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
