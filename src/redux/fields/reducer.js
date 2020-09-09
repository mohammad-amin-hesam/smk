import {
  LIST_FIELDS,
  LIST_FIELDS_SUCCESS,
  LIST_FIELDS_FAILD,
  LIST_FIELDS_BY_FARM_ID,
  FETCH_ALL_FIELDS,
  FETCH_ALL_FIELDS_START,
  FETCH_ALL_FIELDS_FAIL,
  FETCH_ALL_FIELDS_SUCCESS
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  fields: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_FIELDS:
      return { ...state, loading: true, fields: action.payload }
    case  LIST_FIELDS_BY_FARM_ID:
      return { ...state, loading: true, farmId: action.payload }
    case LIST_FIELDS_SUCCESS:
      return { ...state, loading: false, fields: action.payload }
    case LIST_FIELDS_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case FETCH_ALL_FIELDS:
      return {
        ...state
      };
    case FETCH_ALL_FIELDS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALL_FIELDS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_ALL_FIELDS_SUCCESS:
      return {
        ...state,
        loading: false,
        allFields: action.payload
      };
    default:
      return { ...state }
  }
}
