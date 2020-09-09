import {
    FETCH_WATER_TEST,
    FETCH_WATER_TEST_START,
    FETCH_WATER_TEST_FAIL,
    FETCH_WATER_TEST_SUCCESS,
    ADD_EDIT_WATER_TEST,
    ADD_EDIT_WATER_TEST_START,
    ADD_EDIT_WATER_TEST_FAIL,
    ADD_EDIT_WATER_TEST_SUCCESS,
    SUBMIT_WATER_TEST,
    SUBMIT_WATER_TEST_START,
    SUBMIT_WATER_TEST_FAIL,
    SUBMIT_WATER_TEST_SUCCESS,
    DELETE_WATER_TEST,
    DELETE_WATER_TEST_START,
    DELETE_WATER_TEST_FAIL,
    DELETE_WATER_TEST_SUCCESS,
    FETCH_WATER_TEST_BY_RESOURCE,
    FETCH_WATER_TEST_BY_RESOURCE_START,
    FETCH_WATER_TEST_BY_RESOURCE_FAIL,
    FETCH_WATER_TEST_BY_RESOURCE_SUCCESS
} from "../../constants/actionTypes";

export const fetchWaterTest = (pId, yId) => {
    return {
        type: FETCH_WATER_TEST,
        yearId: yId,
        plantationId: pId
    }
};

export const fetchWaterTestStart = () => {
    return {
        type: FETCH_WATER_TEST_START
    }
};

export const fetchWaterTestFail = err => {
    return {
        type: FETCH_WATER_TEST_FAIL,
        payload: err
    }
};

export const fetchWaterTestSuccess = result => {
    return {
        type: FETCH_WATER_TEST_SUCCESS,
        payload: result
    }
};

export const addEditWaterTest = (testId, postData) => {
    return {
        type: ADD_EDIT_WATER_TEST,
        testId: testId,
        postData: postData
    }
};

export const addEditWaterTestStart = () => {
    return {
        type: ADD_EDIT_WATER_TEST_START
    }
};

export const addEditWaterTestFail = err => {
    return {
        type: ADD_EDIT_WATER_TEST_FAIL,
        payload: err
    }
};

export const addEditWaterTestSuccess = result => {
    return {
        type: ADD_EDIT_WATER_TEST_SUCCESS,
        payload: result
    }
};

export const submitWaterTest = postData => {
    return {
        type: SUBMIT_WATER_TEST,
        postData: postData
    }
};

export const submitWaterTestStart = () => {
    return {
        type: SUBMIT_WATER_TEST_START
    }
};

export const submitWaterTestFail = err => {
    return {
        type: SUBMIT_WATER_TEST_FAIL,
        payload: err
    }
};

export const submitWaterTestSuccess = result => {
    return {
        type: SUBMIT_WATER_TEST_SUCCESS,
        payload: result
    }
};

export const deleteWaterTest = testId => {
    return {
        type: DELETE_WATER_TEST,
        payload: testId
    }
};

export const deleteWaterTestStart = () => {
    return {
        type: DELETE_WATER_TEST_START,
    }
};

export const deleteWaterTestFail = err => {
    return {
        type: DELETE_WATER_TEST_FAIL,
        payload: err
    }
};

export const deleteWaterTestSuccess = result => {
    return {
        type: DELETE_WATER_TEST_SUCCESS,
        payload: result
    }
};

export const fetchWaterTestByResource = (resourceId, yearId) => {
    return {
        type: FETCH_WATER_TEST_BY_RESOURCE,
        resourceId: resourceId
    }
};

export const fetchWaterTestByResourceStart = () => {
    return {
        type: FETCH_WATER_TEST_BY_RESOURCE_START,
    }
};

export const fetchWaterTestByResourceFail = err => {
    return {
        type: FETCH_WATER_TEST_BY_RESOURCE_FAIL,
        payload: err
    }
};

export const fetchWaterTestByResourceSuccess = result => {
    return {
        type: FETCH_WATER_TEST_BY_RESOURCE_SUCCESS,
        payload: result
    }
};