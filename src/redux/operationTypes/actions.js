import {
    FETCH_OPERATION_TYPES,
    FETCH_OPERATION_TYPES_START,
    FETCH_OPERATION_TYPES_FAIL,
    FETCH_OPERATION_TYPES_SUCCESS
} from "../../constants/actionTypes";

export const fetchOperationTypes = () => {
    return {
        type: FETCH_OPERATION_TYPES
    }
};

export const fetchOperationTypesStart = () => {
    return {
        type: FETCH_OPERATION_TYPES_START
    }
};

export const fetchOperationTypesFail = err => {
    return {
        type: FETCH_OPERATION_TYPES_FAIL,
        payload: err
    }
};

export const fetchOperationTypesSuccess = types => {
    return {
        type: FETCH_OPERATION_TYPES_SUCCESS,
        payload: types
    }
};