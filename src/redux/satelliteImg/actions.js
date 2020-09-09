import {
    FETCH_SATELLITE_IMG,
    FETCH_SATELLITE_IMG_START,
    FETCH_SATELLITE_IMG_FAIL,
    FETCH_SATELLITE_IMG_SUCCESS,
    SET_SATELLITE_IMG_ACTIVE,
    SET_SATELLITE_INDEX
} from "../../constants/actionTypes";

export const fetchSatImg = (state , pId) => {
    return {
        type: FETCH_SATELLITE_IMG,
        state: state,
        plantationId: pId
    }
};

export const fetchSatImgStart = () => {
    return {
        type: FETCH_SATELLITE_IMG_START
    }
};

export const fetchSatImgFail = err => {
    return {
        type: FETCH_SATELLITE_IMG_FAIL,
        payload: err
    }
};

export const fetchSatImgSuccess = satellites => {
    return {
        type: FETCH_SATELLITE_IMG_SUCCESS,
        payload: satellites
    }
};

export const setSatImgActive = active => {
    return {
        type: SET_SATELLITE_IMG_ACTIVE,
        payload: active
    }
};

export const setSatIndex = index => {
    return {
        type: SET_SATELLITE_INDEX,
        payload: index
    }
}