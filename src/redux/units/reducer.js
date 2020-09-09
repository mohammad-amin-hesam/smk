import {
  LIST_UNITS,
  LIST_UNITS_BY_SECTION_ID,
  LIST_UNITS_SUCCESS,
  LIST_UNITS_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  units: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_UNITS:
      return { ...state, loading: true, units: action.payload }
    case LIST_UNITS_BY_SECTION_ID:
      return { ...state, loading: true, sectionId: action.payload }
    case LIST_UNITS_SUCCESS:
      return { ...state, loading: false, units: action.payload }
    case LIST_UNITS_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
