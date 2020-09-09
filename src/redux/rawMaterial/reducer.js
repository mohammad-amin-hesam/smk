import {
    FETCH_RAW_MATERIAL,
    FETCH_RAW_MATERIAL_START,
    FETCH_RAW_MATERIAL_FAIL,
    FETCH_RAW_MATERIAL_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    material: [],
    plantationId: 0
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_RAW_MATERIAL:
            return {
                ...state,
                plantationId: action.payload
            };
        case FETCH_RAW_MATERIAL_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_RAW_MATERIAL_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case FETCH_RAW_MATERIAL_SUCCESS:
            return {
                ...state,
                material: action.payload,
                loading: false
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;