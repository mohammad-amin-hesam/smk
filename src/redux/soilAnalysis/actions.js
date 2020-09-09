import {
    FETCH_SOIL_ANALYSES,
    FETCH_SOIL_ANALYSES_FAIL,
    FETCH_SOIL_ANALYSES_SUCCESS,
    FETCH_SOIL_ANALYSES_START,
    ADD_EDIT_SOIL_ANALYSES,
    ADD_EDIT_SOIL_ANALYSES_START,
    ADD_EDIT_SOIL_ANALYSES_FAIL,
    ADD_EDIT_SOIL_ANALYSES_SUCCESS,
    SUBMIT_SOIL_ANALYSES,
    SUBMIT_SOIL_ANALYSES_START,
    SUBMIT_SOIL_ANALYSES_FAIL,
    SUBMIT_SOIL_ANALYSES_SUCCESS,
    DELETE_SOIL_ANALYSES,
    DELETE_SOIL_ANALYSES_START,
    DELETE_SOIL_ANALYSES_FAIL,
    DELETE_SOIL_ANALYSES_SUCCESS
} from "../../constants/actionTypes";


export const fetchSoilAnalyses = (pId) => {
    return {
        type: FETCH_SOIL_ANALYSES,
        payload: pId
    }
};

export const fetchSoilAnalysesStart = () => {
    return {
        type: FETCH_SOIL_ANALYSES_START
    }
};

export const fetchSoilAnalysesFail = err => {
    return {
        type: FETCH_SOIL_ANALYSES_FAIL,
        payload: err
    }
};

export const fetchSoilAnalysesSuccess = result => {
    return {
        type: FETCH_SOIL_ANALYSES_SUCCESS,
        payload: result
    }
};

export const addEditSoilAnalyses = (analyseId, postData) => {
    return {
        type: ADD_EDIT_SOIL_ANALYSES,
        testId: analyseId,
        postData: postData
    }
};

export const addEditSoilAnalysesStart = () => {
    return {
        type: ADD_EDIT_SOIL_ANALYSES_START
    }
};

export const addEditSoilAnalysesFail = err => {
    return {
        type: ADD_EDIT_SOIL_ANALYSES_FAIL,
        payload: err
    }
};

export const addEditSoilAnalysesSuccess = result => {
    return {
        type: ADD_EDIT_SOIL_ANALYSES_SUCCESS,
        payload: result
    }
};

export const submitSoilAnalyses = postData => {
    return {
        type: SUBMIT_SOIL_ANALYSES,
        payload: postData
    }
};

export const submitSoilAnalysesStart = () => {
    return {
        type: SUBMIT_SOIL_ANALYSES_START
    }
};

export const submitSoilAnalysesFail = err => {
    return {
        type: SUBMIT_SOIL_ANALYSES_FAIL,
        payload: err
    }
};

export const submitSoilAnalysesSuccess = result => {
    return {
        type: SUBMIT_SOIL_ANALYSES_SUCCESS,
        payload: result
    }
};


export const deleteSoilAnalyses = testId => {
    return {
        type: DELETE_SOIL_ANALYSES,
        payload: testId
    }
};

export const deleteSoilAnalysesStart = () => {
    return {
        type: DELETE_SOIL_ANALYSES_START,
    }
};

export const deleteSoilAnalysesFail = err => {
    return {
        type: DELETE_SOIL_ANALYSES_FAIL,
        payload: err
    }
};

export const deleteSoilAnalysesSuccess = result => {
    return {
        type: DELETE_SOIL_ANALYSES_SUCCESS,
        payload: result
    }
};