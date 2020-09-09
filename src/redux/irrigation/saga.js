import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  fetchIrrigationOperationsStart,
  fetchIrrigationOperationsFail,
  fetchIrrigationOperationsSuccess,
  postIrrigationOperationStart,
  postIrrigationOperationFail,
  // postIrrigationOperationSuccess,
  postIrrigationOperationCheckProofStart,
  postIrrigationOperationCheckProofFail,
  postIrrigationOperationCheckProofSuccess,
  postIrrigationOperationSuccess,
} from "./actions";

import API from "../../services/httpService";
import {
  FETCH_IRRIGATION_OPERATIONS,
  POST_IRRIGATION_OPERATIONS,
  POST_IRRIGATION_OPERATIONS_CHECK_PROOF,
} from "../../constants/actionTypes";

const getIrrigationOperationsResponse = (yearId, plantationId, patternId) => {
  return API.get(
    `/irrigation_operations/requirements?planting_year_id=${yearId}&plantation_id=$plantationId${plantationId}&pattern_planting_id=${patternId}`
  );
};

const postIrrigationOperationResponse = (postData) => {
  return API.post(`/irrigation_operations`, postData);
};
const postIrrigationOperationCheckProofResponse = (postData) => {
  return API.post(`irrigation_operations/check_proof`, postData);
};

function* getIrrigationOperations(action) {
  yield put(fetchIrrigationOperationsStart());
  try {
    const response = yield call(
      getIrrigationOperationsResponse,
      action.yearId,
      action.plantationId,
      action.patternId
    );
    yield put(fetchIrrigationOperationsSuccess(response.data));
  } catch (e) {
    yield put(fetchIrrigationOperationsFail(e));
  }
}

function* postIrrigationOperation(action) {
  yield put(postIrrigationOperationStart());
  try {
    const response = yield call(
      postIrrigationOperationResponse,
      action.payload
    );
    yield put(postIrrigationOperationSuccess(response.data));
  } catch (e) {
    yield put(postIrrigationOperationFail(e));
  }
}

function* postIrrigationOperationCheckProof(action) {
  yield put(postIrrigationOperationCheckProofStart());
  try {
    const response = yield call(
      postIrrigationOperationCheckProofResponse,
      action.payload
    );
    yield put(postIrrigationOperationCheckProofSuccess(response.data));
  } catch (e) {
    yield put(postIrrigationOperationCheckProofFail(e));
  }
}

export function* watchGetIrrigationOperations() {
  yield takeEvery(FETCH_IRRIGATION_OPERATIONS, getIrrigationOperations);
  yield takeEvery(POST_IRRIGATION_OPERATIONS, postIrrigationOperation);
  yield takeEvery(
    POST_IRRIGATION_OPERATIONS_CHECK_PROOF,
    postIrrigationOperationCheckProof
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetIrrigationOperations)]);
}
