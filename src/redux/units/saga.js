import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_UNITS_BY_SECTION_ID } from "../../constants/actionTypes";

import { listUnitsSuccess, listUnitsFaild } from "./actions";
import API from "../../services/httpService";

const getFarmsAsync = () => {
  return API.get("/units");
};
const getUnitsBySectionIdAsync = (sectionId) => {
  return API.get(`units?section_id[]=${sectionId}`);
};

function* getUnitsBySectionId({ payload }) {
  const { sectionId } = payload;
  try {
    const result = yield call(getUnitsBySectionIdAsync, sectionId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listUnitsSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listUnitsFaild(error.message));
  }
}

export function* watchGetUnitsBySectionId() {
  yield takeEvery(LIST_UNITS_BY_SECTION_ID, getUnitsBySectionId);
}

export default function* rootSaga() {
  yield all([fork(watchGetUnitsBySectionId)]);
}
