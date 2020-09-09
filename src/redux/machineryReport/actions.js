import {
  LIST_MACHINERY,
  LIST_MACHINERY_BY_PLANTATION_ID,
  LIST_MACHINERY_SUCCESS,
  LIST_MACHINERY_FAILD
} from '../../constants/actionTypes'

export const listMachinery = (machinery) => ({
  type: LIST_MACHINERY,
  payload: machinery
})
export const listmacheneryByPlantaionId = (plantationId) => ({
  type: LIST_MACHINERY_BY_PLANTATION_ID,
  payload: plantationId
})
export const listmachinerySuccess = (machinery) => ({
  type: LIST_MACHINERY_SUCCESS,
  payload: machinery
})
export const listmachineryFaild = (msg) => ({
  type: LIST_MACHINERY_FAILD,
  payload: msg
})
