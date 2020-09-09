import {
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID,
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS,
  LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD
} from '../../constants/actionTypes'

export const getWateringManagmentByYearIdByPlantationId = (
  yearId,
  plantationId
) => ({
  type: LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID,
  payload: { yearId, plantationId }
})
export const getWateringManagmentByYearIdByPlantationIdSuccess = (
  listWateringManagment
) => ({
  type: LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS,
  payload: listWateringManagment
})
export const getWateringManagmentByYearIdByPlantationIdFaild = (msg) => ({
  type: LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD,
  payload: msg
})
