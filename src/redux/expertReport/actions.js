import {
  LIST_EXPERT_REPORT,
  LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_EXPERT_REPORT_SUCCESS,
  LIST_EXPERT_REPORT_FAILD,
  LIST_TYPE_OPERATION,
  LIST_TYPE_OPERATION_SUCCESS,
  LIST_TYPE_OPERATION_FAILD
} from '../../constants/actionTypes'

export const listExpertReport = (listExpertReport) => ({
  type: LIST_EXPERT_REPORT,
  payload: listExpertReport
})
export const listExpertByYearIdAndPlantationId = (yearId, plantationId) => ({
  type: LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID,
  payload: { yearId, plantationId }
})
export const listExpertReportSuccess = (listExpertReport) => ({
  type: LIST_EXPERT_REPORT_SUCCESS,
  payload: listExpertReport
})
export const listExpertReportFaild = (msg) => ({
  type: LIST_EXPERT_REPORT_FAILD,
  payload: msg
})
export const listTypeOperation = (typeOperation) => ({
  type: LIST_TYPE_OPERATION,
  payload: typeOperation
})
export const listTypeOperationSuccess = (typeOperation) => ({
  type: LIST_TYPE_OPERATION_SUCCESS,
  payload: typeOperation
})
export const listTypeOperationFaild = (msg) => ({
  type: LIST_TYPE_OPERATION_FAILD,
  payload: msg
})
