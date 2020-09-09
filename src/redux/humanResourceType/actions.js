import {
  FETCH_HUMAN_RESOURCE_TYPES,
  FETCH_HUMAN_RESOURCE_TYPES_START,
  FETCH_HUMAN_RESOURCE_TYPES_FAIL,
  FETCH_HUMAN_RESOURCE_TYPES_SUCCESS,
  FETCH_HUMAN_RESOURCE_BY_TYPE,
  FETCH_HUMAN_RESOURCE_BY_TYPE_START,
  FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL,
  FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS,
  LIST_OPERATION_REPORTـSELECTED_ITEM
} from '../../constants/actionTypes'

export const fetchHumanResourcesTypes = () => {
  return {
    type: FETCH_HUMAN_RESOURCE_TYPES
  }
}
export const fetchHumanResourcesTypesSelectedItem = (selecedItems) => {
  return {
    type: LIST_OPERATION_REPORTـSELECTED_ITEM,
    payload: selecedItems
  }
}

export const fetchHumanResourcesTypesStart = () => {
  return {
    type: FETCH_HUMAN_RESOURCE_TYPES_START
  }
}

export const fetchHumanResourcesTypesFail = (err) => {
  return {
    type: FETCH_HUMAN_RESOURCE_TYPES_FAIL,
    payload: err
  }
}

export const fetchHumanResourcesTypesSuccess = (types) => {
  return {
    type: FETCH_HUMAN_RESOURCE_TYPES_SUCCESS,
    payload: types
  }
}

export const fetchHumanResourceByType = (pId, yId, typeId) => {
  return {
    type: FETCH_HUMAN_RESOURCE_BY_TYPE,
    plantationId: pId,
    yearId: yId,
    typeId: typeId
  }
}

export const fetchHumanResourceByTypeStart = () => {
  return {
    type: FETCH_HUMAN_RESOURCE_BY_TYPE_START
  }
}

export const fetchHumanResourceByTypeFail = (err) => {
  return {
    type: FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL,
    payload: err
  }
}

export const fetchHumanResourceByTypeSuccess = (humanResources) => {
  return {
    type: FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS,
    payload: humanResources
  }
}
