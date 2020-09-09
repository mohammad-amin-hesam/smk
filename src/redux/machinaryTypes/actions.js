import {
    FETCH_MACHINERY_TYPES,
    FETCH_MACHINERY_TYPES_START,
    FETCH_MACHINERY_TYPES_FAIL,
    FETCH_MACHINERY_TYPES_SUCCESS
} from "../../constants/actionTypes";

export const fetchMachineryTypes = () => {
    return {
        type: FETCH_MACHINERY_TYPES
    }
};

export const fetchMachineryTypesStart = () => {
    return {
        type: FETCH_MACHINERY_TYPES_START
    }
};

export const fetchMachineryTypesFail = err => {
    return {
        type: FETCH_MACHINERY_TYPES_FAIL,
        payload: err
    }
};

export const fetchMachineryTypesSuccess = types => {
    return {
        type: FETCH_MACHINERY_TYPES_SUCCESS,
        payload: types
    }
};
