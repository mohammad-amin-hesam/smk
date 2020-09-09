import {
  LIST_EXPERT_REPORT,
  LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_EXPERT_REPORT_SUCCESS,
  LIST_EXPERT_REPORT_FAILD,
  LIST_TYPE_OPERATION,
  LIST_TYPE_OPERATION_SUCCESS,
  LIST_TYPE_OPERATION_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  listExpertReport: [],
  typeOperation: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_EXPERT_REPORT:
      return { ...state, loading: true, listExpertReport: action.payload }
    case LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_EXPERT_REPORT_SUCCESS:
      return { ...state, loading: false, listExpertReport: action.payload }
    case LIST_EXPERT_REPORT_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_TYPE_OPERATION:
      return { ...state, loading: true, typeOperation: action.payload }
    case LIST_TYPE_OPERATION_SUCCESS:
      return { ...state, loading: true, typeOperation: action.payload }
    case LIST_TYPE_OPERATION_FAILD:
      return { ...state, loading: true, msg: action.payload }

    default:
      return { ...state }
  }
}
