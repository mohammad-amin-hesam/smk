import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_COMPANIES,
  LIST_COMPANIES_COORDS,
} from "../../constants/actionTypes";

import { listCompaniesSuccess, listCompaniesFaild } from "./actions";
import API from "../../services/httpService";

const getCompaniesAsync = (filter) => {
  return API.get("/companies");
};

function* getCompanies({ payload }) {
  const { filter } = payload;
  try {
    const result = yield call(getCompaniesAsync, filter);

    if (result.data.message) throw new Error(result.data.message);
    yield put(listCompaniesSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listCompaniesFaild(error.message));
  }
}

export function* watchGetCompanies() {
  yield takeEvery(LIST_COMPANIES, getCompanies);
}

export default function* rootSaga() {
  yield all([fork(watchGetCompanies)]);
}
