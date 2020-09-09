import {
  LIST_OPERATION_REPORT,
  LIST_OPERATION_REPORT_SUCCESS,
  LIST_OPERATION_REPORT_FAILD
} from '../../constants/actionTypes'

export const getOperationReport = (selectedItems) => ({
  type: LIST_OPERATION_REPORT,
  payload: { selectedItems }
})

export const getOperationReportSuccess = (operationReport) => ({
  type: LIST_OPERATION_REPORT_SUCCESS,
  payload: operationReport
})
export const getOperationReportFaild = (msg) => ({
  type: LIST_OPERATION_REPORT_FAILD,
  payload: msg
})
