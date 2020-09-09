import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchWeatherForecastStart,
  fetchWeatherForecastFail,
  fetchWeatherForecastSuccess,
} from "./actions";
import API from "../../services/httpService";
import { FETCH_WEATHER_FORECAST } from "../../constants/actionTypes";

const getResponse = (cityId) => {
  return API.get(`/weather/forecasts/${cityId}`);
};

function* getWeatherForecastById(action) {
  yield put(fetchWeatherForecastStart());
  try {
    const response = yield call(getResponse, action.payload);
    yield put(fetchWeatherForecastSuccess(response.data.forecasts));
  } catch (e) {
    yield put(fetchWeatherForecastFail(e));
  }
}

export function* watchGetWeatherForecastById() {
  yield takeEvery(FETCH_WEATHER_FORECAST, getWeatherForecastById);
}

export default function* rootSaga() {
  yield all([fork(watchGetWeatherForecastById)]);
}
