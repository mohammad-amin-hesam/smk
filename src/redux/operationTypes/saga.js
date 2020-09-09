import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    fetchOperationTypesFail,
    fetchOperationTypesStart,
    fetchOperationTypesSuccess
} from "./actions";

import API from "../../services/httpService";
import {FETCH_OPERATION_TYPES} from "../../constants/actionTypes";

const getResponse = () => {
    return API.get(`/operation_types`)
};

function* getOperationTypes() {
    yield put(fetchOperationTypesStart())
    try {
        const response = yield call(getResponse);
        yield put(fetchOperationTypesSuccess(response.data));
    } catch (e) {
        yield put(fetchOperationTypesFail(e))
    }
}

export function* watchGetOperationTypes() {
    yield takeEvery(FETCH_OPERATION_TYPES, getOperationTypes)
}

export default function* rootSaga() {
    yield all([fork(watchGetOperationTypes)])
}