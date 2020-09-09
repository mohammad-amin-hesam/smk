import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID } from "../../constants/actionTypes";

import { listHumanReportSuccess, listHumanReportFaild } from "./actions";
import API from "../../services/httpService";

const listHumanReportByPlantingIdAndYerIdAsync = (yearId, plantationId) =>
  API.get(
    `/humanresource/list?year_id=${yearId}&plantation_id=${plantationId}`
  );

function* getListHumanReportByPlantingIdAndYearId({ payload }) {
  const { yearId, plantationId } = payload;
  try {
    const result = yield call(
      listHumanReportByPlantingIdAndYerIdAsync,
      yearId,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);
    yield put(listHumanReportSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listHumanReportFaild(error.message));
  }
}

export function* watchGetHumanReportByPlantingIdAndYearId() {
  yield takeEvery(
    LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID,
    getListHumanReportByPlantingIdAndYearId
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetHumanReportByPlantingIdAndYearId)]);
}
