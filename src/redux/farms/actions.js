import {
  LIST_FARMS,
  LIST_FARMS_BY_COMPANY_ID,
  LIST_FARMS_SUCCESS,
  LIST_FARMS_FAILD,
  FETCH_FARMS,
  FETCH_FARMS_FAIL,
  FETCH_FARMS_START,
  FETCH_FARMS_SUCCESS,
} from '../../constants/actionTypes'

export const listFarms = (farms) => ({
  type: LIST_FARMS,
  payload: farms
})

export const listFarmsByCompanyId = (id) => ({
  type: LIST_FARMS_BY_COMPANY_ID,
  payload: { id }
})
export const listFarmsSuccess = (farms) => ({
  type: LIST_FARMS_SUCCESS,
  payload: farms
})
export const listFarmsFaild = (msg) => ({
  type: LIST_FARMS_FAILD,
  payload: msg
})
