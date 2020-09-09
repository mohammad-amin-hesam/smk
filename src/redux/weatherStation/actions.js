import {
    FETCH_WEATHER_STATION,
    FETCH_WEATHER_STATION_START,
    FETCH_WEATHER_STATION_FAIL,
    FETCH_WEATHER_STATION_SUCCESS,
    SET_WEATHER_STATION_ACTIVE
} from "../../constants/actionTypes";

export const fetchWeatherStation = () => {
    return {
        type: FETCH_WEATHER_STATION
    }
};

export const fetchWeatherStationStart = () => {
    return {
        type: FETCH_WEATHER_STATION_START
    }
};

export const fetchWeatherStationFail = err => {
    return {
        type: FETCH_WEATHER_STATION_FAIL,
        payload: err
    }
};

export const fetchWeatherStationSuccess = stations => {
    return {
        type: FETCH_WEATHER_STATION_SUCCESS,
        payload: stations
    }
};

export const setWeatherStationActive = active => {
    return {
        type: SET_WEATHER_STATION_ACTIVE,
        payload: active
    }
};