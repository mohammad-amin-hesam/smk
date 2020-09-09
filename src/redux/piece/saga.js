import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID } from "../../constants/actionTypes";

import { listPiecesSuccess, listPiecesFaild } from "./actions";
import API from "../../services/httpService";

const getPieceByUnitIdAndYearIdAsnync = (unitId, yearId) =>
  API.get(`pieces?unit_id[]=${unitId}&year_id=${yearId}`);

function* getPiecesByUnitIdAndYearId({ payload }) {
  const { unitId, yearId } = payload;
  try {
    const result = yield call(getPieceByUnitIdAndYearIdAsnync, unitId, yearId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listPiecesSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listPiecesFaild(error.message));
  }
}

export function* watchGetPieceByUnitIdAndYearId() {
  yield takeEvery(
    LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID,
    getPiecesByUnitIdAndYearId
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetPieceByUnitIdAndYearId)]);
}
