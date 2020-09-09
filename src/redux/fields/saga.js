import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_FIELDS_BY_FARM_ID,
  FETCH_ALL_FIELDS,
} from "../../constants/actionTypes";

import {
  listFieldsSuccess,
  listFieldsFaild,
  fetchAllFieldsFail,
  fetchAllFieldsStart,
  fetchAllFieldsSuccess,
} from "./actions";
import API from "../../services/httpService";

const getFieldsAsync = () => {
  return API.get("/fields");
};
const getFieldsByFarmIdAsync = (id) => {
  return API.get(`fields?farm_id[]=${id}`);
};

function* getFieldsByFarmId({ payload }) {
  const { id: farmId } = payload;
  try {
    const result = yield call(getFieldsByFarmIdAsync, farmId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listFieldsSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listFieldsFaild(error.message));
  }
}

function* getAllFields(action) {
  yield put(fetchAllFieldsStart());
  try {
    const response = yield call(getFieldsAsync);
    const fetchedArray = [];
    for (let key in response.data) {
      fetchedArray.push({
        ...response.data[key],
      });
    }
    yield put(fetchAllFieldsSuccess(fetchedArray));
  } catch (e) {
    yield put(fetchAllFieldsStart(e));
  }
}

export function* watchGetFieldsByFarmId() {
  yield takeEvery(LIST_FIELDS_BY_FARM_ID, getFieldsByFarmId);
  yield takeEvery(FETCH_ALL_FIELDS, getAllFields);
}

export default function* rootSaga() {
  yield all([fork(watchGetFieldsByFarmId)]);
}
