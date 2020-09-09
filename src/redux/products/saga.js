import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID } from "../../constants/actionTypes";
import {
  listProductsByPlantingYearIdAndPlantaionIdSuccess,
  listProductsByPlantingYearIdAndPlantaionIdFaild,
} from "./actions";
import API from "../../services/httpService";

const getProductsByPlantingYearIdAndPlantationIdAsync = (
  plantingYearId,
  plantationId
) => {
  return API.get(
    `produces?planting_year_id=${plantingYearId}&plantation_id=${plantationId}`
  );
};

function* getProductsByPlantingYearIdAndPlantationId({ payload }) {
  const { plantingYearId, plantationId } = payload;
  try {
    const result = yield call(
      getProductsByPlantingYearIdAndPlantationIdAsync,
      plantingYearId,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(listProductsByPlantingYearIdAndPlantaionIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listProductsByPlantingYearIdAndPlantaionIdFaild(error.message));
  }
}

export function* watchGetProductsByPlantingYearIdAndPlantationId() {
  yield takeEvery(
    LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID,
    getProductsByPlantingYearIdAndPlantationId
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetProductsByPlantingYearIdAndPlantationId)]);
}
