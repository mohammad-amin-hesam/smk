import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchSoilAnalysesStart,
  fetchSoilAnalysesFail,
  fetchSoilAnalysesSuccess,
  addEditSoilAnalysesStart,
  addEditSoilAnalysesFail,
  addEditSoilAnalysesSuccess,
  submitSoilAnalysesStart,
  submitSoilAnalysesFail,
  submitSoilAnalysesSuccess,
  deleteSoilAnalysesFail,
  deleteSoilAnalysesStart,
  deleteSoilAnalysesSuccess,
} from "./actions";
import API from "../../services/httpService";
import {
  FETCH_SOIL_ANALYSES,
  ADD_EDIT_SOIL_ANALYSES,
  SUBMIT_SOIL_ANALYSES,
  DELETE_SOIL_ANALYSES,
} from "../../constants/actionTypes";

const getResponse = (pId) => {
  return API.get(`/soil_analyses?plantation_id=${pId}`);
};

const postAddEditResponse = (analyseId, postData) => {
  let bodyFormData = new FormData();
  for (let key in postData) {
    bodyFormData.append(key, postData[key]);
  }
  return API.post(`/soil_analyses/update`, bodyFormData);
};

const postSubmitSoilAnalysesResponse = (postData) => {
  let bodyFormData = new FormData();
  for (let key in postData) {
    bodyFormData.append(key, postData[key]);
  }
  return API.post(`/soil_analyses`, postData);
};

const deleteSoilAnalysesResponse = (testId) => {
  return API.delete(`/soil_analyses/${testId}`);
};

function* getSoilAnalyses(action) {
  yield put(fetchSoilAnalysesStart());
  try {
    const response = yield call(getResponse, action.payload);
    const fetchedSoilAnalyses = [];
    for (let key in response.data) {
      fetchedSoilAnalyses.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(fetchSoilAnalysesSuccess(fetchedSoilAnalyses));
  } catch (e) {
    yield put(fetchSoilAnalysesFail(e));
  }
}

function* addEditSoilAnalyses(action) {
  yield put(addEditSoilAnalysesStart());
  try {
    const response = yield call(
      postAddEditResponse,
      action.testId,
      action.postData
    );
    yield put(addEditSoilAnalysesSuccess(response.data));
  } catch (e) {
    yield put(addEditSoilAnalysesFail(e));
  }
}

function* submitSoilAnalyses(action) {
  yield put(submitSoilAnalysesStart());
  try {
    const response = yield call(postSubmitSoilAnalysesResponse, action.payload);
    yield put(submitSoilAnalysesSuccess(response.data));
  } catch (e) {
    yield put(submitSoilAnalysesFail(e));
  }
}

function* deleteSoilAnalyses(action) {
  yield put(deleteSoilAnalysesStart());
  try {
    const response = yield call(deleteSoilAnalysesResponse, action.payload);
    yield put(deleteSoilAnalysesSuccess(response.data));
  } catch (e) {
    yield put(deleteSoilAnalysesFail(e));
  }
}

export function* watchGetSoilAnalyses() {
  yield takeEvery(FETCH_SOIL_ANALYSES, getSoilAnalyses);
  yield takeEvery(ADD_EDIT_SOIL_ANALYSES, addEditSoilAnalyses);
  yield takeEvery(SUBMIT_SOIL_ANALYSES, submitSoilAnalyses);
  yield takeEvery(DELETE_SOIL_ANALYSES, deleteSoilAnalyses);
}

export default function* rootSaga() {
  yield all([fork(watchGetSoilAnalyses)]);
}
