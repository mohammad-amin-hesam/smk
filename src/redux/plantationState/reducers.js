import {
  SET_PLANTATION_STATE,
  GET_PLANTATION_STATE,
  SET_PATTERN_PLANTING,
    SET_PLANTATION_DIRECTION
} from '../../constants/actionTypes'


const initialState = {
    plantationState: "",
    plantationId: 0,
    yearId: 5,
  plantationDirection: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTATION_STATE:
      return {
        ...state,
        plantationState: action.plantationState,
        plantationId: action.plantationId,
        yearId: action.yearId,
      };
    case GET_PLANTATION_STATE:
      return {
        ...state
      };
    case SET_PATTERN_PLANTING :
      return {
        ...state,
        patternPlanting: action.payload
      };
    case SET_PLANTATION_DIRECTION:
      return {
        ...state,
        plantationDirection: action.payload
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer
