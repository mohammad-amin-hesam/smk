import {
    LIST_PLANTS,
    LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID,
    LIST_PLANTS_SUCCESS,
    LIST_PLANTS_FAILD,
    ADD_PLANT,
    ADD_PLANT_START,
    ADD_PLANT_FAIL,
    ADD_PLANT_SUCCESS,
    SET_PLANT_FOR_EDIT,
    EDIT_PLANT,
    EDIT_PLANT_START,
    EDIT_PLANT_FAIL,
    EDIT_PLANT_SUCCESS,
    DELETE_PLANT_SHAPE,
    DELETE_PLANT_SHAPE_START,
    DELETE_PLANT_SHAPE_FAIL,
    DELETE_PLANT_SHAPE_SUCCESS,

} from '../../constants/actionTypes'

export const listPlants = (plants) => ({
    type: LIST_PLANTS,
    payload: plants
})
export const listPlantsByPieceIdAndYearId = (pieceId, yearId) => ({
    type: LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID,
    payload: {pieceId, yearId}
})
export const listPlantsSuccess = (plants) => ({
    type: LIST_PLANTS_SUCCESS,
    payload: plants
})
export const listPlantsFaild = (msg) => ({
    type: LIST_PLANTS_FAILD,
    payload: msg
});

export const addPlant = postData => {
    return {
        type: ADD_PLANT,
        payload: postData
    }
};

export const addPlantStart = () => {
    return {
        type: ADD_PLANT_START
    }
};

export const addPlantFail = err => {
    return {
        type: ADD_PLANT_FAIL,
        payload: err
    }
};

export const addPlantSuccess = result => {
    return {
        type: ADD_PLANT_SUCCESS,
        payload: result
    }
};

export const setPlantForEdit = (pId, patternId) => {
    return {
        type: SET_PLANT_FOR_EDIT,
        plantationId: pId,
        patternId: patternId
    }
};

export const editPlant = (pId, postData) => {
    return {
        type: EDIT_PLANT,
        patternId: pId,
        postData: postData
    }
};

export const editPlantStart = () => {
    return {
        type: EDIT_PLANT_START
    }
};

export const editPlantFail = err => {
    return {
        type: EDIT_PLANT_FAIL,
        payload: err
    }
};

export const editPlantSuccess = response => {
    return {
        type: EDIT_PLANT_SUCCESS,
        payload: response
    }
};

export const deletePlantShape = patternId => {
    return {
        type: DELETE_PLANT_SHAPE,
        payload: patternId
    }
};

export const deletePlantShapeStart = () => {
    return {
        type: DELETE_PLANT_SHAPE_START
    }
};

export const deletePlantShapeFail = err => {
    return {
        type: DELETE_PLANT_SHAPE_FAIL,
        payload: err
    }
};

export const deletePlantShapeSuccess = result => {
    return {
        type: DELETE_PLANT_SHAPE_SUCCESS,
        payload: result
    }
}