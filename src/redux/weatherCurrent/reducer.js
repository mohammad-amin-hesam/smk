import {
    FETCH_WEATHER_CURRENT,
    FETCH_WEATHER_CURRENT_START,
    FETCH_WEATHER_CURRENT_FAIL,
    FETCH_WEATHER_CURRENT_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    current: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_CURRENT:
            return {
                ...state,
                plantationId: action.payload
            }
        case FETCH_WEATHER_CURRENT_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_WEATHER_CURRENT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FETCH_WEATHER_CURRENT_SUCCESS:
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;