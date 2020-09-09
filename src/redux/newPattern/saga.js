import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  NEW_PATTERN,
  LIST_PATTERNS,
  LIST_PATTERNS_BY_PLANTING_YEAR_ID,
  REAL_PATTERNS,
  LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID,
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID,
  LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID,
  OPERATION_TYPE_PATTERNS,
} from "../../constants/actionTypes";

import {
  newPatternSuccess,
  newPatternFaild,
  listPatternsSuccess,
  listPatternsFaild,
  listPatternsByPlantingYearIdSuccess,
  listPatternsByPlantingYearIdFaild,
  listRealPatternsSuccess,
  listRealPatternsFaild,
  listPatternsPlantingByPatternIdAndPlantationIdFaild,
  listPatternsPlantingByPatternIdAndPlantationIdSuccess,
  listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdSuccess,
  listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdFaild,
  listOperationByPlantationPatternByPlantatinIdByPatternIdSuccess,
  listOperationByPlantationPatternByPlantatinIdByPatternIdFaild,
  listMachineryByPlantationPatternByPlantatinIdByPatternIdSuccess,
  listMachineryByPlantationPatternByPlantatinIdByPatternIdFaild,
  listHumanResourceByPlantationPatternByPlantatinIdByPatternIdSuccess,
  listHumanResourceByPlantationPatternByPlantatinIdByPatternIdFaild,
  listRawMaterialByPlantationPatternByPlantatinIdByPatternIdSuccess,
  listRawMaterialByPlantationPatternByPlantatinIdByPatternIdFaild,
  listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdSuccess,
  listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdFaild,
  listByHumanResourcePatternsPlantingByPlantationIdAndComparisionBetweenPatternIdSuccess,
  listByHumanResourcePatternsPlantingByPlantationIdAndComparisionBetweenPatternIdFaild,
  getListDetailsSuccess,
  getListDetailsFaild,
  postOperationTypePatternSuccess,
  postOperationTypePatternFaild,
} from "./actions";
import API from "../../services/httpService";

const newPatternPostAsync = (title, type, yearId, description) => {
  let formData = new FormData();
  formData.append("title", title);
  formData.append("type", type);
  formData.append("year", yearId);
  formData.append("description", description);

  return API.post(`/patterns`, formData);
};

const operationTypePostAsync = (plantationId, patternId, items) => {
  let formData = new FormData();
  formData.append("plantation_id", plantationId);
  formData.append("pattern_id", patternId);
  items.forEach((item) => {
    formData.append("value[]", item.value);
    formData.append("cost[]", item.cost);
    formData.append("force_store", true);
    formData.append("need_proof[]", item.need_proof);
    formData.append("operation_type_id[]", item.id);
  });

  return API.post(`/operation_type_patterns`, formData);
};

const listPatternsAsync = () => API.get("/patterns");

const listRealPatternsAsync = () => {
  return API.get("/patterns/real");
};

const listDetailsAsync = (plantationId, patternId, cropId) => {
  return API.get(
    `pattern_planting/details?plantation_id=${plantationId}&pattern_id=${patternId}&crop_id=${cropId}`
  );
};

const listPatternsByPlantingYearIdAsync = (plantingYearId) => {
  return API.get(`/patterns?planting_year_id=${plantingYearId}`);
};

const listPatternsPlantingByPlantationIdAndPatternIdAsync = (
  plantationId,
  patternId
) => {
  return API.get(
    `pattern_planting?plantation_id=${plantationId}&pattern_id=${patternId}`
  );
};
const listPatternsPlantingByPlantationIdAndPatternIdAndComparAnotherPatternIdAsync = (
  plantationId,
  patternId,
  realPatternId
) => {
  return API.get(
    `/pattern_planting?plantation_id=${plantationId}&pattern_id=${patternId}&comparision_pattern_id=${realPatternId}`
  );
};

const listOperationTypeByPatternsPlantingByPlantationIdByPatternIdAsync = (
  plantationId,
  patternId
) => {
  return API.get(
    `operation_type_patterns/byPlantationPattern?plantation_id=${plantationId}&pattern_id=${patternId}`
  );
};
const listOperationByPlantationIdByBetweenPatternIdAsync = (
  plantationId,
  patternId,
  realPatternId
) => {
  return API.get(
    `/operation_type_patterns/byPlantationPattern?plantation_id=${plantationId}&pattern_id=${patternId}1&comparision_pattern_id=${realPatternId}`
  );
};

