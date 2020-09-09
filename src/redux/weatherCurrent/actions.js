import {
    FETCH_WEATHER_CURRENT,
    FETCH_WEATHER_CURRENT_START,
    FETCH_WEATHER_CURRENT_FAIL,
    FETCH_WEATHER_CURRENT_SUCCESS
} from "../../constants/actionTypes";

export const fetchWeatherCurrent = plantationId => {
    return {
        type: FETCH_WEATHER_CURRENT,
        payload: plantationId
    }
};

export const fetchWeatherCurrentStart = () => {
    return {
        type: FETCH_WEATHER_CURRENT_START
    }
};

export const fetchWeatherCurrentFail = err => {
    return {
        type: FETCH_WEATHER_CURRENT_FAIL,
        payload: err
    }
};

export const fetchWeatherCurrentSuccess = current => {
    return {
        type: FETCH_WEATHER_CURRENT_SUCCESS,
        payload: current
    }
}