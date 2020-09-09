import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchCropsFail,
  fetchCropsStart,
  fetchCropsSuccess,
  fetchCropsFailById,
  fetchCropsStartById,
  fetchCropsSuccessById,
  fetchVarietiesByIdStart,
  fetchVarietiesByIdFail,
  fetchVarietiesByIdSuccess,
} from "./actions";
import API from "../../services/httpService";
import {
  FETCH_CROPS,
  FETCH_CROPS_BY_ID,
  FETCH_VARIETIES_BY_ID,
} from "../../constants/actionTypes";

const getResponse = () => {
  return API.get(`/crops`);
};

const getResponseById = (id) => {
  return API.get(`/crops/${id}`);
};

const getVarietiesByIdResponse = (cropId) => {
  return API.get(`/varieties?crop_id=${cropId}`);
};

function* getCrops() {
  yield put(fetchCropsStart());
  try {
    const response = yield call(getResponse);

    const fetchedCrops = [];
    for (let key in response.data) {
      fetchedCrops.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(fetchCropsSuccess(fetchedCrops));
  } catch (e) {
    yield put(fetchCropsFail(e));
  }
}

function* getCropsById(action) {
  yield put(fetchCropsStartById());
  try {
    const response = yield call(getResponseById, action.payload);
    yield put(fetchCropsSuccessById(response.data));
  } catch (e) {
    yield put(fetchCropsFailById(e));
  }
}

function* getVarietiesById(action) {
  yield put(fetchVarietiesByIdStart());
  try {
    const response = yield call(getVarietiesByIdResponse, action.payload);
    yield put(fetchVarietiesByIdSuccess(response.data));
  } catch (e) {
    yield put(fetchVarietiesByIdFail(e));
  }
}
export function* watchGetCrops() {
  yield takeEvery(FETCH_CROPS, getCrops);
  yield takeEvery(FETCH_CROPS_BY_ID, getCropsById);
  yield takeEvery(FETCH_VARIETIES_BY_ID, getVarietiesById);
}

export default function* rootSaga() {
  yield all([fork(watchGetCrops)]);
}
