import {
    FETCH_MACHINERY_TYPES,
    FETCH_MACHINERY_TYPES_START,
    FETCH_MACHINERY_TYPES_FAIL,
    FETCH_MACHINERY_TYPES_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    types: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_MACHINERY_TYPES:
            return {
                ...state
            };
        case FETCH_MACHINERY_TYPES_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_MACHINERY_TYPES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_MACHINERY_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                types: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;