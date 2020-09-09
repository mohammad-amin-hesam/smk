import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_MACHINERY_BY_PLANTATION_ID } from "../../constants/actionTypes";

import { listmachinerySuccess, listmachineryFaild } from "./actions";
import API from "../../services/httpService";

const getMachineryByPlantingIdAsnync = (plantayionId) =>
  API.get(`machinery/${plantayionId}`);

function* getMachineryByPlantingId(action) {
  try {
    const result = yield call(getMachineryByPlantingIdAsnync, action.payload);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listmachinerySuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listmachineryFaild(error.message));
  }
}

export function* watchGetMachineryByPlantingId() {
  yield takeEvery(LIST_MACHINERY_BY_PLANTATION_ID, getMachineryByPlantingId);
}

export default function* rootSaga() {
  yield all([fork(watchGetMachineryByPlantingId)]);
}
