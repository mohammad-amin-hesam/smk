import {
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS,
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  listWateringManagment: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS:
      return { ...state, loading: true, listWateringManagment: action.payload }
    case LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
