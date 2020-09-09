import {
  FETCH_IRRIGATION_OPERATIONS,
  FETCH_IRRIGATION_OPERATIONS_START,
  FETCH_IRRIGATION_OPERATIONS_FAIL,
  FETCH_IRRIGATION_OPERATIONS_SUCCESS,
  POST_IRRIGATION_OPERATIONS,
  POST_IRRIGATION_OPERATIONS_START,
  POST_IRRIGATION_OPERATIONS_FAIL,
  POST_IRRIGATION_OPERATIONS_SUCCESS,
  POST_IRRIGATION_OPERATIONS_CHECK_PROOF,
  POST_IRRIGATION_OPERATIONS_CHECK_PROOF_START,
  POST_IRRIGATION_OPERATIONS_CHECK_PROOF_FAIL,
  POST_IRRIGATION_OPERATIONS_CHECK_PROOF_SUCCESS,
} from "../../constants/actionTypes";

const initState = {
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_IRRIGATION_OPERATIONS:
      return {
        ...state,
      };
    case FETCH_IRRIGATION_OPERATIONS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IRRIGATION_OPERATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_IRRIGATION_OPERATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        operations: action.payload,
      };
    case POST_IRRIGATION_OPERATIONS:
      return {
        ...state,
      };
    case POST_IRRIGATION_OPERATIONS_START:
      return {
        ...state,
        loading: true,
      };
    case POST_IRRIGATION_OPERATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_IRRIGATION_OPERATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        postIrrigationResult: action.payload,
      };
    case POST_IRRIGATION_OPERATIONS_CHECK_PROOF:
      return {
        ...state,
      };
    case POST_IRRIGATION_OPERATIONS_CHECK_PROOF_START:
      return {
        ...state,
        loading: true,
      };
    case POST_IRRIGATION_OPERATIONS_CHECK_PROOF_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_IRRIGATION_OPERATIONS_CHECK_PROOF_SUCCESS:
      return {
        ...state,
        loading: false,
        checkProofResult: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
