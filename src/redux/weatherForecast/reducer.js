import {
    FETCH_WEATHER_FORECAST,
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_FAIL,
    FETCH_WEATHER_FORECAST_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    forecast: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_FORECAST:
            return {
                ...state,
                cityId: action.payload
            }
        case FETCH_WEATHER_FORECAST_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_WEATHER_FORECAST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FETCH_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;