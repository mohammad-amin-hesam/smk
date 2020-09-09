import {
  NEW_PATTERN,
  NEW_PATTERN_SUCCESS,
  NEW_PATTERN_FAILD,
  LIST_PATTERNS,
  PATTERN_ID,
  CHANGE_OPTION,
  LIST_PATTERNS_SUCCESS,
  LIST_PATTERNS_FAILD,
  LIST_PATTERNS_BY_PLANTING_YEAR_ID,
  LIST_PATTERNS_BY_PLANTING_YEAR_ID_SUCCESS,
  LIST_PATTERNS_BY_PLANTING_YEAR_ID_FAILD,
  REAL_PATTERNS,
  REAL_PATTERNS_SUCCESS,
  REAL_PATTERNS_FAILD,
  LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID,
  LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS,
  LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD,
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID,
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD,
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS,
  LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD,
  OPERATION_TYPE_PATTERNS,
  OPERATION_TYPE_PATTERNS_SUCCESS,
  OPERATION_TYPE_PATTERNS_FAILD
} from '../../constants/actionTypes'

export const newPattern = (title, type, yearId, description) => ({
  type: NEW_PATTERN,
  payload: { title, type, yearId, description }
})

export const getListDetails = (plantationId, patternId, cropId) => ({
  type: LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID,
  payload: { plantationId, patternId, cropId }
})
export const getListDetailsSuccess = (listDetails) => ({
  type: LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS,
  payload: listDetails
})
export const getListDetailsFaild = (msg) => ({
  type: LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD,
  payload: msg
})

export const postOperationTypePattern = (
  plantationId,
  patternId,
  items
) => ({
  type: OPERATION_TYPE_PATTERNS,
  payload: { plantationId, patternId, items }
})
export const postOperationTypePatternSuccess = (operationTypePattern) => ({
  type: OPERATION_TYPE_PATTERNS_SUCCESS,
  payload: operationTypePattern
})
export const postOperationTypePatternFaild = (msg) => ({
  type: OPERATION_TYPE_PATTERNS_FAILD,
  payload: msg
})

export const newPatternSuccess = (pattern) => ({
  type: NEW_PATTERN_SUCCESS,
  payload: pattern
})

export const newPatternFaild = (msg) => ({
  type: NEW_PATTERN_FAILD,
  payload: msg
})

export const listPatterns = (listPatterns) => ({
  type: LIST_PATTERNS,
  payload: listPatterns
})
export const listPatternsSuccess = (listPatterns) => ({
  type: LIST_PATTERNS_SUCCESS,
  payload: listPatterns
})

export const listPatternsFaild = (msg) => ({
  type: LIST_PATTERNS_FAILD,
  payload: msg
})
export const listPatternsByPlantingYearId = (plantingYearId) => ({
  type: LIST_PATTERNS_BY_PLANTING_YEAR_ID,
  payload: plantingYearId
})

export const listPatternsByPlantingYearIdSuccess = (plantingYearId) => ({
  type: LIST_PATTERNS_BY_PLANTING_YEAR_ID_SUCCESS,
  payload: plantingYearId
})

export const listPatternsByPlantingYearIdFaild = (msg) => ({
  type: LIST_PATTERNS_BY_PLANTING_YEAR_ID_FAILD,
  payload: msg
})

export const listPatternsPlantingByPatternIdAndPlantationId = (
  plantationId,
  patternId
) => ({
  type: LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID,
  payload: { plantationId, patternId }
})
export const listPatternsPlantingByPatternIdAndPlantationIdSuccess = (
  patternByPlantiationIdAndPatternId
) => ({
  type: LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS,
  payload: { patternByPlantiationIdAndPatternId }
})
export const listPatternsPlantingByPatternIdAndPlantationIdFaild = (msg) => ({
  type: LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD,
  payload: msg
})

export const listRealPatterns = (listRealPatterns) => ({
  type: REAL_PATTERNS,
  payload: listRealPatterns
})

export const setChangeOption = () => ({
  type: CHANGE_OPTION
})

export const setPatternId = (id) => ({
  type: PATTERN_ID,
  payload: id
})
export const listRealPatternsSuccess = (listRealPatterns) => ({
  type: REAL_PATTERNS_SUCCESS,
  payload: listRealPatterns
})

