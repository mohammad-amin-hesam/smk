import {
  LIST_FIELDS,
  LIST_FIELDS_BY_FARM_ID,
  LIST_FIELDS_SUCCESS,
  LIST_FIELDS_FAILD,
    FETCH_ALL_FIELDS,
    FETCH_ALL_FIELDS_START,
    FETCH_ALL_FIELDS_FAIL,
    FETCH_ALL_FIELDS_SUCCESS
} from '../../constants/actionTypes'

export const listFields = (fields) => ({
  type: LIST_FIELDS,
  payload:fields 
})
export const listFieldsByFarmId = (id) => ({
  type: LIST_FIELDS_BY_FARM_ID,
  payload: { id }
})
export const listFieldsSuccess = (fields) => ({
  type: LIST_FIELDS_SUCCESS,
  payload: fields
})
export const listFieldsFaild = (msg) => ({
  type: LIST_FIELDS_FAILD,
  payload: msg
})

export const fetchAllFields = () => {
  return {
    type: FETCH_ALL_FIELDS
  }
};

export const fetchAllFieldsStart = () => {
  return {
    type: FETCH_ALL_FIELDS_START
  }
};

export const fetchAllFieldsFail = err => {
  return {
    type: FETCH_ALL_FIELDS_FAIL,
    payload: err
  }
};

export const fetchAllFieldsSuccess = fields => {
  return {
    type: FETCH_ALL_FIELDS_SUCCESS,
    payload: fields
  }
};
