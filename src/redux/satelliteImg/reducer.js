import {
    FETCH_SATELLITE_IMG,
    FETCH_SATELLITE_IMG_START,
    FETCH_SATELLITE_IMG_FAIL,
    FETCH_SATELLITE_IMG_SUCCESS,
    SET_SATELLITE_IMG_ACTIVE,
    SET_SATELLITE_INDEX
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    active: false,
    satellites: [],
    index: ""
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_SATELLITE_IMG:
            return {
                ...state,
                plantationId: action.plantationId,
                state: action.state
            };
        case FETCH_SATELLITE_IMG_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SATELLITE_IMG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_SATELLITE_IMG_SUCCESS:
            return {
                ...state,
                satellites: action.payload,
                loading: false
            };
        case SET_SATELLITE_IMG_ACTIVE:
            return {
                ...state,
                active: action.payload
            };
        case SET_SATELLITE_INDEX:
            return {
                ...state,
                index: action.payload
            };
        default :
            return {
                ...state
            }
    }
};

export default reducer;