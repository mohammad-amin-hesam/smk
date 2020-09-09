import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    fetchWeatherCurrentStart,
    fetchWeatherCurrentFail,
    fetchWeatherCurrentSuccess
} from "./actions";
import API from "../../services/httpService";
import {FETCH_WEATHER_CURRENT} from "../../constants/actionTypes";

const getResponse = id => {
    return API.get(`/weather/current/${id}`)
}

function* getWeatherCurrentById(action) {
    yield put(fetchWeatherCurrentStart());
    try {
        const response = yield call(getResponse, action.payload);
        const fetchedWeatherCurrent = [];
        for (let key in response.data) {
            fetchedWeatherCurrent.push({
                ...response.data[key],
                id: key
            })
        }
        yield put(fetchWeatherCurrentSuccess(fetchedWeatherCurrent))
    } catch (e) {
        yield put(fetchWeatherCurrentFail(e))
    }
}

export function* watchGetWeatherCurrentById() {
    yield takeEvery(FETCH_WEATHER_CURRENT, getWeatherCurrentById)
}

export default function* rootSaga() {
    yield all([fork(watchGetWeatherCurrentById)])
}