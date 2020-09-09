import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import API from "../../services/httpService";
import {
  addNewScreenFail,
  addNewScreenStart,
  addNewScreenSuccess,
} from "./actions";
import { ADD_NEW_SCREEN } from "../../constants/actionTypes";

const postNewScreenResponse = (pId, title) => {
  let bodyFormData = new FormData();
  bodyFormData.append("title", title.title);
  return API.post(`/dashboard/${pId}/screens`, bodyFormData);
};

function* postAddNewScreen(action) {
  yield put(addNewScreenStart());
  try {
    const response = yield call(
      postNewScreenResponse,
      action.plantationId,
      action.title
    );
    yield put(addNewScreenSuccess(response));
  } catch (e) {
    yield put(addNewScreenFail(e));
  }
}

export function* watchGetDashboardOptions() {
  yield takeEvery(ADD_NEW_SCREEN, postAddNewScreen);
}

export default function* rootSaga() {
  yield all([fork(watchGetDashboardOptions)]);
}
