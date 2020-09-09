import {
    FETCH_CROPS,
    FETCH_CROPS_START,
    FETCH_CROPS_FAIL,
    FETCH_CROPS_SUCCESS,
    FETCH_CROPS_BY_ID,
    FETCH_CROPS_START_BY_ID,
    FETCH_CROPS_FAIL_BY_ID,
    FETCH_CROPS_SUCCESS_BY_ID,
    FETCH_VARIETIES_BY_ID,
    FETCH_VARIETIES_BY_ID_START,
    FETCH_VARIETIES_BY_ID_FAIL,
    FETCH_VARIETIES_BY_ID_SUCCESS,
} from "../../constants/actionTypes";

export const fetchCrops = () => {
    return {
        type: FETCH_CROPS
    }
};

export const fetchCropsStart = () => {
    return {
        type: FETCH_CROPS_START
    }
};

export const fetchCropsFail = err => {
    return {
        type: FETCH_CROPS_FAIL,
        payload: err
    }
};

export const fetchCropsSuccess = crops => {
    return {
        type: FETCH_CROPS_SUCCESS,
        payload: crops
    }
};

export const fetchCropsById = id => {
    return {
        type: FETCH_CROPS_BY_ID,
        payload: id
    }
};

export const fetchCropsStartById = () => {
    return {
        type: FETCH_CROPS_START_BY_ID
    }
};

export const fetchCropsFailById = err => {
    return {
        type: FETCH_CROPS_FAIL_BY_ID,
        payload: err
    }
};

export const fetchCropsSuccessById = crops => {
    return {
        type: FETCH_CROPS_SUCCESS_BY_ID,
        payload: crops
    }
};

export const fetchVarietiesById = cropId => {
    return {
        type: FETCH_VARIETIES_BY_ID,
        payload: cropId
    }
};

export const fetchVarietiesByIdStart = () => {
    return {
        type: FETCH_VARIETIES_BY_ID_START
    }
};

export const fetchVarietiesByIdFail = err => {
    return {
        type: FETCH_VARIETIES_BY_ID_FAIL,
        payload: err
    }
};

export const fetchVarietiesByIdSuccess = varieties => {
    return {
        type: FETCH_VARIETIES_BY_ID_SUCCESS,
        payload: varieties
    }
};