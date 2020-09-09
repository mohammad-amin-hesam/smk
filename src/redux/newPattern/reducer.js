import {
  NEW_PATTERN,
  NEW_PATTERN_SUCCESS,
  NEW_PATTERN_FAILD,
  LIST_PATTERNS,
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
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS,
  LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD,
  PATTERN_ID,
  CHANGE_OPTION,
  LIST_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD,
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
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS,
  LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD,
  OPERATION_TYPE_PATTERNS,
  OPERATION_TYPE_PATTERNS_SUCCESS,
  OPERATION_TYPE_PATTERNS_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  pattern: [],
  listPatterns: [],
  realPatterns: [],
  patternsByPlantationIdAndPatternId: [],
  patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId: [],
  patternId: null,
  changeItem: false,
  listOperationByPlantainIdByPatternId: [],
  listMachineryByPlantainIdByPatternId: [],
  listHumanResourceByPlantainIdByPatternId: [],
  listRawMaterialByPlantainIdByPatternId: [],
  listOperationByPlantationIdComparisionBetweeenParentId: [],
  listHumanByPlantationIdComparisionBetweenParentId: [],
  listMachineryByPlantationIdComparisionBetweenParentId: [],
  listRawMaterialByPlantationIdComparisionBetweenParentId: [],
  listDetails: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case NEW_PATTERN:
      return { ...state, pattern: action.payload }
    case NEW_PATTERN_SUCCESS:
      return { ...state, pattern: action.payload }
    case NEW_PATTERN_FAILD:
      return { ...state, msg: action.payload }
    case LIST_PATTERNS:
      return { ...state, listPatterns: action.payload }
    case PATTERN_ID:
      return { ...state, patternId: action.payload }
    case CHANGE_OPTION:
      return { ...state, changeItem: true }
    case LIST_PATTERNS_SUCCESS:
      return { ...state, listPatterns: action.payload }
    case LIST_PATTERNS_FAILD:
      return { ...state, msg: action.payload }
    case LIST_PATTERNS_BY_PLANTING_YEAR_ID:
      return { ...state, pattern: action.payload }
    case LIST_PATTERNS_BY_PLANTING_YEAR_ID_SUCCESS:
      return { ...state, pattern: action.payload }
    case LIST_PATTERNS_BY_PLANTING_YEAR_ID_FAILD:
      return { ...state, msg: action.payload }
    case REAL_PATTERNS:
      return { ...state, realPatterns: action.payload }
    case REAL_PATTERNS_SUCCESS:
      return { ...state, realPatterns: action.payload }
    case REAL_PATTERNS_FAILD:
      return { ...state, msg: action.payload }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        patternsByPlantationIdAndPatternId: action.payload
      }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        patternsByPlantationIdAndPatternId: action.payload
      }
    case LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD:
      return { ...state, msg: action.payload }

    case LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId:
          action.payload
      }
    case LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID:
      return { ...state, ...action.payload }
    case LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listOperationByPlantainIdByPatternId: action.payload
      }
    case LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID:
      return { ...state, ...action.payload }
    case LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listHumanResourceByPlantainIdByPatternId: action.payload
      }
    case LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID:
      return { ...state, ...action.payload }
    case LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listMachineryByPlantainIdByPatternId: action.payload
      }
    case LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID:
      return { ...state, ...action.payload }
    case LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listRawMaterialByPlantainIdByPatternId: action.payload
      }
    case LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }

    case BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID:
      return { ...state, ...action.payload }
    case BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listOperationByPlantationIdComparisionBetweeenParentId: action.payload
      }
    case BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID:
      return { ...state, ...action.payload }
    case BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS:
      return {
        ...state,
        listHumanByPlantationIdComparisionBetweenParentId: action.payload
      }
    case BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD:
      return { ...state, msg: action.payload }
    case LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID:
      return { ...state, ...action.payload }
    case LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS:
      return { ...state, listDetails: action.payload }
    case LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD:
      return { ...state, msg: action.payload }
    case OPERATION_TYPE_PATTERNS:
      return { ...state, ...action.payload }
    case OPERATION_TYPE_PATTERNS_SUCCESS:
      return { ...state, operationTypePattern: action.payload }
    case OPERATION_TYPE_PATTERNS_FAILD:
      return { ...state, msg: action.payload }
    default:
      return { ...state }
  }
}
