import {
  LIST_HUMAN_REPORT,
  LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_HUMAN_REPORT_SUCCESS,
  LIST_HUMAN_REPORT_FAILD
} from '../../constants/actionTypes'

export const listHumanReport = (listHumanReport) => ({
  type: LIST_HUMAN_REPORT,
  payload: listHumanReport
})
export const listHumanByYearIdAndPlantationId = (yearId, plantationId) => ({
  type: LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID,
  payload: {yearId,plantationId}
})
export const listHumanReportSuccess = (listHumanReport) => ({
  type: LIST_HUMAN_REPORT_SUCCESS,
  payload: listHumanReport
})
export const listHumanReportFaild = (msg) => ({
  type: LIST_HUMAN_REPORT_FAILD,
  payload: msg
})
