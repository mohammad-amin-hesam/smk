import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_SECTION_BY_FARM_ID } from "../../constants/actionTypes";

import { sectionSuccess, sectionFaild } from "./actions";
import API from "../../services/httpService";

const getSectionByFarmIdAndSpecialityAsnync = (id, fieldId) =>
  API.get(`sections?farm_id[]=${id}&speciality_id=${fieldId}`);

function* getSectionByFarmIdAndSpecialityId({ payload }) {
  const { id: farmSectionId, fieldId } = payload;
  try {
    const result = yield call(
      getSectionByFarmIdAndSpecialityAsnync,
      farmSectionId,
      fieldId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(sectionSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(sectionFaild(error.message));
  }
}

export function* watchGetSectionByFarmIdAndSpecialityId() {
  yield takeEvery(LIST_SECTION_BY_FARM_ID, getSectionByFarmIdAndSpecialityId);
}

export default function* rootSaga() {
  yield all([fork(watchGetSectionByFarmIdAndSpecialityId)]);
}
