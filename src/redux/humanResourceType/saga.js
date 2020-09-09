import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    fetchHumanResourcesTypesSuccess,
    fetchHumanResourcesTypesStart,
    fetchHumanResourcesTypesFail,
    fetchHumanResourceByTypeStart,
    fetchHumanResourceByTypeFail,
    fetchHumanResourceByTypeSuccess
} from "./actions";

import API from "../../services/httpService";
import {FETCH_HUMAN_RESOURCE_TYPES, FETCH_HUMAN_RESOURCE_BY_TYPE} from "../../constants/actionTypes";

const getResponse = () => {
    return API.get(`/humanresource/type`)
};

const getHumanResourcesByTypeResponse = (pId, yId, typeId) => {
    return API.get(`/humanresource/list?plantation_id=${pId}&year_id=${yId}&type_id=${typeId}`);
};

function* getHumanResourcesTypes() {
    yield put(fetchHumanResourcesTypesStart());
    try {
        const response = yield call(getResponse);
        yield put(fetchHumanResourcesTypesSuccess(response.data))
    } catch (e) {
        yield put(fetchHumanResourcesTypesFail(e))
    }
}

function* getHumanResourcesByType(action) {
    yield put(fetchHumanResourceByTypeStart());
    try {
        const response = yield call(getHumanResourcesByTypeResponse, action.plantationId, action.yearId, action.typeId);
        const fetchedResources = [];
        for(let key in response.data) {
            fetchedResources.push({
                ...response.data[key]
            })
        }
        yield put(fetchHumanResourceByTypeSuccess(fetchedResources));
    } catch (e) {
        yield put(fetchHumanResourceByTypeFail(e));
    }
}

export function* watchGetHumanResourcesTypes() {
    yield takeEvery(FETCH_HUMAN_RESOURCE_TYPES, getHumanResourcesTypes);
    yield takeEvery(FETCH_HUMAN_RESOURCE_BY_TYPE, getHumanResourcesByType);
}

export default function* rootSaga() {
    yield all([fork(watchGetHumanResourcesTypes)])
}