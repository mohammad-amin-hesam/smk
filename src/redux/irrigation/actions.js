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

export const fetchIrrigationOperations = (yearId, plantationId, patternId) => {
  return {
    type: FETCH_IRRIGATION_OPERATIONS,
    yearId: yearId,
    plantationId: plantationId,
    patternId: patternId,
  };
};

export const fetchIrrigationOperationsStart = () => {
  return {
    type: FETCH_IRRIGATION_OPERATIONS_START,
  };
};

export const fetchIrrigationOperationsFail = (err) => {
  return {
    type: FETCH_IRRIGATION_OPERATIONS_FAIL,
    payload: err,
  };
};

export const fetchIrrigationOperationsSuccess = (operations) => {
  return {
    type: FETCH_IRRIGATION_OPERATIONS_SUCCESS,
    payload: operations,
  };
};

export const postIrrigationOperation = (postData) => {
  return {
    type: POST_IRRIGATION_OPERATIONS,
    payload: postData,
  };
};

export const postIrrigationOperationStart = () => {
  return {
    type: POST_IRRIGATION_OPERATIONS_START,
  };
};

export const postIrrigationOperationFail = (err) => {
  return {
    type: POST_IRRIGATION_OPERATIONS_FAIL,
    payload: err,
  };
};

export const postIrrigationOperationSuccess = (result) => {
  return {
    type: POST_IRRIGATION_OPERATIONS_SUCCESS,
    payload: result,
  };
};

export const postIrrigationOperationCheckProof = (postData) => {
  return {
    type: POST_IRRIGATION_OPERATIONS_CHECK_PROOF,
    payload: postData,
  };
};

export const postIrrigationOperationCheckProofStart = () => {
  return {
    type: POST_IRRIGATION_OPERATIONS_CHECK_PROOF_START,
  };
};

export const postIrrigationOperationCheckProofFail = (err) => {
  return {
    type: POST_IRRIGATION_OPERATIONS_CHECK_PROOF_FAIL,
    payload: err,
  };
};

export const postIrrigationOperationCheckProofSuccess = (result) => {
  return {
    type: POST_IRRIGATION_OPERATIONS_CHECK_PROOF_SUCCESS,
    payload: result,
  };
};
