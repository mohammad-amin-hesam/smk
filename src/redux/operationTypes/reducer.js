import {
    FETCH_OPERATION_TYPES,
    FETCH_OPERATION_TYPES_START,
    FETCH_OPERATION_TYPES_FAIL,
    FETCH_OPERATION_TYPES_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    types: []
};

const reducer = (state = initState , action) => {
    switch (action.type) {
        case FETCH_OPERATION_TYPES:
            return {
                ...state
            };
        case FETCH_OPERATION_TYPES_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_OPERATION_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                types: action.payload
            };
        case FETCH_OPERATION_TYPES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default :
            return {
                ...state
            }
    }
};

export default reducer;