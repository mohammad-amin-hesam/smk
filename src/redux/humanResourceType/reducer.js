import {
  FETCH_HUMAN_RESOURCE_TYPES,
  FETCH_HUMAN_RESOURCE_TYPES_START,
  FETCH_HUMAN_RESOURCE_TYPES_FAIL,
  FETCH_HUMAN_RESOURCE_TYPES_SUCCESS,
  FETCH_HUMAN_RESOURCE_BY_TYPE,
  FETCH_HUMAN_RESOURCE_BY_TYPE_START,
  FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL,
  FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS,
  LIST_OPERATION_REPORTـSELECTED_ITEM
} from '../../constants/actionTypes'

const initState = {
  loading: false,
  types: [],
  listOperationSelectedItem: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_HUMAN_RESOURCE_TYPES:
      return {
        ...state,
        loading: true
      }
    case FETCH_HUMAN_RESOURCE_TYPES_START:
      return {
        ...state,
        loading: true
      }
    case LIST_OPERATION_REPORTـSELECTED_ITEM:
      return {
        ...state,
        listOperationSelectedItem: action.payload
      }

    case FETCH_HUMAN_RESOURCE_TYPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_HUMAN_RESOURCE_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        types: action.payload
      }
    case FETCH_HUMAN_RESOURCE_BY_TYPE:
      return {
        ...state
      }
    case FETCH_HUMAN_RESOURCE_BY_TYPE_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        humanResourcesByType: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
