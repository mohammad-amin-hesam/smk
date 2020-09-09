import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_TYPE_OPERATION,
} from "../../constants/actionTypes";

import {
  listExpertReportSuccess,
  listExpertReportFaild,
  listTypeOperationSuccess,
  listTypeOperationFaild,
} from "./actions";
import API from "../../services/httpService";

const listExpertReportByPlantingIdAndYerIdAsync = (yearId, plantationId) =>
  API.get(`/story/planting-year/${yearId}/plantation/${plantationId}`);

const listTypeOperetaionAsync = () => API.get(`/story-types`);

/* getListExpert*/
function* getListExpertReportByPlantingIdAndYearId({ payload }) {
  const { yearId, plantationId } = payload;
  try {
    const result = yield call(
      listExpertReportByPlantingIdAndYerIdAsync,
      yearId,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);
    yield put(listExpertReportSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listExpertReportFaild(error.message));
  }
}
/* getListTypeOpertion*/
function* getListTypeOperation() {
  try {
    const result = yield call(listTypeOperetaionAsync);
    if (result.data.message) throw new Error(result.data.message);
    yield put(listTypeOperationSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listTypeOperationFaild(error.message));
  }
}

export function* watchGetExpertReportByPlantingIdAndYearId() {
  yield takeEvery(
    LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID,
    getListExpertReportByPlantingIdAndYearId
  );
  yield takeEvery(LIST_TYPE_OPERATION, getListTypeOperation);
}

export default function* rootSaga() {
  yield all([fork(watchGetExpertReportByPlantingIdAndYearId)]);
}
