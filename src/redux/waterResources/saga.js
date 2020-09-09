import {all, call, fork, put, takeEvery} from 'redux-saga/effects'

import {
    fetchWaterResourceFail,
    fetchWaterResourceStart,
    fetchWaterResourceSuccess,
    fetchResourceDetailStart,
    fetchResourceDetailFail,
    fetchResourceDetailSuccess,
    fetchWaterResourceByPlantationStart,
    fetchWaterResourceByPlantationFail,
    fetchWaterResourceByPlantationSuccess,
    fetchWaterResourceUsageStart,
    fetchWaterResourceUsageSuccess,
    fetchWaterResourceUsageFail
} from "./actions";

import API from "../../services/httpService";
import {
    FETCH_WATER_RESOURCE,
    FETCH_RESOURCE_DETAIL,
    FETCH_WATER_RESOURCE_BY_PLANTATION,
    FETCH_WATER_RESOURCE_USAGE
} from "../../constants/actionTypes";

const getWaterResourceResponse = (plantationId, yearId) => {
    return API.get(`/water_resources?planting_year_id=${yearId}&plantation_id=${plantationId}`)
};

const getResourceDetailResponse = (resourceId, yearId) => {
    return API.get(`/water_resources/details?planting_year_id=${yearId}&water_resource_id=${resourceId}`)
};

const getWaterResourceByPlantationResponse = (plantationId, yearId) => {
    return API.get(`/water_resources/byPlantation?planting_year_id=${yearId}&plantation_id=${plantationId}`)
};

const getResourceUsageResponse = (resourceId, yearId) => {
    return API.get(`/irrigation_operations/water_resource_usage?planting_year_id=${yearId}&water_resource_id=${resourceId}`);
}

function* getWaterResourcesById(action) {
    yield put(fetchWaterResourceStart());
    try {
        const response = yield call(getWaterResourceResponse, action.pId, action.yId);
        yield put(fetchWaterResourceSuccess(response.data))
    } catch (e) {
        yield put(fetchWaterResourceFail(e));
    }
}

function* getResourceDetail(action) {
    yield put(fetchResourceDetailStart());
    try {
        const response = yield call (getResourceDetailResponse, action.resourceId, action.yId);
        yield put(fetchResourceDetailSuccess(response.data));
    } catch (e) {
        yield put(fetchResourceDetailFail(e));
    }
}

function* getWaterResourcesByPlantation (action) {
    yield put(fetchWaterResourceByPlantationStart());
    try {
        const response = yield call(getWaterResourceByPlantationResponse, action.pId, action.yId);
        yield put(fetchWaterResourceByPlantationSuccess(response.data))
    } catch (e) {
        yield put(fetchWaterResourceByPlantationFail(e));
    }
}

function* getWaterResourcesUsage (action) {
    yield put(fetchWaterResourceUsageStart());
    try {
        const response = yield call(getResourceUsageResponse, action.resourceId, action.yId);
        yield put(fetchWaterResourceUsageSuccess(response.data))
    } catch (e) {
        yield put(fetchWaterResourceUsageFail(e));
    }
}
export function* watchGetWaterResourcesById() {
    yield takeEvery(FETCH_WATER_RESOURCE, getWaterResourcesById);
    yield takeEvery(FETCH_RESOURCE_DETAIL, getResourceDetail);
    yield takeEvery(FETCH_WATER_RESOURCE_BY_PLANTATION, getWaterResourcesByPlantation);
    yield takeEvery(FETCH_WATER_RESOURCE_USAGE, getWaterResourcesUsage);
}

export default function* rootSaga() {
    yield all([fork(watchGetWaterResourcesById)]);
}