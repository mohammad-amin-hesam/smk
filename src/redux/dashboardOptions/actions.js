import {
  FETCH_DASHBOARD_OPTIONS,
  FETCH_DASHBOARD_OPTIONS_START,
  FETCH_DASHBOARD_OPTIONS_FAIL,
  FETCH_DASHBOARD_OPTIONS_SUCCESS,
  SET_CRITERIA_SELECTED,
  FETCH_DASHBOARD_SCREENS,
  FETCH_DASHBOARD_SCREENS_START,
  FETCH_DASHBOARD_SCREENS_FAIL,
  FETCH_DASHBOARD_SCREENS_SUCCESS,
  ADD_TO_SCREENS,
  ADD_TO_SCREENS_START,
  ADD_TO_SCREENS_FAIL,
  ADD_TO_SCREENS_SUCCESS,
  ADD_NEW_SCREEN,
  ADD_NEW_SCREEN_START,
  ADD_NEW_SCREEN_FAIL,
  ADD_NEW_SCREEN_SUCCESS,
  FETCH_SCREEN_REPORTS,
  FETCH_SCREEN_REPORTS_START,
  FETCH_SCREEN_REPORTS_FAIL,
  FETCH_SCREEN_REPORTS_SUCCESS,
  DELETE_DASHBOARD_SCREEN,
  DELETE_DASHBOARD_SCREEN_START,
  DELETE_DASHBOARD_SCREEN_FAIL,
  DELETE_DASHBOARD_SCREEN_SUCCESS,
} from "../../constants/actionTypes";

export const fetchDashboardOptions = (pId) => {
  return {
    type: FETCH_DASHBOARD_OPTIONS,
    payload: pId,
  };
};

export const fetchDashboardOptionsStart = () => {
  return {
    type: FETCH_DASHBOARD_OPTIONS_START,
  };
};

export const fetchDashboardOptionsFail = (err) => {
  return {
    type: FETCH_DASHBOARD_OPTIONS_FAIL,
    payload: err,
  };
};

export const fetchDashboardOptionsSuccess = (options) => {
  return {
    type: FETCH_DASHBOARD_OPTIONS_SUCCESS,
    payload: options,
  };
};

export const setCriteriaSelected = (criterias) => {
  return {
    type: SET_CRITERIA_SELECTED,
    payload: criterias,
  };
};

export const fetchDashboardScreens = (pId) => {
  return {
    type: FETCH_DASHBOARD_SCREENS,
    payload: pId,
  };
};

export const fetchDashboardScreensStart = () => {
  return {
    type: FETCH_DASHBOARD_SCREENS_START,
  };
};

export const fetchDashboardScreensFail = (err) => {
  return {
    type: FETCH_DASHBOARD_SCREENS_FAIL,
    payload: err,
  };
};

export const fetchDashboardScreensSuccess = (screens) => {
  return {
    type: FETCH_DASHBOARD_SCREENS_SUCCESS,
    payload: screens,
  };
};

export const addToScreens = (options) => {
  return {
    type: ADD_TO_SCREENS,
    payload: options,
  };
};

export const addToScreensStart = () => {
  return {
    type: ADD_TO_SCREENS_START,
  };
};

export const addToScreensFail = (err) => {
  return {
    type: ADD_TO_SCREENS_FAIL,
    payload: err,
  };
};

export const addToScreensSuccess = (result) => {
  return {
    type: ADD_TO_SCREENS_SUCCESS,
    payload: result,
  };
};

export const addNewScreen = (pId, title) => {
  return {
    type: ADD_NEW_SCREEN,
    plantationId: pId,
    title: title,
  };
};

export const addNewScreenStart = () => {
  return {
    type: ADD_NEW_SCREEN_START,
  };
};

export const addNewScreenFail = (err) => {
  return {
    type: ADD_NEW_SCREEN_FAIL,
    payload: err,
  };
};

export const addNewScreenSuccess = (result) => {
  return {
    type: ADD_NEW_SCREEN_SUCCESS,
    payload: result,
  };
};

export const fetchScreenReports = (scId) => {
  return {
    type: FETCH_SCREEN_REPORTS,
    payload: scId,
  };
};

export const fetchScreenReportsStart = () => {
  return {
    type: FETCH_SCREEN_REPORTS_START,
  };
};

export const fetchScreenReportsFail = (err) => {
  return {
    type: FETCH_SCREEN_REPORTS_FAIL,
    payload: err,
  };
};

export const fetchScreenReportsSuccess = (reports) => {
  return {
    type: FETCH_SCREEN_REPORTS_SUCCESS,
    payload: reports,
  };
};

export const deleteDashboardScreen = (scId) => {
  return {
    type: DELETE_DASHBOARD_SCREEN,
    payload: scId,
  };
};

export const deleteDashboardScreenStart = () => {
  return {
    type: DELETE_DASHBOARD_SCREEN_START,
  };
};

export const deleteDashboardScreenFail = (err) => {
  return {
    type: DELETE_DASHBOARD_SCREEN_FAIL,
    payload: err,
  };
};

export const deleteDashboardScreenSuccess = (result) => {
  return {
    type: DELETE_DASHBOARD_SCREEN_SUCCESS,
    payload: result,
  };
};
