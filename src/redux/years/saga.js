import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { LIST_YEARS } from '../../constants/actionTypes'

import { listYearsSuccess, listYearsFaild } from './actions'
import API from '../../services/httpService'

const getYearsAsync = () => API.get('/years')

function* getYears({ payload }) {
  try {
    const result = yield call(getYearsAsync, null)

    if (result.data.message) throw new Error(result.data.message)

    yield put(listYearsSuccess(result.data))
  } catch (error) {
    // catch throw
    yield put(listYearsFaild(error.message))
  }
}

export function* watchGetYears() {
  yield takeEvery(LIST_YEARS, getYears)
}

export default function* rootSaga() {
  yield all([fork(watchGetYears)])
}
