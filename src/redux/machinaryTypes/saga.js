import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchMachineryTypesSuccess,
  fetchMachineryTypesStart,
  fetchMachineryTypesFail,
} from "./actions";

import API from "../../services/httpService";
import { FETCH_MACHINERY_TYPES } from "../../constants/actionTypes";

const getResponse = () => {
  return API.get(`/machinery_types/all`);
};

function* getMachineryTypes() {
  yield put(fetchMachineryTypesStart());
  try {
    const response = yield call(getResponse);
    yield put(fetchMachineryTypesSuccess(response.data));
  } catch (e) {
    yield put(fetchMachineryTypesFail(e));
  }
}

export function* watchGetMachinery() {
  yield takeEvery(FETCH_MACHINERY_TYPES, getMachineryTypes);
}

export default function* rootSaga() {
  yield all([fork(watchGetMachinery)]);
}
