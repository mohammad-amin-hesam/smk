import {
    FETCH_WATER_RESOURCE,
    FETCH_WATER_RESOURCE_START,
    FETCH_WATER_RESOURCE_FAIL,
    FETCH_WATER_RESOURCE_SUCCESS,
    SET_WATER_RESOURCE_ACTIVE,
    FETCH_RESOURCE_DETAIL,
    FETCH_RESOURCE_DETAIL_START,
    FETCH_RESOURCE_DETAIL_FAIL,
    FETCH_RESOURCE_DETAIL_SUCCESS,
    FETCH_WATER_RESOURCE_BY_PLANTATION,
    FETCH_WATER_RESOURCE_BY_PLANTATION_START,
    FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL,
    FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS,
    FETCH_WATER_RESOURCE_USAGE,
    FETCH_WATER_RESOURCE_USAGE_START,
    FETCH_WATER_RESOURCE_USAGE_FAIL,
    FETCH_WATER_RESOURCE_USAGE_SUCCESS,
} from '../../constants/actionTypes'

const initState = {
    loading: false,
    active: false,
    resources: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_WATER_RESOURCE :
            return {
                ...state,
                plantationId: action.pId,
                yearId: action.yId
            };
        case FETCH_WATER_RESOURCE_START :
            return {
                ...state,
                loading: true
            };
        case FETCH_WATER_RESOURCE_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_WATER_RESOURCE_SUCCESS :
            return {
                ...state,
                loading: false,
                resources: action.payload
            };
        case SET_WATER_RESOURCE_ACTIVE :
            return {
                ...state,
                active: action.payload
            };
        case FETCH_RESOURCE_DETAIL :
            return {
                ...state,
                resourceId: action.resourceId,
                yearId: action.yId
            };
        case FETCH_RESOURCE_DETAIL_START :
            return {
                ...state,
                loading: true
            };
        case FETCH_RESOURCE_DETAIL_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_RESOURCE_DETAIL_SUCCESS :
            return {
                ...state,
                loading: false,
                detail: action.payload
            };
        case FETCH_WATER_RESOURCE_BY_PLANTATION :
            return {
                ...state
            };
        case FETCH_WATER_RESOURCE_BY_PLANTATION_START :
            return {
                ...state,
                loading: true
            };
        case FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS :
            return {
                ...state,
                loading: false,
                resourcesByPlantation: action.payload
            };
        case FETCH_WATER_RESOURCE_USAGE :
            return {
                ...state
            };
        case FETCH_WATER_RESOURCE_USAGE_START :
            return {
                ...state,
                loading: true
            };
        case FETCH_WATER_RESOURCE_USAGE_FAIL :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_WATER_RESOURCE_USAGE_SUCCESS :
            return {
                ...state,
                loading: false,
                usage: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer
