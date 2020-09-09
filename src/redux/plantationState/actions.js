import {
    SET_PLANTATION_STATE,
    GET_PLANTATION_STATE,
    SET_PATTERN_PLANTING,
    SET_PLANTATION_DIRECTION
} from "../../constants/actionTypes";

export const setPlantationState = (pState, pId, yId, step) => {
    return {
        type: SET_PLANTATION_STATE,
        plantationState: pState,
        plantationId: pId,
        yearId: yId,
        step
    }
};

export const getPlantationState = () => {
    return {
        type: GET_PLANTATION_STATE
    }
};

export const setPatternPlanting = patternId => {
    return {
        type: SET_PATTERN_PLANTING,
        payload: patternId
    }
};

export const setPlantationDirection = directionArray => {
    return {
        type: SET_PLANTATION_DIRECTION,
        payload: directionArray
    }
};
