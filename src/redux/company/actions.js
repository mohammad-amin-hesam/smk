import {
  LIST_COMPANIES,
  LIST_COMPANIES_SUCCESS,
  LIST_COMPANIES_FAILD,
  LIST_COMPANIES_COORDS,
} from '../../constants/actionTypes'

export const listCompanies = (filter = {}) => ({
  type: LIST_COMPANIES,
  payload: { filter }
})
export const listCompaniesSuccess = (companies) => ({
  type: LIST_COMPANIES_SUCCESS,
  payload: companies
})
export const listCompaniesFaild = (msg) => ({
  type: LIST_COMPANIES_FAILD,
  payload: msg
})
