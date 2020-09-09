import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    fetchRawMaterialStart,
    fetchRawMaterialFail,
    fetchRawMaterialSuccess
} from "./actions";

import API from "../../services/httpService";
import {FETCH_RAW_MATERIAL} from "../../constants/actionTypes";

const getResponse = id => {
    return API.get(`/storage/plantation/${id}`)
};

function* getRawMaterialByPlantationId(action) {
    yield put(fetchRawMaterialStart());
    try {
        const response = yield call(getResponse, action.payload);
        const fetchedRawMaterial = [];
        for (let key in response.data) {
            fetchedRawMaterial.push({
                ...response.data[key],
                id: key
            })
        }
        yield put(fetchRawMaterialSuccess(fetchedRawMaterial));
    } catch (e) {
        yield (put(fetchRawMaterialFail(e)))
    }
}

export function* watchGetRawMaterialByPlantationId() {
    yield takeEvery(FETCH_RAW_MATERIAL, getRawMaterialByPlantationId)
}

export default function* rootSaga() {
    yield all([fork(watchGetRawMaterialByPlantationId)])
}