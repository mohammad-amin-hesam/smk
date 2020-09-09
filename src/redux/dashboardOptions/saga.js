import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  fetchDashboardOptionsStart,
  fetchDashboardOptionsFail,
  fetchDashboardOptionsSuccess,
  fetchDashboardScreensStart,
  fetchDashboardScreensFail,
  fetchDashboardScreensSuccess,
  addToScreensStart,
  addToScreensFail,
  addToScreensSuccess,
  addNewScreenStart,
  addNewScreenSuccess,
  addNewScreenFail,
  fetchScreenReportsFail,
  fetchScreenReportsStart,
  fetchScreenReportsSuccess,
  deleteDashboardScreenStart,
  deleteDashboardScreenFail,
  deleteDashboardScreenSuccess,
} from "./actions";
import API from "../../services/httpService";
import {
  FETCH_DASHBOARD_OPTIONS,
  FETCH_DASHBOARD_SCREENS,
  ADD_TO_SCREENS,
  ADD_NEW_SCREEN,
  FETCH_SCREEN_REPORTS,
  DELETE_DASHBOARD_SCREEN,
} from "../../constants/actionTypes";

const getOptionResponse = (pId) => {
  return API.get(`/dashboard/${pId}/options`);
};

const getScreensResponse = (pId) => {
  return API.get(`/dashboard/${pId}/screens`);
};

const postToScreensResponse = (payloadOptions) => {
  let ind = ``;
  if (payloadOptions.options.indicator_id !== "") {
    ind = `,%22indicator_id%22:%22${payloadOptions.options.indicator_id}%22`;
  }

  let cri = "";
  if (payloadOptions.options.criteria.length > 0) {
    cri = cri + `,%22criteria%22:[%7B`;
    payloadOptions.options.criteria.map((item, index) => {
      cri = cri + `%22${item.name}%22:[`;
      cri =
        cri +
        item.selected.map((select, i) =>
          i !== item.selected.length - 1
            ? `%22${select}%22`
            : `%22${select}%22]`
        );
      if (index !== payloadOptions.options.criteria.length - 1) cri = cri + `,`;
    });
    cri = cri + `%7D]`;
  } else {
    cri = `,%22criteria%22:null`;
  }
  let rat = ``;
  if (payloadOptions.options.ratio !== "") {
    rat = `,%22ratio%22:%22${payloadOptions.options.ratio}%22`;
  }

  let optionsUrl =
    `%22options%22:%7B%22` +
    `category_id%22:1,` +
    `%22divider%22:%22${payloadOptions.options.divider}%22` +
    ind +
    cri +
    rat +
    `%7D`;

  let url =
    `/dashboard/reports?options=%7B%22reporter_type_id%22:%22${payloadOptions.reporter_type_id}%22,%22report_title%22:%22${payloadOptions.report_title}%22,%22screen_id%22:%22${payloadOptions.screen_id}%22,` +
    optionsUrl +
    `%7D`;
  let options = payloadOptions.options;
  let tempCriteria = payloadOptions.options.criteria;
  let criterias = [];
  if (tempCriteria) {
    tempCriteria.map((crt, index) => {
      let c = "{";
      c = c + crt.name + ":" + crt.selected + "}";
      if (index !== tempCriteria.length - 1) {
        c = c + ",";
      }
      criterias.push(c);
    });
  } else {
    criterias = null;
  }
  options.criteria = criterias;

  return API.post(url, options);
};

const getScreenReportsReportsResponse = (scId) => {
  return API.get(`/dashboard/screens/${scId}/reports`);
};

const deleteDashboardScreenResponse = (scId) => {
  return API.delete(`/dashboard/screens/${scId}`);
};

function* getDashboardOptions(action) {
  yield put(fetchDashboardOptionsStart());
  try {
    const response = yield call(getOptionResponse, action.payload);
    yield put(fetchDashboardOptionsSuccess(response.data));
  } catch (e) {
    yield put(fetchDashboardOptionsFail(e));
  }
}

function* getDashboardScreens(action) {
  yield put(fetchDashboardScreensStart());
  try {
    const response = yield call(getScreensResponse, action.payload);
    const fetchedScreeens = [];
    for (let key in response.data) {
      fetchedScreeens.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(fetchDashboardScreensSuccess(fetchedScreeens));
  } catch (e) {
    yield put(fetchDashboardScreensFail(e));
  }
}

function* postAddToScreens(action) {
  yield put(addToScreensStart());
  try {
    const response = yield call(postToScreensResponse, action.payload);
    yield put(addToScreensSuccess(response));
  } catch (e) {
    yield put(addToScreensFail(e));
  }
}

function* getScreenReports(action) {
  yield put(fetchScreenReportsStart());
  try {
    const response = yield call(
      getScreenReportsReportsResponse,
      action.payload
    );
    yield put(fetchScreenReportsSuccess(response.data));
  } catch (e) {
    yield put(fetchScreenReportsFail(e));
  }
}

function* deleteDashboardScreen(action) {
  yield put(deleteDashboardScreenStart());
  try {
    const response = yield call(deleteDashboardScreenResponse, action.payload);
    yield put(deleteDashboardScreenSuccess(response.data));
  } catch (e) {
    yield put(deleteDashboardScreenFail(e));
  }
}

export function* watchGetDashboardOptions() {
  yield takeEvery(FETCH_DASHBOARD_OPTIONS, getDashboardOptions);
  yield takeEvery(FETCH_DASHBOARD_SCREENS, getDashboardScreens);
  yield takeEvery(ADD_TO_SCREENS, postAddToScreens);
  yield takeEvery(FETCH_SCREEN_REPORTS, getScreenReports);
  yield takeEvery(DELETE_DASHBOARD_SCREEN, deleteDashboardScreen);

  // yield takeEvery(ADD_NEW_SCREEN, postAddNewScreen);
}

export default function* rootSaga() {
  yield all([fork(watchGetDashboardOptions)]);
}
