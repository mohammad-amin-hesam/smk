import {
    FETCH_RAW_MATERIAL,
    FETCH_RAW_MATERIAL_START,
    FETCH_RAW_MATERIAL_FAIL,
    FETCH_RAW_MATERIAL_SUCCESS
} from "../../constants/actionTypes";

export const fetchRawMaterial = pId => {
    return {
        type: FETCH_RAW_MATERIAL,
        payload: pId
    }
};

export const fetchRawMaterialStart = () => {
    return {
        type: FETCH_RAW_MATERIAL_START,
    }
};

export const fetchRawMaterialFail = err => {
    return {
        type: FETCH_RAW_MATERIAL_FAIL,
        payload: err
    }
};

export const fetchRawMaterialSuccess = material => {
    return {
        type: FETCH_RAW_MATERIAL_SUCCESS,
        payload: material
    }
};