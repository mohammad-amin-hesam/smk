import {
  LIST_SECTION,
  LIST_SECTION_BY_FARM_ID,
  LIST_SECTION_SUCCESS,
  LIST_SECTION_FAILD
} from '../../constants/actionTypes'

export const section = (section) => ({
  type: LIST_SECTION,
  payload: section
})
export const sectionByFarmId = (id, fieldId) => ({
  type: LIST_SECTION_BY_FARM_ID,
  payload: { id, fieldId }
})
export const sectionSuccess = (section) => ({
  type: LIST_SECTION_SUCCESS,
  payload: section
})
export const sectionFaild = (msg) => ({
  type: LIST_SECTION_FAILD,
  payload: msg
})
