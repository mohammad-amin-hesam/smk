import {
  LIST_SECTION,
  LIST_SECTION_BY_FARM_ID,
  LIST_SECTION_SUCCESS,
  LIST_SECTION_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  section: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_SECTION:
      return { ...state, loading: true, section: action.payload }
    case LIST_SECTION_BY_FARM_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_SECTION_SUCCESS:
      return { ...state, loading: false, section: action.payload }
    case LIST_SECTION_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
