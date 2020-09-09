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

const initState = {
  loading: false,
  options: [],
  criterias: [],
  screens: [],
  // newScreenResult: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_OPTIONS:
      return {
        ...state,
        plantationId: action.payload,
      };
    case FETCH_DASHBOARD_OPTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DASHBOARD_OPTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_DASHBOARD_OPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload,
      };
    case SET_CRITERIA_SELECTED:
      return {
        ...state,
        criterias: [...action.payload],
      };
    case FETCH_DASHBOARD_SCREENS:
      return {
        ...state,
        plantationId: action.payload,
      };
    case FETCH_DASHBOARD_SCREENS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DASHBOARD_SCREENS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_DASHBOARD_SCREENS_SUCCESS:
      return {
        ...state,
        loading: false,
        screens: action.payload,
      };
    case ADD_TO_SCREENS:
      return {
        ...state,
        addOptions: action.payload,
      };
    case ADD_TO_SCREENS_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_SCREENS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_SCREENS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case ADD_NEW_SCREEN:
      return {
        ...state,
        plantationId: action.pId,
        title: action.title,
      };
    case ADD_NEW_SCREEN_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_SCREEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_NEW_SCREEN_SUCCESS:
      return {
        ...state,
        loading: false,
        newScreenResult: action.payload,
      };
    case DELETE_DASHBOARD_SCREEN:
      return {
        ...state,
      };
    case DELETE_DASHBOARD_SCREEN_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DASHBOARD_SCREEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_DASHBOARD_SCREEN_SUCCESS:
      return {
        ...state,
        loading: false,
        screenDeleteResult: action.payload,
      };
    case FETCH_SCREEN_REPORTS:
      return {
        ...state,
      };
    case FETCH_SCREEN_REPORTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SCREEN_REPORTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_SCREEN_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        screenReports: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
