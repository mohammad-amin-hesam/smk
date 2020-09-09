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

const initState = {
    loading: false,
    crops: [],
    varieties: []
};

const reducer = (state=initState, action) => {
    switch (action.type) {
        case FETCH_CROPS:
            return {
                ...state
            };
        case FETCH_CROPS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_CROPS_FAIL:
            return {
                ...state,
                loading: false
            };
        case FETCH_CROPS_SUCCESS:
            return {
                ...state,
                loading: false,
                crops: action.payload
            };
        case FETCH_CROPS_BY_ID:
            return {
                ...state
            };
        case FETCH_CROPS_START_BY_ID:
            return {
                ...state,
                loading: true
            };
        case FETCH_CROPS_FAIL_BY_ID:
            return {
                ...state,
                loading: false
            };
        case FETCH_CROPS_SUCCESS_BY_ID:
            return {
                ...state,
                loading: false,
                crops: action.payload
            };
        case FETCH_VARIETIES_BY_ID:
            return {
                ...state
            };
        case FETCH_VARIETIES_BY_ID_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_VARIETIES_BY_ID_FAIL:
            return {
                ...state,
                loading: false
            };
        case FETCH_VARIETIES_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                varieties: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;