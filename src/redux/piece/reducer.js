import {
  LIST_PIECES,
  LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID,
  LIST_PIECES_SUCCESS,
  LIST_PIECES_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  pieces: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_PIECES:
      return { ...state, loading: true, pieces: action.payload }
    case LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_PIECES_SUCCESS:
      return { ...state, loading: false, pieces: action.payload }
    case LIST_PIECES_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
