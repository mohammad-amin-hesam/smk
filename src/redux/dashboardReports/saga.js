import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  fetchDashboardReportsStart,
  fetchDashboardReportsFail,
  fetchDashboardReportsSuccess,
  fetchDashboardReportsStartByRatio,
  fetchDashboardReportsSuccessByRatio,
  fetchDashboardReportsFailByRatio,
  adjustIndicatorValueStart,
  adjustIndicatorValueFail,
  adjustIndicatorValueSuccess,
  adjustChartIndicatorStart,
  adjustChartIndicatorFail,
  adjustChartIndicatorSuccess,
  addNewIndicatorStart,
  addNewIndicatorFail,
  addNewIndicatorSuccess,
} from "./actions";
import {
  FETCH_DASHBOARD_REPORTS,
  FETCH_DASHBOARD_REPORTS_BY_RATIO,
  ADJUST_INDICATOR_VALUE,
  ADJUST_CHART_INDICATOR,
  ADD_NEW_INDICATOR,
} from "../../constants/actionTypes";
import API from "../../services/httpService";
import { Add } from "@material-ui/icons";

const getResponse = (pId, categoryId, divider, indicatorId, criteria) => {
  let ind = ``;
  if (indicatorId !== "") {
    ind = `,%22indicator_id%22:%22${indicatorId}%22`;
  }
  let cri = "";

  if (criteria.length > 0) {
    cri = cri + `,%22criteria%22:[%7B`;
    criteria.map((item, index) => {
      cri = cri + `%22${item.name}%22:[`;
      cri =
        cri +
        item.selected.map((select, i) =>
          i !== item.selected.length - 1
            ? `%22${select}%22`
            : `%22${select}%22]`
        );
      if (index !== criteria.length - 1) cri = cri + `,`;
    });
    cri = cri + `%7D]`;
  }

  let url =
    `/dashboard/${pId}/results?` +
    `options=%7B%22` +
    `category_id%22:1,` +
    `%22divider%22:%22${divider}%22` +
    ind +
    cri +
    `%7D`;

  return API.get(url);
};

const getResponseByRatio = (
  pId,
  categoryId,
  divider,
  indicatorId,
  criteria,
  ratio,
  resultId
) => {
  let ind = ``;
  if (indicatorId !== "") {
    ind = `,%22indicator_id%22:%22${indicatorId}%22`;
  } else {
    ind = `,%22indicator_id%22:null`;
  }
  let cri = "";

  if (criteria.length > 0) {
    cri = cri + `,%22criteria%22:[%7B`;
    criteria.map((item, index) => {
      cri = cri + `%22${item.name}%22:[`;
      cri =
        cri +
        item.selected.map((select, i) =>
          i !== item.selected.length - 1
            ? `%22${select}%22`
            : `%22${select}%22]`
        );
      if (index !== criteria.length - 1) cri = cri + `,`;
    });
    cri = cri + `%7D]`;
  } else {
    cri = `,%22criteria%22:null`;
  }
  let rat = ``;
  if (ratio !== "") {
    rat = `,%22ratio%22:%22${ratio}%22`;
  }
  let url =
    `/dashboard/${pId}/results/${resultId}?` +
    `options=%7B%22` +
    `category_id%22:1,` +
    `%22divider%22:%22${divider}%22` +
    ind +
    cri +
    rat +
    `%7D`;

  return API.get(url);
};

const putIndicatorValuesResponse = (adjustData) => {
  let url = `/dashboard/indicators/${adjustData.indicator_id}/${adjustData.report_type_id}/${adjustData.ratio}/${adjustData.divider_alias}/${adjustData.plantation_id}/values?value=%7B%22low%22:%22${adjustData.value.low}%22,%22medium%22:%22${adjustData.value.medium}%22,%22high%22:%22${adjustData.value.high}%22%7D`;
  return API.put(url, adjustData.value);
};

const postChartIndicatorResponse = (adjustData) => {
  // let url = `/dashboard/indicators///${adjustData.ratio}/${adjustData.divider_alias}//values?value=%7B%22low%22:%22${adjustData.value.low}%22,%22medium%22:%22${adjustData.value.medium}%22,%22high%22:%22${adjustData.value.high}%22%7D`;
  let url = `/dashboard/indicators/${adjustData.indicator_id}/${adjustData.report_type_id}/${adjustData.ratio}/plantations/${adjustData.plantation_id}/values`;
  return API.post(url, { value: adjustData.value, _method: "PUT" });
};

const postAddIndicatorResponse = (indicatorData) => {
  return API.post(`/dashboard/indicators`, indicatorData);
};

function* getDashboardReports(action) {
  yield put(fetchDashboardReportsStart());
  try {
    const response = yield call(
      getResponse,
      action.plantationId,
      action.categoryId,
      action.divider,
      action.indicatorId,
      action.criteriaId
    );
    yield put(fetchDashboardReportsSuccess(response.data));
  } catch (e) {
    yield put(fetchDashboardReportsFail(e));
  }
}

function* getDashboardReportsByRatio(action) {
  yield put(fetchDashboardReportsStartByRatio());
  try {
    const response = yield call(
      getResponseByRatio,
      action.plantationId,
      action.categoryId,
      action.divider,
      action.indicatorId,
      action.criteriaId,
      action.ratio,
      action.resultId
    );
    yield put(fetchDashboardReportsSuccessByRatio(response.data));
  } catch (e) {
    yield put(fetchDashboardReportsFailByRatio(e));
  }
}

function* putAdjustIndicatorValues(action) {
  yield put(adjustIndicatorValueStart());
  try {
    const response = yield call(putIndicatorValuesResponse, action.payload);
    yield put(adjustIndicatorValueSuccess(response.data));
  } catch (e) {
    yield put(adjustIndicatorValueFail(e));
  }
}

function* postChartAdjustIndicator(action) {
  yield put(adjustChartIndicatorStart());
  try {
    const response = yield call(postChartIndicatorResponse, action.payload);
    yield put(adjustChartIndicatorSuccess(response.data));
  } catch (e) {
    yield put(adjustChartIndicatorFail(e));
  }
}

function* postAddNewIndicator(action) {
  yield put(addNewIndicatorStart());
  try {
    const response = yield call(postAddIndicatorResponse, action.payload);
    yield put(addNewIndicatorSuccess(response));
  } catch (e) {
    yield put(addNewIndicatorFail(e));
  }
}

export function* watchGetDashboardReports() {
  yield takeEvery(FETCH_DASHBOARD_REPORTS, getDashboardReports);
  yield takeEvery(FETCH_DASHBOARD_REPORTS_BY_RATIO, getDashboardReportsByRatio);
  yield takeEvery(ADJUST_INDICATOR_VALUE, putAdjustIndicatorValues);
  yield takeEvery(ADJUST_CHART_INDICATOR, postChartAdjustIndicator);
  yield takeEvery(ADD_NEW_INDICATOR, postAddNewIndicator);
}

export default function* rootSaga() {
  yield all([fork(watchGetDashboardReports)]);
}
