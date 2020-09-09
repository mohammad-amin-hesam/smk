import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchSatImgStart,
  fetchSatImgFail,
  fetchSatImgSuccess,
} from "./actions";

import API from "../../services/httpService";
import { FETCH_SATELLITE_IMG } from "../../constants/actionTypes";

const getResponse = (state, pId) => {
  return API.get(`/${state}/satellite?${state}_id=${pId}`);
};

function* getSatImgByIdAndState(action) {
  yield put(fetchSatImgStart());
  try {
    const response = yield call(getResponse, action.state, action.plantationId);
    const fetchedSats = [];
    for (let key in response.data) {
      for (let id in response.data[key]) {
        fetchedSats.push({
          ...response.data[key][id],
        });
      }
    }
    const fetchedRequireData = [];
    fetchedSats.map((sat) => {
      fetchedRequireData.push({
        id: sat.id,
        img: sat.image,
        day: sat.image_day,
        bound: [
          [sat.bound.bottom_right.lat, sat.bound.bottom_right.lng],
          [sat.bound.top_left.lat, sat.bound.top_left.lng],
        ],
      });
    });
    yield put(fetchSatImgSuccess(fetchedRequireData));
  } catch (e) {
    yield put(fetchSatImgFail(e));
  }
}

export function* watchGetSatByIdAndState() {
  yield takeEvery(FETCH_SATELLITE_IMG, getSatImgByIdAndState);
}

export default function* rootSaga() {
  yield all([fork(watchGetSatByIdAndState)]);
}