export const listRealPatternsFaild = (msg) => ({
  type: REAL_PATTERNS_FAILD,
  payload: msg
})

export const listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternId = (
  plantationId,
  patternId,
  realPatternId
) => ({
  type: LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID,
  payload: { plantationId, patternId, realPatternId }
})
export const listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdSuccess = (
  patternByPlantiationIdAndPatternIdAndAnotherPatternId
) => ({
  type: LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS,
  payload: { patternByPlantiationIdAndPatternIdAndAnotherPatternId }
})
export const listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternIdFaild = (
  msg
) => ({
  type: LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD,
  payload: msg
})

export const listOperationByPlantationPatternByPlantatinIdByPatternId = (
  plantationId,
  patternId
) => ({
  type: LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  payload: { plantationId, patternId }
})
export const listOperationByPlantationPatternByPlantatinIdByPatternIdSuccess = (
  byPlantationOperationPatternByPlantiationIdByPatternId
) => ({
  type: LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  payload: byPlantationOperationPatternByPlantiationIdByPatternId
})
export const listOperationByPlantationPatternByPlantatinIdByPatternIdFaild = (
  msg
) => ({
  type: LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  payload: msg
})
export const listMachineryByPlantationPatternByPlantatinIdByPatternId = (
  plantationId,
  patternId
) => ({
  type: LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  payload: { plantationId, patternId }
})
export const listMachineryByPlantationPatternByPlantatinIdByPatternIdSuccess = (
  byMachineryPlantationOperationPatternByPlantiationIdByPatternId
) => ({
  type: LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  payload: {
    byMachineryPlantationOperationPatternByPlantiationIdByPatternId
  }
})
export const listMachineryByPlantationPatternByPlantatinIdByPatternIdFaild = (
  msg
) => ({
  type: LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  payload: msg
})
export const listHumanResourceByPlantationPatternByPlantatinIdByPatternId = (
  plantationId,
  patternId
) => ({
  type: LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  payload: { plantationId, patternId }
})
export const listHumanResourceByPlantationPatternByPlantatinIdByPatternIdSuccess = (
  byHumanResourcePlantationOperationPatternByPlantiationIdByPatternId
) => ({
  type: LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  payload: {
    byHumanResourcePlantationOperationPatternByPlantiationIdByPatternId
  }
})
export const listHumanResourceByPlantationPatternByPlantatinIdByPatternIdFaild = (
  msg
) => ({
  type: LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  payload: msg
})
export const listRawMaterialByPlantationPatternByPlantatinIdByPatternId = (
  plantationId,
  patternId
) => ({
  type: LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID,
  payload: { plantationId, patternId }
})
export const listRawMaterialByPlantationPatternByPlantatinIdByPatternIdSuccess = (
  byRawMaterialPlantationPatternByPlantiationIdByPatternId
) => ({
  type: LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS,
  payload: {
    byRawMaterialPlantationPatternByPlantiationIdByPatternId
  }
})
export const listRawMaterialByPlantationPatternByPlantatinIdByPatternIdFaild = (
  msg
) => ({
  type: LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
  payload: msg
})
export const listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternId = (
  plantationId,
  patternId,
  realPatternId
) => ({
  type: BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  payload: { plantationId, patternId, realPatternId }
})
export const listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdSuccess = (
  byOperationPatternByPlantiationIdAndBetweenPatternId
) => ({
  type: BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  payload: { byOperationPatternByPlantiationIdAndBetweenPatternId }
})
export const listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternIdFaild = (
  msg
) => ({
  type: BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  payload: msg
})

export const listByHumanResourcePatternsPlantingByPlantationIdAndComparisionBetweenPatternId = (
  plantationId,
  patternId,
  realPatternId
) => ({
  type: BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID,
  payload: { plantationId, patternId, realPatternId }
})
export const listByHumanResourcePatternsPlantingByPlantationIdAndComparisionBetweenPatternIdSuccess = (
  byHumanResourcePatternByPlantiationIdAndBetweenPatternId
) => ({
  type: BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS,
  payload: { byHumanResourcePatternByPlantiationIdAndBetweenPatternId }
})
export const listByHumanResourcePatternsPlantingByPlantationIdAndComparisionBetweenPatternIdFaild = (
  msg
) => ({
  type: BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD,
  payload: msg
})
