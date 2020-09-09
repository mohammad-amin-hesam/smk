import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_NOTIFICATION } from "../../constants/actionTypes";
import { listNotificationSuccess, listNotificationFaild } from "./actions";
import API from "../../services/httpService";

const getNotificationsAsync = () => {
  return API.get("/user/notification");
};

function* getNotifications() {
  try {
    const result = yield call(getNotificationsAsync, null);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listNotificationSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listNotificationFaild(error.message));
  }
}

export function* watchGetNotifications() {
  yield takeEvery(LIST_NOTIFICATION, getNotifications);
}

export default function* rootSaga() {
  yield all([fork(watchGetNotifications)]);
}
