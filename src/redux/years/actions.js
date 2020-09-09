import {
  LIST_YEARS,
  LIST_YEARS_SUCCESS,
  LIST_YEARS_FAILD
} from '../../constants/actionTypes'

export const listYears = (years) => ({
  type: LIST_YEARS,
  payload: years
})
export const listYearsSuccess = (years) => ({
  type: LIST_YEARS_SUCCESS,
  payload: years
})
export const listYearsFaild = (msg) => ({
  type: LIST_YEARS_FAILD,
  payload: msg
})
