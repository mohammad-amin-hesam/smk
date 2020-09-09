import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE,
  Exit_PlantationId_BY_RAW_MATERIAL_ID,
  LIST_MACHINERY_BY_PARENT_ID,
  LIST_MACHINERY_TYPES_BY_PARENT_ID,
  LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id,
} from "../../constants/actionTypes";
import {
  getOperationByPlantationIdByOperationTypeFaild,
  getOperationByPlantationIdByOperationTypeSuccess,
  listOperationTypesByPlantationIdSuccess,
  listOperationTypesByPlantationIdFaild,
  listFinancialSystemWarehouseSuccess,
  listFinancialSystemWarehouseFaild,
  getExitPlantationIdByRawMaterialIdFaild,
  getExitPlantationIdByRawMaterialIdSuccess,
  getListMachineryByParentIdSuccess,
  getListMachineryByParentIdFaild,
  getListMachineryTypeByParentIdSuccess,
  getListMachineryTypeByParentIdFaild,
  getlistMachineryByPlantationIdBYParentIdSuccess,
  getlistMachineryByPlantationIdBYParentIdFaild,
} from "./actions";

import API from "../../services/httpService";

const geOperationTypeByPlantationIdByOperationTypeAsync = (
  plantationId,
  operationTypes
) => {
  return API.get(`plantation/${plantationId}/operationTypes/${operationTypes}`);
};
const geOperationTypeByPlantationIdAsync = (plantationId) => {
  return API.get(`plantation/${plantationId}/operationTypes`);
};
const getFinancialSystemWarehouseByPlantionIdAsync = (plantationId) => {
  return API.get(`asp/storage/rm/?plantation_id=${plantationId}`);
};
const getExitPlantationIdByRawMaterialIdAsync = (
  plantationId,
  rawMaterialId
) => {
  return API.get(
    `asp/storage/exits?plantation_id=${plantationId}&raw_material_id=${rawMaterialId}`
  );
};

// API MACHINERY
const getListMachineryByParentIdAsync = () => {
  return API.get(`machinery_types/?parent_id=`);
};
const getListMachineryTypeByParentIdAsync = (MachineryId) => {
  return API.get(`machinery_types/?parent_id=${MachineryId}`);
};
const getListMachineryByParentIdByPlantaionIdAsync = (
  plantationId,
  MachineryId
) => {
  return API.get(`machinery/${plantationId}/${MachineryId}`);
};

function* geOperationTypeByPlantationIdByOperationType({ payload }) {
  const { plantationId, operationTypes } = payload;
  try {
    const result = yield call(
      geOperationTypeByPlantationIdByOperationTypeAsync,
      plantationId,
      operationTypes
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(getOperationByPlantationIdByOperationTypeSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getOperationByPlantationIdByOperationTypeFaild(error.message));
  }
}

function* geOperationTypeByPlantationId({ payload }) {
  const { plantationId } = payload;
  try {
    const result = yield call(geOperationTypeByPlantationIdAsync, plantationId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(listOperationTypesByPlantationIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listOperationTypesByPlantationIdFaild(error.message));
  }
}

/* exitByPlantationIdByRawMaterialId */
function* getExitByPlantationIdByRawMatrialId({ payload }) {
  const { plantationId, rawMaterialId } = payload;
  try {
    const result = yield call(
      getExitPlantationIdByRawMaterialIdAsync,
      plantationId,
      rawMaterialId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(getExitPlantationIdByRawMaterialIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getExitPlantationIdByRawMaterialIdFaild(error.message));
  }
}

/* FinancialSystemWarehouse */
function* getFinancialSystemWarehouseByPlantainId({ payload }) {
  const { plantationId } = payload;
  try {
    const result = yield call(
      getFinancialSystemWarehouseByPlantionIdAsync,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(listFinancialSystemWarehouseSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listFinancialSystemWarehouseFaild(error.message));
  }
}

// Machinery
function* getListMachineryByParenId() {
  try {
    const result = yield call(getListMachineryByParentIdAsync);

    if (result.data.message) throw new Error(result.data.message);

    yield put(getListMachineryByParentIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getListMachineryByParentIdFaild(error.message));
  }
}
function* getListMachineryTypeByParenId({ payload }) {
  const { machineryId } = payload;
  try {
    const result = yield call(getListMachineryTypeByParentIdAsync, machineryId);

    if (result.data.message) throw new Error(result.data.message);
    yield put(getListMachineryTypeByParentIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getListMachineryTypeByParentIdFaild(error.message));
  }
}

function* getListMachineryTypeByParenIdByPlantationId({ payload }) {
  const { plantationId, machineryId } = payload;
  try {
    const result = yield call(
      getListMachineryByParentIdByPlantaionIdAsync,
      plantationId,
      machineryId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(getlistMachineryByPlantationIdBYParentIdSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getlistMachineryByPlantationIdBYParentIdFaild(error.message));
  }
}

export function* watchGetOperationTypeByPlantationIdByOperationType() {
  yield takeEvery(
    LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE,
    geOperationTypeByPlantationIdByOperationType
  );
  yield takeEvery(
    LIST_OPERATION_TYPES_BY_PLANTATION_ID,
    geOperationTypeByPlantationId
  );
  yield takeEvery(
    LIST_FINANCIAL_SYSTEM_WAREHOUSE,
    getFinancialSystemWarehouseByPlantainId
  );
  yield takeEvery(
    Exit_PlantationId_BY_RAW_MATERIAL_ID,
    getExitByPlantationIdByRawMatrialId
  );
  yield takeEvery(LIST_MACHINERY_BY_PARENT_ID, getListMachineryByParenId);
  yield takeEvery(
    LIST_MACHINERY_TYPES_BY_PARENT_ID,
    getListMachineryTypeByParenId
  );
  yield takeEvery(
    LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id,
    getListMachineryTypeByParenIdByPlantationId
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetOperationTypeByPlantationIdByOperationType)]);
}
