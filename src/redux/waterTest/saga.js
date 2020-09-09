import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    fetchWaterTestStart,
    fetchWaterTestFail,
    fetchWaterTestSuccess,
    addEditWaterTestStart,
    addEditWaterTestFail,
    addEditWaterTestSuccess,
    submitWaterTestStart,
    submitWaterTestFail,
    submitWaterTestSuccess,
    deleteWaterTestFail,
    deleteWaterTestStart,
    deleteWaterTestSuccess,
    fetchWaterTestByResourceStart,
    fetchWaterTestByResourceFail,
    fetchWaterTestByResourceSuccess
} from "./actions";
import API from "../../services/httpService";
import {
    FETCH_WATER_TEST,
    ADD_EDIT_WATER_TEST,
    SUBMIT_WATER_TEST,
    DELETE_WATER_TEST,
    FETCH_WATER_TEST_BY_RESOURCE
} from "../../constants/actionTypes";

const getResponse = (pId, yId) => {
    return API.get(`/water-analyses/planting-year/${yId}/plantation/${pId}`);
};

const postAddEditResponse = (testId, postData) => {
    let bodyFormData = new FormData();
    for( let key in postData) {
        bodyFormData.append(key, postData[key]);
    }
    return API.post(`/water_analyses/${testId}`, bodyFormData);
};

const submitWaterTestResponse = (postData) => {
    let bodyFormData = new FormData();
    for( let key in postData) {
        bodyFormData.append(key, postData[key]);
    }
    return API.post(`/water_analyses`, bodyFormData);
};

const deleteWaterTestResponse = testId => {
    return API.delete(`/water_analyses/${testId}`)
};

const getWaterTestByResourceResponse = resourceId => {
    return API.get(`/water-analyses/water-resource/${resourceId}`);
};

function* getWaterTests(action) {
    yield put(fetchWaterTestStart());
    try {
        const response = yield call(getResponse, action.plantationId, action.yearId);
        const fetchedWaterTests = [];
        for (let key in response.data) {
            fetchedWaterTests.push({
                ...response.data[key],
                id: key
            })
        }
        yield put(fetchWaterTestSuccess(fetchedWaterTests));
    } catch (e) {
        yield put(fetchWaterTestFail(e));
    }
}

function* addEditWaterTest(action) {
    yield put(addEditWaterTestStart());
    try {
        const response = yield call(postAddEditResponse, action.testId, action.postData);
        yield put(addEditWaterTestSuccess(response.data));
    } catch (e) {
        yield put(addEditWaterTestFail(e));
    }
}

function* postSubmitWaterTest(action) {
    yield put(submitWaterTestStart());
    try {
        const response = yield call(submitWaterTestResponse, action.postData);
        yield put(submitWaterTestSuccess(response));
    } catch (e) {
        yield put(submitWaterTestFail(e));
    }
}

function* deleteWaterTest(action) {
    yield put(deleteWaterTestStart());
    try {
        const response = yield call(deleteWaterTestResponse, action.payload);
        yield put(deleteWaterTestSuccess(response));
    } catch (e) {
        yield put(deleteWaterTestFail(e));
    }
}

function* getWaterTestByResource(action) {
    yield put(fetchWaterTestByResourceStart());
    try {
        const response = yield call(getWaterTestByResourceResponse, action.resourceId);
        const fetchedWaterTests = [];
        for (let key in response.data) {
            fetchedWaterTests.push({
                ...response.data[key],
                id: key
            })
        }
        yield put(fetchWaterTestByResourceSuccess(fetchedWaterTests));
    } catch (e) {
        yield put(fetchWaterTestByResourceFail(e));
    }
}

export function* watchGetWaterTests() {
    yield takeEvery(FETCH_WATER_TEST, getWaterTests);
    yield takeEvery(ADD_EDIT_WATER_TEST, addEditWaterTest);
    yield takeEvery(SUBMIT_WATER_TEST, postSubmitWaterTest);
    yield takeEvery(DELETE_WATER_TEST, deleteWaterTest);
    yield takeEvery(FETCH_WATER_TEST_BY_RESOURCE, getWaterTestByResource);
}

export default function* rootSaga() {
    yield all([fork(watchGetWaterTests)]);
}