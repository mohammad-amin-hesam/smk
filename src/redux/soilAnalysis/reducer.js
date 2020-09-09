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


const initState = {
    loading: false,
    analyses: []
};

const reducer = (state = initState, action ) => {
    switch (action.type) {
        case FETCH_SOIL_ANALYSES:
            return {
                ...state,
                plantationId: action.payload,
            };
        case FETCH_SOIL_ANALYSES_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SOIL_ANALYSES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_SOIL_ANALYSES_SUCCESS:
            return {
                ...state,
                loading: false,
                analyses: action.payload
            };
        case ADD_EDIT_SOIL_ANALYSES:
            return {
                ...state,
                analyseId: action.analyseId,
                postData: action.postData
            };
        case ADD_EDIT_SOIL_ANALYSES_START:
            return {
                ...state,
                loading: true
            };
        case ADD_EDIT_SOIL_ANALYSES_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case ADD_EDIT_SOIL_ANALYSES_SUCCESS:
            return {
                ...state,
                loading: false,
                addEditResult: action.payload
            };
        case SUBMIT_SOIL_ANALYSES:
            return {
                ...state
            };
        case SUBMIT_SOIL_ANALYSES_START:
            return {
                ...state,
                loading: true
            };
        case SUBMIT_SOIL_ANALYSES_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case SUBMIT_SOIL_ANALYSES_SUCCESS:
            return {
                ...state,
                loading: false,
                submitResult: action.payload
            };
        case DELETE_SOIL_ANALYSES:
            return {
                ...state
            };
        case DELETE_SOIL_ANALYSES_START:
            return {
                ...state,
                loading: true
            };
        case DELETE_SOIL_ANALYSES_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case DELETE_SOIL_ANALYSES_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteResult: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;