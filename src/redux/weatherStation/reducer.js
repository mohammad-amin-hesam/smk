import {
    FETCH_WEATHER_STATION,
    FETCH_WEATHER_STATION_START,
    FETCH_WEATHER_STATION_FAIL,
    FETCH_WEATHER_STATION_SUCCESS,
    SET_WEATHER_STATION_ACTIVE
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    active: false,
    stations: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_STATION:
            return{
                ...state
            };
        case FETCH_WEATHER_STATION_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_WEATHER_STATION_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_WEATHER_STATION_SUCCESS:
            return {
                ...state,
                stations: action.payload
            };
        case SET_WEATHER_STATION_ACTIVE:
            return {
                ...state,
                active: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;