import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import {
    LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID,
    ADD_PLANT,
    EDIT_PLANT, DELETE_PLANT_SHAPE
} from '../../constants/actionTypes'

import {
    listPlantsSuccess,
    listPlantsFaild,
    addPlantFail,
    addPlantStart,
    addPlantSuccess,
    editPlantStart,
    editPlantFail,
    editPlantSuccess,
    deletePlantShapeStart,
    deletePlantShapeFail,
    deletePlantShapeSuccess
} from './actions'
import API from '../../services/httpService'

const getPlantsByPieceIdAndYearIdAsnync = (pieceId, yearId) =>
    API.get(`plants?piece_id[]=${pieceId}&year_id=${yearId}`)

const postAddPlantsResponse = postData => {
    let bodyFormData = new FormData();
    for (let key in postData) {
        bodyFormData.append(key, postData[key]);
    }
    return API.post(`/plants`, bodyFormData)
};

const editPlantResponse = (pId, postData) => {
    let bodyFormData = new FormData();
    for (let key in postData) {
        bodyFormData.append(key, postData[key]);
    }
    return API.post(`/plants/${pId}`, bodyFormData)
};

const deletePlantShapeResponse = patternId => {
    return API.delete(`/plants/delete_shape/${patternId}`)
};

function* getPlantsByPiecesIdAndYearId({payload}) {
    const {pieceId, yearId} = payload
    try {
        const result = yield call(getPlantsByPieceIdAndYearIdAsnync, pieceId, yearId)

        if (result.data.message) throw new Error(result.data.message)

        yield put(listPlantsSuccess(result.data))
    } catch (error) {
        // catch throw
        yield put(listPlantsFaild(error.message))
    }
}

function* postAddPlants(action) {
  yield put(addPlantStart());
  try {
    const response = yield call(postAddPlantsResponse, action.payload);
    yield put(addPlantSuccess(response.data));
  } catch (e) {
    yield put(addPlantFail(e));
  }
}

function* postEditPlants (action) {
    yield put(editPlantStart());
    try {
        const response = yield call(editPlantResponse, action.patternId, action.postData);
        yield put(editPlantSuccess(response.data));
    } catch (e) {
        yield put(editPlantFail(e));
    }
}

function* deletePlantShape(action) {
    yield put(deletePlantShapeStart());
    try {
        const response = yield call(deletePlantShapeResponse, action.payload);
        yield put(deletePlantShapeSuccess(response.data));
    } catch (e) {
        yield put(deletePlantShapeFail(e));
    }
}

export function* watchGetPlantsByPieceIdAndYearId() {
    yield takeEvery(
        LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID,
        getPlantsByPiecesIdAndYearId
    );
    yield takeEvery(ADD_PLANT, postAddPlants);
    yield takeEvery(EDIT_PLANT, postEditPlants);
    yield takeEvery(DELETE_PLANT_SHAPE, deletePlantShape);
}

export default function* rootSaga() {
    yield all([fork(watchGetPlantsByPieceIdAndYearId)])
}
