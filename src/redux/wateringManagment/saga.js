import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID } from '../../constants/actionTypes'

import {
  getWateringManagmentByYearIdByPlantationIdSuccess,
  getWateringManagmentByYearIdByPlantationIdFaild
} from './actions'
import API from '../../services/httpService'

const listWateringManagmentByPlantingIdAndYerIdAsync = (yearId, plantationId) =>
  API.get(
    `irrigation_operations?planting_year_id=${yearId}&plantation_id=${plantationId}`
  )

/* getListWatering*/
function* getListWateringManagmentByPlantingIdAndYearId({ payload }) {
  const { yearId, plantationId } = payload
  try {
    const result = yield call(
      listWateringManagmentByPlantingIdAndYerIdAsync,
      yearId,
      plantationId
    )
    if (result.data.message) throw new Error(result.data.message)
    yield put(getWateringManagmentByYearIdByPlantationIdSuccess(result.data))
  } catch (error) {
    // catch throw
    yield put(getWateringManagmentByYearIdByPlantationIdFaild(error.message))
  }
}

export function* watchGetWateringManagmentByPlantingIdAndYearId() {
  yield takeEvery(
    LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID,
    getListWateringManagmentByPlantingIdAndYearId
  )
}

export default function* rootSaga() {
  yield all([fork(watchGetWateringManagmentByPlantingIdAndYearId)])
}
