import {
    FETCH_WEATHER_FORECAST,
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_FAIL,
    FETCH_WEATHER_FORECAST_SUCCESS
} from "../../constants/actionTypes";

export const fetchWeatherForecast = cityId => {
    return {
        type: FETCH_WEATHER_FORECAST,
        payload: cityId
    }
};

export const fetchWeatherForecastStart = () => {
    return {
        type: FETCH_WEATHER_FORECAST_START
    }
};

export const fetchWeatherForecastFail = err => {
    return {
        type: FETCH_WEATHER_FORECAST_FAIL,
        payload: err
    }
};

export const fetchWeatherForecastSuccess = forecast => {
    return {
        type: FETCH_WEATHER_FORECAST_SUCCESS,
        payload: forecast
    }
}