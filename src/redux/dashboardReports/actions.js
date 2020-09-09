import {
  FETCH_DASHBOARD_REPORTS,
  FETCH_DASHBOARD_REPORTS_START,
  FETCH_DASHBOARD_REPORTS_FAIL,
  FETCH_DASHBOARD_REPORTS_SUCCESS,
  FETCH_DASHBOARD_REPORTS_BY_RATIO,
  FETCH_DASHBOARD_REPORTS_START_BY_RATIO,
  FETCH_DASHBOARD_REPORTS_FAIL_BY_RATIO,
  FETCH_DASHBOARD_REPORTS_SUCCESS_BY_RATIO,
  ADJUST_INDICATOR_VALUE,
  ADJUST_INDICATOR_VALUE_START,
  ADJUST_INDICATOR_VALUE_FAIL,
  ADJUST_INDICATOR_VALUE_SUCCESS,
  ADJUST_CHART_INDICATOR,
  ADJUST_CHART_INDICATOR_START,
  ADJUST_CHART_INDICATOR_FAIL,
  ADJUST_CHART_INDICATOR_SUCCESS,
  ADD_NEW_INDICATOR,
  ADD_NEW_INDICATOR_START,
  ADD_NEW_INDICATOR_FAIL,
  ADD_NEW_INDICATOR_SUCCESS,
} from "../../constants/actionTypes";

export const fetchDashboardReports = (requirements) => {
  return {
    type: FETCH_DASHBOARD_REPORTS,
    categoryId: requirements.category,
    divider: requirements.divider,
    indicatorId: requirements.indicator,
    plantationId: requirements.plantationId,
    criteriaId: requirements.criteria,
  };
};

export const fetchDashboardReportsByRatio = (requirements) => {
  return {
    type: FETCH_DASHBOARD_REPORTS_BY_RATIO,
    categoryId: requirements.category,
    divider: requirements.divider,
    indicatorId: requirements.indicator,
    plantationId: requirements.plantationId,
    criteriaId: requirements.criteria,
    ratio: requirements.ratio,
    resultId: requirements.resultId,
  };
};

export const fetchDashboardReportsStart = () => {
  return {
    type: FETCH_DASHBOARD_REPORTS_START,
  };
};

export const fetchDashboardReportsStartByRatio = () => {
  return {
    type: FETCH_DASHBOARD_REPORTS_START_BY_RATIO,
  };
};

export const fetchDashboardReportsFail = (err) => {
  return {
    type: FETCH_DASHBOARD_REPORTS_FAIL,
    error: err,
  };
};

export const fetchDashboardReportsFailByRatio = (err) => {
  return {
    type: FETCH_DASHBOARD_REPORTS_FAIL_BY_RATIO,
    errorRatio: err,
  };
};

export const fetchDashboardReportsSuccess = (reports) => {
  return {
    type: FETCH_DASHBOARD_REPORTS_SUCCESS,
    reports: reports,
  };
};

export const fetchDashboardReportsSuccessByRatio = (reports) => {
  return {
    type: FETCH_DASHBOARD_REPORTS_SUCCESS_BY_RATIO,
    ratioReport: reports,
  };
};

export const adjustIndicatorValue = (adjustData) => {
  return {
    type: ADJUST_INDICATOR_VALUE,
    payload: adjustData,
  };
};

export const adjustIndicatorValueStart = () => {
  return {
    type: ADJUST_INDICATOR_VALUE_START,
  };
};

export const adjustIndicatorValueFail = (error) => {
  return {
    type: ADJUST_INDICATOR_VALUE_FAIL,
    payload: error,
  };
};
export const adjustIndicatorValueSuccess = (adjustResult) => {
  return {
    type: ADJUST_INDICATOR_VALUE_SUCCESS,
    payload: adjustResult,
  };
};

export const adjustChartIndicator = (adjustData) => {
  return {
    type: ADJUST_CHART_INDICATOR,
    payload: adjustData,
  };
};

export const adjustChartIndicatorStart = () => {
  return {
    type: ADJUST_CHART_INDICATOR_START,
  };
};

export const adjustChartIndicatorFail = (error) => {
  return {
    type: ADJUST_CHART_INDICATOR_FAIL,
    payload: error,
  };
};

export const adjustChartIndicatorSuccess = (adjustResult) => {
  return {
    type: ADJUST_CHART_INDICATOR_SUCCESS,
    payload: adjustResult,
  };
};

export const addNewIndicator = (indicatorData) => {
  return {
    type: ADD_NEW_INDICATOR,
    payload: indicatorData,
  };
};

export const addNewIndicatorStart = () => {
  return {
    type: ADD_NEW_INDICATOR_START,
  };
};

export const addNewIndicatorFail = (err) => {
  return {
    type: ADD_NEW_INDICATOR_FAIL,
    payload: err,
  };
};

export const addNewIndicatorSuccess = (result) => {
  return {
    type: ADD_NEW_INDICATOR_SUCCESS,
    payload: result,
  };
};
