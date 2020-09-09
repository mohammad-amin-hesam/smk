import {
    FETCH_WATER_TEST,
    FETCH_WATER_TEST_START,
    FETCH_WATER_TEST_FAIL,
    FETCH_WATER_TEST_SUCCESS,
    ADD_EDIT_WATER_TEST,
    ADD_EDIT_WATER_TEST_START,
    ADD_EDIT_WATER_TEST_FAIL,
    ADD_EDIT_WATER_TEST_SUCCESS,
    SUBMIT_WATER_TEST,
    SUBMIT_WATER_TEST_START,
    SUBMIT_WATER_TEST_FAIL,
    SUBMIT_WATER_TEST_SUCCESS,
    DELETE_WATER_TEST,
    DELETE_WATER_TEST_START,
    DELETE_WATER_TEST_FAIL,
    DELETE_WATER_TEST_SUCCESS,
    FETCH_WATER_TEST_BY_RESOURCE,
    FETCH_WATER_TEST_BY_RESOURCE_START,
    FETCH_WATER_TEST_BY_RESOURCE_FAIL,
    FETCH_WATER_TEST_BY_RESOURCE_SUCCESS
} from "../../constants/actionTypes";

const initState = {
    loading: false,
    tests: []
};

const reducer = (state = initState, action ) => {
    switch (action.type) {
        case FETCH_WATER_TEST:
            return {
                ...state,
                plantationId: action.plantationId,
                yearId: action.yearId
            };
        case FETCH_WATER_TEST_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_WATER_TEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_WATER_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                tests: action.payload
            };
        case ADD_EDIT_WATER_TEST:
            return {
                ...state,
                testId: action.testId,
                postData: action.postData
            };
        case ADD_EDIT_WATER_TEST_START:
            return {
                ...state,
                loading: true
            };
        case ADD_EDIT_WATER_TEST_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case ADD_EDIT_WATER_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                addEditResult: action.payload
            };
        case SUBMIT_WATER_TEST:
            return {
                ...state
            };
        case SUBMIT_WATER_TEST_START:
            return {
                ...state,
                loading: true
            };
        case SUBMIT_WATER_TEST_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case SUBMIT_WATER_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                submitResult: action.payload
            };
        case DELETE_WATER_TEST:
            return {
                ...state
            };
        case DELETE_WATER_TEST_START:
            return {
                ...state,
                loading: true
            };
        case DELETE_WATER_TEST_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case DELETE_WATER_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteResult: action.payload
            };
        case FETCH_WATER_TEST_BY_RESOURCE:
            return {
                ...state
            };
        case FETCH_WATER_TEST_BY_RESOURCE_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_WATER_TEST_BY_RESOURCE_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case FETCH_WATER_TEST_BY_RESOURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                tests: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;