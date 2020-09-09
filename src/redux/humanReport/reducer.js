import {
  LIST_HUMAN_REPORT,
  LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_HUMAN_REPORT_SUCCESS,
  LIST_HUMAN_REPORT_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  listHumanReport: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_HUMAN_REPORT:
      return { ...state, loading: true, listHumanReport: action.payload }
    case LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_HUMAN_REPORT_SUCCESS:
      return { ...state, loading: false, listHumanReport: action.payload }
    case LIST_HUMAN_REPORT_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
