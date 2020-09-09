import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_OPERATION_REPORT } from "../../constants/actionTypes";
import { getOperationReportSuccess, getOperationReportFaild } from "./actions";
import API from "../../services/httpService";

// getOperationReport
const getOperationReportAsync = (params = {}) => {
  return API.get(`operation/list`, {
    params,
  });
};

function* getOperationReport({ payload }) {
  const { selectedItems } = payload;
  try {
    const result = yield call(getOperationReportAsync, selectedItems);
    if (result.data.message) throw new Error(result.data.message);

    yield put(getOperationReportSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getOperationReportFaild(error.message));
  }
}

export function* watchGetOperationReport() {
  yield takeEvery(LIST_OPERATION_REPORT, getOperationReport);
}

export default function* rootSaga() {
  yield all([fork(watchGetOperationReport)]);
}
