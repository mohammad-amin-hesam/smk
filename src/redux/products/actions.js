import {
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID,
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD,
  LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS
} from '../../constants/actionTypes'

export const ListProductsByPlantingYearIdAndPlantaionId = (
  plantingYearId,
  plantationId
) => ({
  type: LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID,
  payload: { plantingYearId, plantationId }
})

export const listProductsByPlantingYearIdAndPlantaionIdSuccess = (
  products
) => ({
  type: LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS,
  payload: products
})
export const listProductsByPlantingYearIdAndPlantaionIdFaild = (msg) => ({
  type: LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD,
  payload: msg
})