const listResourceTypeByPatternsPlantingByPlantationIdByPatternIdAsync = (
  plantationId,
  patternId
) => {
  return API.get(
    `human_resource_type_patterns/byPlantationPattern?plantation_id=${plantationId}&pattern_id=${patternId}`
  );
};

const listMachineryTypeByPatternsPlantingByPlantationIdByPatternIdAsync = (
  plantationId,
  patternId
) => {
  return API.get(
    `/machinery_type_patterns/byPlantationPattern?plantation_id=${plantationId}&pattern_id=${patternId}`
  );
};
const listMaterialGroupByPatternsPlantingByPlantationIdByPatternIdAsync = (
  plantationId,
  patternId
) => {
  return API.get(
    `raw_material_group_patterns/byPlantationPattern?plantation_id=${plantationId}&pattern_id=${patternId}`
  );
};

/* listPatterns */
function* listPatterns() {
  try {
    const result = yield call(listPatternsAsync, null);
    if (result.data.message) throw new Error(result.data.message);
    yield put(listPatternsSuccess(result.data));
  } catch (error) {
    // catch throw

    yield put(listPatternsFaild(error.message));
  }
}

function* listPatternsPlantingByPlantatinIdAndPatternId({ payload }) {
  let { patternId, plantationId } = payload;
  try {
    const result = yield call(
      listPatternsPlantingByPlantationIdAndPatternIdAsync,
      plantationId,
      patternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listPatternsPlantingByPatternIdAndPlantationIdSuccess(result.data)
    );
  } catch (error) {
    // catch throw

    yield put(
      listPatternsPlantingByPatternIdAndPlantationIdFaild(error.message)
    );
  }
}

