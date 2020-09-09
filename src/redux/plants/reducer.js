import {
    LIST_PLANTS,
    LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID,
    LIST_PLANTS_SUCCESS,
    LIST_PLANTS_FAILD,
    ADD_PLANT,
    ADD_PLANT_START,
    ADD_PLANT_FAIL,
    ADD_PLANT_SUCCESS,
    SET_PLANT_FOR_EDIT,
    EDIT_PLANT,
    EDIT_PLANT_START,
    EDIT_PLANT_FAIL,
    EDIT_PLANT_SUCCESS,
    DELETE_PLANT_SHAPE_START,
    DELETE_PLANT_SHAPE_FAIL,
    DELETE_PLANT_SHAPE_SUCCESS, DELETE_PLANT_SHAPE
} from '../../constants/actionTypes'

const INIT_STATE = {
    loading: false,
    plants: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LIST_PLANTS:
            return {...state, loading: true, plants: action.payload}
        case LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID:
            return {...state, loading: true, ...action.payload}
        case LIST_PLANTS_SUCCESS:
            return {...state, loading: false, plants: action.payload}
        case LIST_PLANTS_FAILD:
            return {...state, loading: false, msg: action.payload}
        case ADD_PLANT:
            return {
                ...state
            };
        case ADD_PLANT_START:
            return {
                ...state,
                loading: true
            };
        case ADD_PLANT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
      case ADD_PLANT_SUCCESS:
            return {
              ...state,
              loading: false,
              addPlantResult: action.payload
            };
        case SET_PLANT_FOR_EDIT:
            return {
                ...state,
                plantForEdit: action.plantationId,
                patternForEdit: action.patternId
            };
        case EDIT_PLANT:
            return {
                ...state
            };
        case EDIT_PLANT_START:
            return {
                ...state,
                loading: true
            };
        case EDIT_PLANT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case EDIT_PLANT_SUCCESS:
            return {
                ...state,
                editPlantResult: action.payload,
                loading: false
            };
        case DELETE_PLANT_SHAPE:
            return {
                ...state
            };
        case DELETE_PLANT_SHAPE_START:
            return {
                ...state,
                loading: true
            };
        case DELETE_PLANT_SHAPE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_PLANT_SHAPE_SUCCESS:
            return {
                ...state,
                deletePlantShapeResult: action.payload,
                loading: false
            };
        default:
            return {...state}
    }
}
