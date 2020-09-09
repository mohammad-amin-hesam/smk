import {
  LIST_UNITS,
  LIST_UNITS_BY_SECTION_ID,
  LIST_UNITS_SUCCESS,
  LIST_UNITS_FAILD
} from '../../constants/actionTypes'

export const listUnits = (units) => ({
  type: LIST_UNITS,
  payload: units
})
export const listUnitsBySectionId = (sectionId) => ({
  type: LIST_UNITS_BY_SECTION_ID,
  payload: { sectionId }
})
export const listUnitsSuccess = (units) => ({
  type: LIST_UNITS_SUCCESS,
  payload: units
})
export const listUnitsFaild = (msg) => ({
  type: LIST_UNITS_FAILD,
  payload: msg
})