// listDetailsByPlantaionIdBYPatternIdByCropId
function* getlistDetails({ payload }) {
  let { patternId, plantationId, cropId } = payload;
  try {
    const result = yield call(
      listDetailsAsync,
      plantationId,
      patternId,
      cropId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(getListDetailsSuccess(result.data));
  } catch (error) {
    // catch throw

    yield put(getListDetailsFaild(error.message));
  }
}
// operationTypePattern
function* postOperationTypePattern({ payload }) {
  let { plantationId, patternId, items } = payload;
  try {
    const result = yield call(
      operationTypePostAsync,
      plantationId,
      patternId,
      items
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(postOperationTypePatternSuccess(result.data));
  } catch (error) {
    // catch throw

    yield put(postOperationTypePatternFaild(error.message));
  }
}
/* getListOperationPlanting */
function* listOperationPlantingByPlantatinIdByPatternId({ payload }) {
  let { patternId, plantationId } = payload;
  try {
    const result = yield call(
      listOperationTypeByPatternsPlantingByPlantationIdByPatternIdAsync,
      plantationId,
      patternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listOperationByPlantationPatternByPlantatinIdByPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listOperationByPlantationPatternByPlantatinIdByPatternIdFaild(
        error.message
      )
    );
  }
}
/* getListResourcePlanting */
function* listHumanResourcePlantingByPlantatinIdByPatternId({ payload }) {
  let { patternId, plantationId } = payload;
  try {
    const result = yield call(
      listResourceTypeByPatternsPlantingByPlantationIdByPatternIdAsync,
      plantationId,
      patternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listHumanResourceByPlantationPatternByPlantatinIdByPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listHumanResourceByPlantationPatternByPlantatinIdByPatternIdFaild(
        error.message
      )
    );
  }
}
/* getListMachineryPlanting */
function* listMachineryPlantingByPlantatinIdByPatternId({ payload }) {
  let { patternId, plantationId } = payload;
  try {
    const result = yield call(
      listMachineryTypeByPatternsPlantingByPlantationIdByPatternIdAsync,
      plantationId,
      patternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listMachineryByPlantationPatternByPlantatinIdByPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listMachineryByPlantationPatternByPlantatinIdByPatternIdFaild(
        error.message
      )
    );
  }
}
/* getListMaterialPlanting */
function* listMaterialGroupPlantingByPlantatinIdByPatternId({ payload }) {
  let { patternId, plantationId } = payload;
  try {
    const result = yield call(
      listMaterialGroupByPatternsPlantingByPlantationIdByPatternIdAsync,
      plantationId,
      patternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listRawMaterialByPlantationPatternByPlantatinIdByPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listRawMaterialByPlantationPatternByPlantatinIdByPatternIdFaild(
        error.message
      )
    );
  }
}

function* listPatternsPlantingByPlantatinIdAndPatternIdAndComparPatternId({
  payload,
}) {
  let { patternId, plantationId, realPatternId } = payload;
  try {
    const result = yield call(
      listPatternsPlantingByPlantationIdAndPatternIdAndComparAnotherPatternIdAsync,
      plantationId,
      patternId,
      realPatternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdFaild(
        error.message
      )
    );
  }
}

function* listOperationByPlantatinIdAndComparisionPatternId({ payload }) {
  let { patternId, plantationId, realPatternId } = payload;
  try {
    const result = yield call(
      listOperationByPlantationIdByBetweenPatternIdAsync,
      plantationId,
      patternId,
      realPatternId
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(
      listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdSuccess(
        result.data
      )
    );
  } catch (error) {
    // catch throw

    yield put(
      listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdFaild(
        error.message
      )
    );
  }
}

/* listRealPatterns */
function* listRealPatterns() {
  try {
    const result = yield call(listRealPatternsAsync, null);
    if (result.data.message) throw new Error(result.data.message);
    yield put(listRealPatternsSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listRealPatternsFaild(error.message));
  }
}

/* newPattern */
function* addNewPattern({ payload }) {
  const { title, type, yearId, description } = payload;
  try {
    const result = yield call(
      newPatternPostAsync,
      title,
      type,
      yearId,
      description
    );
    if (result.data.message) throw new Error(result.data.message);
    yield put(newPatternSuccess(result.data));
  } catch (error) {
    // catch throw

    yield put(newPatternFaild(error.message));
  }
}

/* listPatternsByPlantingYearId */
function* listPatternsByPlantingYearId(action) {
  try {
    const result = yield call(
      listPatternsByPlantingYearIdAsync,
      action.payload
    );
    const fetchedPatternByYearId = [];
    for (let key in result.data) {
      fetchedPatternByYearId.push({
        ...result.data[key],
        id: key,
      });
    }

    if (result.data.message) throw new Error(result.data.message);
    yield put(listPatternsByPlantingYearIdSuccess(fetchedPatternByYearId));
  } catch (error) {
    // catch throw

    yield put(listPatternsByPlantingYearIdFaild(error.message));
  }
}

export function* watchNewPattern() {
  yield takeEvery(NEW_PATTERN, addNewPattern);
  yield takeEvery(LIST_PATTERNS, listPatterns);
  yield takeEvery(REAL_PATTERNS, listRealPatterns);
  yield takeEvery(
    LIST_PATTERNS_BY_PLANTING_YEAR_ID,
    listPatternsByPlantingYearId
  );
  yield takeEvery(
    LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID,
    listPatternsPlantingByPlantatinIdAndPatternId
  );
  yield takeEvery(OPERATION_TYPE_PATTERNS, postOperationTypePattern);
  yield takeEvery(
    LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
    listOperationPlantingByPlantatinIdByPatternId
  );
  yield takeEvery(
    LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
    listMachineryPlantingByPlantatinIdByPatternId
  );
  yield takeEvery(
    LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
    listHumanResourcePlantingByPlantatinIdByPatternId
  );
  yield takeEvery(
    LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
    listMaterialGroupPlantingByPlantatinIdByPatternId
  );
  yield takeEvery(
    LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID,
    listPatternsPlantingByPlantatinIdAndPatternIdAndComparPatternId
  );
  yield takeEvery(
    BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
    listOperationByPlantatinIdAndComparisionPatternId
  );
  yield takeEvery(
    LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID,
    getlistDetails
  );
}

export default function* rootSaga() {
  yield all([fork(watchNewPattern)]);
}
