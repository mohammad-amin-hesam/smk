import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import API from "../../services/httpService";
import {
    fetchWeatherStationStart,
    fetchWeatherStationFail,
    fetchWeatherStationSuccess
} from "./actions";
import { FETCH_WEATHER_STATION } from "../../constants/actionTypes";

const getStations = () => {
    return API.get('/weather/stations');
};

function* getWeatherStations() {
    yield put(fetchWeatherStationStart());
    try {
        const response = yield call(getStations);
        yield put(fetchWeatherStationSuccess(response.data))
    } catch (e) {
        yield put(fetchWeatherStationFail(e))
    }
}

export function* watchGetWeatherStations() {
    yield takeEvery(FETCH_WEATHER_STATION, getWeatherStations)
}

export default function* rootSaga() {
    yield all([fork(watchGetWeatherStations)])
}