import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_FARMS_BY_COMPANY_ID,
  FETCH_FARMS,
} from "../../constants/actionTypes";

import {
  listFarmsSuccess,
  listFarmsFaild,
  listFarms,
  fetchFarmsStart,
  fetchFarmsFail,
  fetchFarmsSuccess,
} from "./actions";
import API from "../../services/httpService";

const getFarmsAsync = () => {
  return API.get("/farms");
};
const getFarmsByCompanyIdAsync = (id) => {
  return API.get(`farms?company_id[]=${id}`);
};

function* getFarmsByCompanyId({ payload }) {
  const { id: companyId } = payload;
  try {
    const result = yield call(getFarmsByCompanyIdAsync, companyId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listFarms(result.data));
  } catch (error) {
    // catch throw
    yield put(listFarmsFaild(error.message));
  }
}

export function* watchGetFarmsByCompanyId() {
  yield takeEvery(LIST_FARMS_BY_COMPANY_ID, getFarmsByCompanyId);
}
export default function* rootSaga() {
  yield all([fork(watchGetFarmsByCompanyId)]);
}
