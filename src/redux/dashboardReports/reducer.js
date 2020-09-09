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
    ADD_NEW_INDICATOR_SUCCESS

} from "../../constants/actionTypes";

const initState = {
    loading: false,
    reports: [],
    ratioLoading: false,
    ratioReports: [],
    adjustResult: {},
    addIndicatorResult: {}
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DASHBOARD_REPORTS :
            return {
                ...state,
                categoryId: action.categoryId,
                divider: action.divider,
                indicatorId: action.indicatorId,
                plantationId: action.plantationId,
                criteriaId: action.criteriaId
            };
        case FETCH_DASHBOARD_REPORTS_BY_RATIO :
            return {
                ...state,
                categoryId: action.categoryId,
                divider: action.divider,
                indicatorId: action.indicatorId,
                plantationId: action.plantationId,
                criteriaId: action.criteriaId,
                ratio: action.ratio,
                resultId: action.resultId
            };
        case FETCH_DASHBOARD_REPORTS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_DASHBOARD_REPORTS_START_BY_RATIO:
            return {
                ...state,
                ratioLoading: true
            };
        case FETCH_DASHBOARD_REPORTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case FETCH_DASHBOARD_REPORTS_FAIL_BY_RATIO:
            return {
                ...state,
                ratioLoading: false,
                ratioError: action.errorRatio
            };
        case FETCH_DASHBOARD_REPORTS_SUCCESS:
            return {
                ...state,
                loading: false,
                reports: action.reports
            };
        case FETCH_DASHBOARD_REPORTS_SUCCESS_BY_RATIO:
            return {
                ...state,
                ratioLoading: false,
                ratioReports: action.ratioReport
            };
        case ADJUST_INDICATOR_VALUE:
            return {
                ...state,
                adjustData: action.payload
            };
        case ADJUST_INDICATOR_VALUE_START:
            return {
                ...state,
                loading: true
            };
        case ADJUST_INDICATOR_VALUE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADJUST_INDICATOR_VALUE_SUCCESS:
            return {
                ...state,
                loading: false,
                adjustResult: action.payload
            };
        case ADJUST_CHART_INDICATOR:
            return {
                ...state,
                adjustData: action.payload
            };
        case ADJUST_CHART_INDICATOR_START:
            return {
                ...state,
                loading: true
            };
        case ADJUST_CHART_INDICATOR_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADJUST_CHART_INDICATOR_SUCCESS:
            return {
                ...state,
                loading: false,
                adjustResult: action.payload
            };
        case ADD_NEW_INDICATOR:
            return {
                ...state,
                indicatorData: action.payload
            };
        case ADD_NEW_INDICATOR_START:
            return {
                ...state,
                loading: true
            };
        case ADD_NEW_INDICATOR_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADD_NEW_INDICATOR_SUCCESS:
            return {
                ...state,
                loading: false,
                addIndicatorResult: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;