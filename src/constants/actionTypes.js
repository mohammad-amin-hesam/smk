/* AUTH */
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILD = 'LOGIN_USER_FAILD'
export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'

/* modal */
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE'

/* COMPANY */
export const LIST_COMPANIES = 'LIST_COMPANIES'
export const LIST_COMPANIES_SUCCESS = 'LIST_COMPANIES_SUCCESS'
export const LIST_COMPANIES_FAILD = 'LIST_COMPANIES_FAILD'
export const LIST_COMPANIES_COORDS = 'LIST_COMPANIES_COORDS'

/* FARMS */
export const LIST_FARMS = 'LIST_FARMS'
export const LIST_FARMS_BY_COMPANY_ID = 'LIST_COMPANY_BY_ID'
export const LIST_FARMS_SUCCESS = 'LIST_FARMS_SUCCESS'
export const LIST_FARMS_FAILD = 'LIST_FARMS_FAILD'
export const FETCH_FARMS = 'FETCH_FARMS'
export const FETCH_FARMS_START = 'FETCH_FARMS_START'
export const FETCH_FARMS_FAIL = 'FETCH_FARMS_FAIL'
export const FETCH_FARMS_SUCCESS = 'FETCH_FARMS_SUCCESS'

/* YEARS */
export const LIST_YEARS = 'LIST_YEARS'
export const LIST_YEARS_SUCCESS = 'LIST_YEARS_SUCCESS'
export const LIST_YEARS_FAILD = 'LIST_YEARS_FAILD'

/*Fields */
export const LIST_FIELDS = 'LIST_FIELDS'
export const LIST_FIELDS_BY_FARM_ID = 'LIST_FIELDS_BY_FARM_ID'
export const LIST_FIELDS_SUCCESS = 'LIST_FIELDS_SUCCESS'
export const LIST_FIELDS_FAILD = 'LIST_FIELDS_FAILD'
export const FETCH_ALL_FIELDS = 'FETCH_ALL_FIELDS'
export const FETCH_ALL_FIELDS_START = 'FETCH_ALL_FIELDS_START'
export const FETCH_ALL_FIELDS_FAIL = 'FETCH_ALL_FIELDS_FAIL'
export const FETCH_ALL_FIELDS_SUCCESS = 'FETCH_ALL_FIELDS_SUCCESS'

/*Section */
export const LIST_SECTION = 'LIST_SECTION '
export const LIST_SECTION_BY_FARM_ID = 'LIST_SECTION_BY_FARM_ID'
export const LIST_SECTION_SUCCESS = 'LIST_SECTION_SUCCESS'
export const LIST_SECTION_FAILD = 'LIST_SECTION_FAILD'

/*Unit */
export const LIST_UNITS = 'LIST_UNITS '
export const LIST_UNITS_BY_SECTION_ID = 'LIST_UNITS_BY_SECTION_ID'
export const LIST_UNITS_SUCCESS = 'LIST_UNITS_SUCCESS'
export const LIST_UNITS_FAILD = 'LIST_UNITS_FAILD'

/*Pieces */
export const LIST_PIECES = 'LIST_PIECES'
export const LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID =
  'LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID'
export const LIST_PIECES_SUCCESS = 'LIST_PIECES_SUCCESS'
export const LIST_PIECES_FAILD = 'LIST_PIECES_FAILD'

/*Plants */
export const LIST_PLANTS = 'LIST_PLANTS'
export const LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID =
  ' LIST_PLANTS_BY_PIECE_ID_AND_YEAR_ID'
export const LIST_PLANTS_SUCCESS = 'LIST_PLANTS_SUCCESS'
export const LIST_PLANTS_FAILD = 'LIST_PLANTS_FAILD'

/*Notifation */
export const LIST_NOTIFICATION = 'LIST_NOTIFICATION'
export const LIST_NOTIFICATION_SUCCESS = 'LIST_NOTIFICATION_SUCCESS'
export const LIST_NOTIFICATION_FAILD = 'LIST_NOTIFICATION_FAILD'

// plantation state
export const SET_PLANTATION_STATE = 'SET_PLANTATION_STATE'
export const GET_PLANTATION_STATE = 'GET_PLANTATION_STATE'
export const SET_PATTERN_PLANTING = 'SET_PATTERN_PLANTING'
export const SET_PLANTATION_DIRECTION = 'SET_PLANTATION_DIRECTION'

/*FileUplad */
export const FILE_UPLOAD = 'FILE_UPLOAD'
export const FILE_UPLOAD_BY_PLANTATION_ID = 'FILE_UPLOAD_BY_PLANTATION_ID'
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS'
export const FILE_UPLOAD_FAILD = 'FILE_UPLOAD_FAILD'
export const GET_LIST_FILES_UPLOAD = 'GET_LIST_FILES_UPLOAD'
export const GET_LIST_FILES_UPLOAD_SUCCESS = 'GET_LIST_FILES_UPLOAD_SUCCESS'
export const GET_LIST_FILES_UPLOAD_FAILD = 'GET_LIST_FILES_UPLOAD_FAILD'
export const GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID =
  ' GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID'

/*customers */
export const LIST_CUSTOMERS = 'LIST_CUSTOMERS'
export const LIST_CUSTOMERS_SUCCESS = 'LIST_CUSTOMERS_SUCCESS'
export const LIST_CUSTOMERS_FAILD = 'LIST_CUSTOMERS_FAILD'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS'
export const ADD_CUSTOMER_FAILD = 'ADD_CUSTOMER_FAILD'
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER'
export const EDIT_CUSTOMER_SUCCESS = 'EDIT_CUSTOMER_SUCCESS'
export const EDIT_CUSTOMER_FAILD = 'EDIT_CUSTOMER_FAILD'

// water resources
export const FETCH_WATER_RESOURCE = 'FETCH_WATER_RESOURCE'
export const FETCH_WATER_RESOURCE_START = 'FETCH_WATER_RESOURCE_START'
export const FETCH_WATER_RESOURCE_FAIL = 'FETCH_WATER_RESOURCE_FAIL'
export const FETCH_WATER_RESOURCE_SUCCESS = 'FETCH_WATER_RESOURCE_SUCCESS'
export const SET_WATER_RESOURCE_ACTIVE = 'SET_WATER_RESOURCE_ACTIVE'
export const FETCH_RESOURCE_DETAIL = 'FETCH_RESOURCE_DETAIL'
export const FETCH_RESOURCE_DETAIL_START = 'FETCH_RESOURCE_DETAIL_START'
export const FETCH_RESOURCE_DETAIL_FAIL = 'FETCH_RESOURCE_DETAIL_FAIL'
export const FETCH_RESOURCE_DETAIL_SUCCESS = 'FETCH_RESOURCE_DETAIL_SUCCESS'
export const FETCH_WATER_RESOURCE_BY_PLANTATION =
  'FETCH_WATER_RESOURCE_BY_PLANTATION'
export const FETCH_WATER_RESOURCE_BY_PLANTATION_START =
  'FETCH_WATER_RESOURCE_BY_PLANTATION_START'
export const FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL =
  'FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL'
export const FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS =
  'FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS'
export const FETCH_WATER_RESOURCE_USAGE = 'FETCH_WATER_RESOURCE_USAGE'
export const FETCH_WATER_RESOURCE_USAGE_START =
  'FETCH_WATER_RESOURCE_USAGE_START'
export const FETCH_WATER_RESOURCE_USAGE_FAIL = 'FETCH_WATER_RESOURCE_USAGE_FAIL'
export const FETCH_WATER_RESOURCE_USAGE_SUCCESS =
  'FETCH_WATER_RESOURCE_USAGE_SUCCESS'

// weatherStation
export const FETCH_WEATHER_STATION = 'FETCH_WEATHER_STATION'
export const FETCH_WEATHER_STATION_START = 'FETCH_WEATHER_STATION_START'
export const FETCH_WEATHER_STATION_FAIL = 'FETCH_WEATHER_STATION_FAIL'
export const FETCH_WEATHER_STATION_SUCCESS = 'FETCH_WEATHER_STATION_SUCCESS'
export const SET_WEATHER_STATION_ACTIVE = 'SET_WEATHER_STATION_ACTIVE'

// weather current
export const FETCH_WEATHER_CURRENT = 'FETCH_WEATHER_CURRENT'
export const FETCH_WEATHER_CURRENT_START = 'FETCH_WEATHER_CURRENT_START'
export const FETCH_WEATHER_CURRENT_FAIL = 'FETCH_WEATHER_CURRENT_FAIL'
export const FETCH_WEATHER_CURRENT_SUCCESS = 'FETCH_WEATHER_CURRENT_SUCCESS'

// weather forecast
export const FETCH_WEATHER_FORECAST = 'FETCH_WEATHER_FORECAST'
export const FETCH_WEATHER_FORECAST_START = 'FETCH_WEATHER_FORECAST_START'
export const FETCH_WEATHER_FORECAST_FAIL = 'FETCH_WEATHER_FORECAST_FAIL'
export const FETCH_WEATHER_FORECAST_SUCCESS = 'FETCH_WEATHER_FORECAST_SUCCESS'

// satellite image
export const FETCH_SATELLITE_IMG = 'FETCH_SATELLITE_IMG'
export const FETCH_SATELLITE_IMG_START = 'FETCH_SATELLITE_IMG_START'
export const FETCH_SATELLITE_IMG_FAIL = 'FETCH_SATELLITE_IMG_FAIL'
export const FETCH_SATELLITE_IMG_SUCCESS = 'FETCH_SATELLITE_IMG_SUCCESS'
export const SET_SATELLITE_IMG_ACTIVE = 'SET_SATELLITE_IMG_ACTIVE'
export const SET_SATELLITE_INDEX = 'SET_SATELLITE_SRC'

// NewPattern & PatternManagment
export const NEW_PATTERN = 'NEW_PATTERN'
export const NEW_PATTERN_SUCCESS = 'NEW_PATTERN_SUCCESS'
export const NEW_PATTERN_FAILD = 'NEW_PATTERN_FAILD'
export const LIST_PATTERNS = 'LIST_PATTERNS'
export const LIST_PATTERNS_SUCCESS = 'LIST_PATTERNS_SUCCESS'
export const LIST_PATTERNS_FAILD = 'LIST_PATTERNS_FAILD'
export const REAL_PATTERNS = 'REAL_PATTERNS'
export const PATTERN_ID = 'PATTERN_ID'
export const CHANGE_OPTION = 'CHANGE_OPTION'
export const REAL_PATTERNS_SUCCESS = 'REAL_PATTERNS_SUCCESS'
export const REAL_PATTERNS_FAILD = ' REAL_PATTERNS_FAILD'
export const LIST_PATTERNS_BY_PLANTING_YEAR_ID =
  'LIST_PATTERNS_BY_PLANTING_YEAR_ID'
export const LIST_PATTERNS_BY_PLANTING_YEAR_ID_SUCCESS =
  'LIST_PATTERNS_BY_PLANTING_YEAR_ID_SUCCESS'
export const LIST_PATTERNS_BY_PLANTING_YEAR_ID_FAILD =
  'LIST_PATTERNS_BY_PLANTING_YEAR_ID_FAILD'
export const LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID =
  'LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID'
export const LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS =
  'LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_SUCCESS'
export const LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD =
  'LIST_PATTERN_PLANTING_BY_PATTERN_ID_AND_PLANTATION_ID_FAILD'
export const LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID =
  'LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID'
export const LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS =
  'LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_SUCCESS'
export const LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD =
  'LIST_PATTERNS_BY_PLANTATION_ID_PATTERN_ID_COMPARISION_PATTERN_ID_FAILD'

export const LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID =
  'LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID'
export const LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS =
  'LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS'
export const LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD =
  'LIST_OPERATION_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD'
export const LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID =
  'LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID'
export const LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS =
  'LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS'
export const LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD =
  'LIST_MACHINERY_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD'
export const LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID =
  'LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID'
export const LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS =
  'LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS'
export const LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD =
  'LIST_HUMAN_RESOURCE_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD'
export const LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID =
  'LIST_RAW_MATERIAL_BY_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID'
export const LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS =
  'LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_SUCCESS'
export const LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD =
  'LIST_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATION_ID_BY_PATTERN_ID_FAILD'
export const BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID =
  'BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID'
export const BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS =
  'BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS'
export const BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD =
  'BY_OPERATION_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD'
export const BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID =
  'BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID'
export const BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS =
  'BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS'
export const BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD =
  'BY_HUMAN_RESOURCE_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD'
export const BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID =
  'BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID'
export const BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS =
  'BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS'
export const BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD =
  'BY_MACHINERY_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD'
export const BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID =
  'BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID'
export const BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS =
  'BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_SUCCESS'
export const BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD =
  'BY_RAW_MATERIAL_PLANTATION_PATTERN_BY_PLANTATIONID_COMPARISION_BETWEEN_PATTERN_ID_FAILD'
export const LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID =
  'LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID'
export const LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS =
  'LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_SUCCESS'
export const LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD =
  'LIST_DETAILS_BY_PLANTATION_ID_BY_PATTERN_ID_BY_CROP_ID_FAILD'
export const OPERATION_TYPE_PATTERNS = 'OPERATION_TYPE_PATTERNS'
export const OPERATION_TYPE_PATTERNS_SUCCESS = 'OPERATION_TYPE_PATTERNS_SUCCESS'
export const OPERATION_TYPE_PATTERNS_FAILD = 'OPERATION_TYPE_PATTERNS_FAILD'

/*product */
export const LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID =
  'LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID'
export const LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS =
  'LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_SUCCESS'
export const LIST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD =
  'IST_PRODUCTS_BY_PLANTING_YEAR_ID_AND_PLANTATION_ID_FAILD'

/*machineryReport */
export const LIST_MACHINERY = 'LIST_MACHINERY'
export const LIST_MACHINERY_BY_PLANTATION_ID = 'LIST_MACHINERY_BY_PLANTATION_ID'
export const LIST_MACHINERY_SUCCESS = 'LIST_MACHINERY_SUCCESS'
export const LIST_MACHINERY_FAILD = 'LIST_MACHINERY_FAILD'

/*HumanReport */
export const LIST_HUMAN_REPORT = 'LIST_HUMAN_REPORT'
export const LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID =
  'LIST_HUMAN_BY_YEAR_ID_AND_PLANTATION_ID'
export const LIST_HUMAN_REPORT_SUCCESS = 'LIST_HUMAN_REPORT_SUCCESS'
export const LIST_HUMAN_REPORT_FAILD = 'LIST_HUMAN_REPORT_FAILD'

/*ExpertReport */
export const LIST_EXPERT_REPORT = 'LIST_EXPERT_REPORT'
export const LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID =
  'LIST_EXPERT_BY_YEAR_ID_AND_PLANTATION_ID'
export const LIST_EXPERT_REPORT_SUCCESS = 'LIST_EXPERT_REPORT_SUCCESS'
export const LIST_EXPERT_REPORT_FAILD = 'LIST_EXPERT_REPORT_FAILD'
export const LIST_TYPE_OPERATION = 'LIST_TYPE_OPERATION'
export const LIST_TYPE_OPERATION_SUCCESS = 'LIST_TYPE_OPERATION_SUCCESS'
export const LIST_TYPE_OPERATION_FAILD = 'LIST_TYPE_OPERATION_FAILD'
export const ADD_EXPERT_REPORT = 'ADD_EXPERT_REPORT'
export const ADD_EXPERT_REPORT_SUCCESS = 'ADD_EXPERT_REPORT_SUCCESS'
export const ADD_EXPERT_REPORT_FAILD = 'ADD_EXPERT_REPORT_FAILD'
export const EDIT_EXPERT_REPORT = 'EDIT_EXPERT_REPORT'
export const EDIT_EXPERT_REPORT_SUCCESS = 'EDIT_EXPERT_REPORT_SUCCESS'
export const EDIT_EXPERT_REPORT_FAILD = 'EDIT_EXPERT_REPORT_FAILD'

// dashboard options
export const FETCH_DASHBOARD_OPTIONS = 'FETCH_DASHBOARD_OPTION'
export const FETCH_DASHBOARD_OPTIONS_START = 'FETCH_DASHBOARD_OPTION_START'
export const FETCH_DASHBOARD_OPTIONS_FAIL = 'FETCH_DASHBOARD_OPTION_FAIL'
export const FETCH_DASHBOARD_OPTIONS_SUCCESS = 'FETCH_DASHBOARD_OPTION_SUCCESS'
export const SET_CRITERIA_SELECTED = 'SET_CRITERIA_SELECTED'
export const FETCH_DASHBOARD_SCREENS = 'FETCH_DASHBOARD_SCREEN'
export const FETCH_DASHBOARD_SCREENS_START = 'FETCH_DASHBOARD_SCREEN_START'
export const FETCH_DASHBOARD_SCREENS_FAIL = 'FETCH_DASHBOARD_SCREEN_FAIL'
export const FETCH_DASHBOARD_SCREENS_SUCCESS = 'FETCH_DASHBOARD_SCREEN_SUCCESS'
export const ADD_TO_SCREENS = 'ADD_TO_SCREENS'
export const ADD_TO_SCREENS_START = 'ADD_TO_SCREENS_START'
export const ADD_TO_SCREENS_FAIL = 'ADD_TO_SCREENS_FAIL'
export const ADD_TO_SCREENS_SUCCESS = 'ADD_TO_SCREENS_SUCCESS'
export const ADD_NEW_SCREEN = 'ADD_NEW_SCREEN'
export const ADD_NEW_SCREEN_START = 'ADD_NEW_SCREEN_START'
export const ADD_NEW_SCREEN_FAIL = 'ADD_NEW_SCREEN_FAIL'
export const ADD_NEW_SCREEN_SUCCESS = 'ADD_NEW_SCREEN_SUCCESS'
export const FETCH_SCREEN_REPORTS = 'FETCH_SCREEN_REPORTS'
export const FETCH_SCREEN_REPORTS_START = 'FETCH_SCREEN_REPORTS_START'
export const FETCH_SCREEN_REPORTS_FAIL = 'FETCH_SCREEN_REPORTS_FAIL'
export const FETCH_SCREEN_REPORTS_SUCCESS = 'FETCH_SCREEN_REPORTS_SUCCESS'
export const DELETE_DASHBOARD_SCREEN = 'DELETE_DASHBOARD_SCREEN'
export const DELETE_DASHBOARD_SCREEN_START = 'DELETE_DASHBOARD_SCREEN_START'
export const DELETE_DASHBOARD_SCREEN_FAIL = 'DELETE_DASHBOARD_SCREEN_FAIL'
export const DELETE_DASHBOARD_SCREEN_SUCCESS = 'DELETE_DASHBOARD_SCREEN_SUCCESS'

// dashboard reports
export const FETCH_DASHBOARD_REPORTS = 'FETCH_DASHBOARD_REPORTS'
export const FETCH_DASHBOARD_REPORTS_BY_RATIO =
  'FETCH_DASHBOARD_REPORTS_BY_RATIO'
export const FETCH_DASHBOARD_REPORTS_START = 'FETCH_DASHBOARD_REPORTS_START'
export const FETCH_DASHBOARD_REPORTS_FAIL = 'FETCH_DASHBOARD_REPORTS_FAIL'
export const FETCH_DASHBOARD_REPORTS_SUCCESS = 'FETCH_DASHBOARD_REPORTS_SUCCESS'
export const FETCH_DASHBOARD_REPORTS_START_BY_RATIO =
  'FETCH_DASHBOARD_REPORTS_START_BY_RATIO'
export const FETCH_DASHBOARD_REPORTS_FAIL_BY_RATIO =
  'FETCH_DASHBOARD_REPORTS_FAIL_BY_RATIO'
export const FETCH_DASHBOARD_REPORTS_SUCCESS_BY_RATIO =
  'FETCH_DASHBOARD_REPORTS_SUCCESS_BY_RATIO'
export const ADJUST_INDICATOR_VALUE = 'ADJUST_INDICATOR_VALUE'
export const ADJUST_INDICATOR_VALUE_START = 'ADJUST_INDICATOR_VALUE_START'
export const ADJUST_INDICATOR_VALUE_FAIL = 'ADJUST_INDICATOR_VALUE_FAIL'
export const ADJUST_INDICATOR_VALUE_SUCCESS = 'ADJUST_INDICATOR_VALUE_SUCCESS'
export const ADJUST_CHART_INDICATOR = 'ADJUST_CHART_INDICATOR'
export const ADJUST_CHART_INDICATOR_START = 'ADJUST_CHART_INDICATOR_START'
export const ADJUST_CHART_INDICATOR_FAIL = 'ADJUST_CHART_INDICATOR_FAIL'
export const ADJUST_CHART_INDICATOR_SUCCESS = 'ADJUST_CHART_INDICATOR_SUCCESS'
export const ADD_NEW_INDICATOR = 'ADD_NEW_INDICATOR'
export const ADD_NEW_INDICATOR_START = 'ADD_NEW_INDICATOR_START'
export const ADD_NEW_INDICATOR_FAIL = 'ADD_NEW_INDICATOR_FAIL'
export const ADD_NEW_INDICATOR_SUCCESS = 'ADD_NEW_INDICATOR_SUCCESS'

// crops
export const FETCH_CROPS = 'FETCH_CROPS'
export const FETCH_CROPS_START = 'FETCH_CROPS_START'
export const FETCH_CROPS_FAIL = 'FETCH_CROPS_FAIL'
export const FETCH_CROPS_SUCCESS = 'FETCH_CROPS_SUCCESS'
export const FETCH_CROPS_BY_ID = 'FETCH_CROPS_BY_ID'
export const FETCH_CROPS_START_BY_ID = 'FETCH_CROPS_START_BY_ID'
export const FETCH_CROPS_FAIL_BY_ID = 'FETCH_CROPS_FAIL_BY_ID'
export const FETCH_CROPS_SUCCESS_BY_ID = 'FETCH_CROPS_SUCCESS_BY_ID'
export const FETCH_VARIETIES_BY_ID = 'FETCH_VARIETIES_BY_ID'
export const FETCH_VARIETIES_BY_ID_START = 'FETCH_VARIETIES_BY_ID_START'
export const FETCH_VARIETIES_BY_ID_FAIL = 'FETCH_VARIETIES_BY_ID_FAIL'
export const FETCH_VARIETIES_BY_ID_SUCCESS = 'FETCH_VARIETIES_BY_ID_SUCCESS'

// raw material
export const FETCH_RAW_MATERIAL = 'FETCH_RAW_MATERIAL'
export const FETCH_RAW_MATERIAL_START = 'FETCH_RAW_MATERIAL_START'
export const FETCH_RAW_MATERIAL_FAIL = 'FETCH_RAW_MATERIAL_FAIL'
export const FETCH_RAW_MATERIAL_SUCCESS = 'FETCH_RAW_MATERIAL_SUCCESS'

// operation types
export const FETCH_OPERATION_TYPES = 'FETCH_OPERATION_TYPES'
export const FETCH_OPERATION_TYPES_START = 'FETCH_OPERATION_TYPES_START'
export const FETCH_OPERATION_TYPES_FAIL = 'FETCH_OPERATION_TYPES_FAIL'
export const FETCH_OPERATION_TYPES_SUCCESS = 'FETCH_OPERATION_TYPES_SUCCESS'
export const FETCH_OPERATION_TYPES_SELECTED = 'FETCH_OPERATION_TYPES_SELECTED'

// machinery types
export const FETCH_MACHINERY_TYPES = 'FETCH_MACHINERY_TYPES'
export const FETCH_MACHINERY_TYPES_START = 'FETCH_MACHINERY_TYPES_START'
export const FETCH_MACHINERY_TYPES_FAIL = 'FETCH_MACHINERY_TYPES_FAIL'
export const FETCH_MACHINERY_TYPES_SUCCESS = 'FETCH_MACHINERY_TYPES_SUCCESS'

// human resource type
export const FETCH_HUMAN_RESOURCE_TYPES = 'FETCH_HUMAN_RESOURCE_TYPES'
export const FETCH_HUMAN_RESOURCE_TYPES_START =
  'FETCH_HUMAN_RESOURCE_TYPES_START'
export const FETCH_HUMAN_RESOURCE_TYPES_FAIL = 'FETCH_HUMAN_RESOURCE_TYPES_FAIL'
export const FETCH_HUMAN_RESOURCE_TYPES_SUCCESS =
  'FETCH_HUMAN_RESOURCE_TYPES_SUCCESS'
export const FETCH_HUMAN_RESOURCE_BY_TYPE = 'FETCH_HUMAN_RESOURCE_BY_TYPE'
export const FETCH_HUMAN_RESOURCE_BY_TYPE_START =
  'FETCH_HUMAN_RESOURCE_BY_TYPE_START'
export const FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL =
  'FETCH_HUMAN_RESOURCE_BY_TYPE_FAIL'
export const FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS =
  'FETCH_HUMAN_RESOURCE_BY_TYPE_SUCCESS'

// water test
export const FETCH_WATER_TEST = 'FETCH_WATER_TEST'
export const FETCH_WATER_TEST_START = 'FETCH_WATER_TEST_START'
export const FETCH_WATER_TEST_FAIL = 'FETCH_WATER_TEST_FAIL'
export const FETCH_WATER_TEST_SUCCESS = 'FETCH_WATER_TEST_SUCCESS'
export const ADD_EDIT_WATER_TEST = 'ADD_EDIT_WATER_TEST'
export const ADD_EDIT_WATER_TEST_START = 'ADD_EDIT_WATER_TEST_START'
export const ADD_EDIT_WATER_TEST_FAIL = 'ADD_EDIT_WATER_TEST_FAIL'
export const ADD_EDIT_WATER_TEST_SUCCESS = 'ADD_EDIT_WATER_TEST_SUCCESS'
export const SUBMIT_WATER_TEST = 'SUBMIT_WATER_TEST'
export const SUBMIT_WATER_TEST_START = 'SUBMIT_WATER_TEST_START'
export const SUBMIT_WATER_TEST_FAIL = 'SUBMIT_WATER_TEST_FAIL'
export const SUBMIT_WATER_TEST_SUCCESS = 'SUBMIT_WATER_TEST_SUCCESS'
export const DELETE_WATER_TEST = 'DELETE_WATER_TEST'
export const DELETE_WATER_TEST_START = 'DELETE_WATER_TEST_START'
export const DELETE_WATER_TEST_FAIL = 'DELETE_WATER_TEST_FAIL'
export const DELETE_WATER_TEST_SUCCESS = 'DELETE_WATER_TEST_SUCCESS'
export const FETCH_WATER_TEST_BY_RESOURCE = 'FETCH_WATER_TEST_BY_RESOURCE'
export const FETCH_WATER_TEST_BY_RESOURCE_START =
  'FETCH_WATER_TEST_BY_RESOURCE_START'
export const FETCH_WATER_TEST_BY_RESOURCE_FAIL =
  'FETCH_WATER_TEST_BY_RESOURCE_FAIL'
export const FETCH_WATER_TEST_BY_RESOURCE_SUCCESS =
  'FETCH_WATER_TEST_BY_RESOURCE_SUCCESS'

// soil analyses :
export const FETCH_SOIL_ANALYSES = 'FETCH_SOIL_ANALYSES'
export const FETCH_SOIL_ANALYSES_START = 'FETCH_SOIL_ANALYSES_START'
export const FETCH_SOIL_ANALYSES_FAIL = 'FETCH_SOIL_ANALYSES_FAIL'
export const FETCH_SOIL_ANALYSES_SUCCESS = 'FETCH_SOIL_ANALYSES_SUCCESS'
export const ADD_EDIT_SOIL_ANALYSES = 'ADD_EDIT_SOIL_ANALYSES'
export const ADD_EDIT_SOIL_ANALYSES_START = 'ADD_EDIT_SOIL_ANALYSES_START'
export const ADD_EDIT_SOIL_ANALYSES_FAIL = 'ADD_EDIT_SOIL_ANALYSES_FAIL'
export const ADD_EDIT_SOIL_ANALYSES_SUCCESS = 'ADD_EDIT_SOIL_ANALYSES_SUCCESS'
export const SUBMIT_SOIL_ANALYSES = 'SUBMIT_SOIL_ANALYSES'
export const SUBMIT_SOIL_ANALYSES_START = 'SUBMIT_SOIL_ANALYSES_START'
export const SUBMIT_SOIL_ANALYSES_FAIL = 'SUBMIT_SOIL_ANALYSES_FAIL'
export const SUBMIT_SOIL_ANALYSES_SUCCESS = 'SUBMIT_SOIL_ANALYSES_SUCCESS'
export const DELETE_SOIL_ANALYSES = 'DELETE_SOIL_ANALYSES'
export const DELETE_SOIL_ANALYSES_START = 'DELETE_SOIL_ANALYSES_START'
export const DELETE_SOIL_ANALYSES_FAIL = 'DELETE_SOIL_ANALYSES_FAIL'
export const DELETE_SOIL_ANALYSES_SUCCESS = 'DELETE_SOIL_ANALYSES_SUCCESS'

//operationTabType
export const LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE =
  'LIST_OPERATION_TAB_BY_PLANTATION_ID_OPERATION_TYPE'
export const LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS =
  'LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS'
export const LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD =
  'LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD'
export const LIST_OPERATION_TYPES_BY_PLANTATION_ID =
  'LIST_OPERATION_TYPES_BY_PLANTATION_ID'
export const LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS =
  'LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS'
export const LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD =
  'LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD'
export const SELECTED_ITEM_SYSTEM_WAREHOUSE = 'SELECTED_ITEM_SYSTEM_WAREHOUSE'
export const LIST_SELECTED_ITEMS_HUMAN_RESOURCE =
  'LIST_SELECTED_ITEMS_HUMAN_RESOURCE'
export const SELECTED_ITEM_EXIT_BY_PLANTATION_ID_BY_MATERIAl_ID =
  'SELECTED_ITEM_EXIT_BY_PLANTATION_ID_BY_MATERIAl_ID'
export const LIST_FINANCIAL_SYSTEM_WAREHOUSE = 'LIST_FINANCIAL_SYSTEM_WAREHOUSE'
export const LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS =
  'LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS'
export const LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD =
  'LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD'
export const Exit_PlantationId_BY_RAW_MATERIAL_ID =
  'Exit_PlantationId_BY_RAW_MATERIAL_ID'
export const Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD =
  'Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD'
export const Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS =
  'Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS'
export const LIST_MACHINERY_BY_PARENT_ID = 'LIST_MACHINERY_BY_PARENT_ID'
export const LIST_MACHINERY_BY_PARENT_ID_SUCCESS =
  'LIST_MACHINERY_BY_PARENT_ID_SUCCESS'
export const LIST_MACHINERY_BY_PARENT_ID_FAILD =
  'LIST_MACHINERY_BY_PARENT_ID_FAILD'
export const LIST_MACHINERY_TYPES_BY_PARENT_ID =
  'LIST_MACHINERY_TYPES_BY_PARENT_ID'
export const LIST_MACHINERY_TYPES_BY_PARENT_ID_SUCCESS =
  'LIST_MACHINERY_TYPES_BY_PARENT_ID_SUCCESS'
export const LIST_MACHINERY_TYPES_BY_PARENT_ID_FAILD =
  'LIST_MACHINERY_TYPES_BY_PARENT_ID_FAILD'
export const LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id =
  'LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id'
export const LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_SUCCESS =
  'LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_SUCCESS'
export const LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_FAILD =
  'LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_FAILD'
export const SELECTED_ITEM_TYPE_MACHINERY_TRACTOR =
  'SELECTED_Item_TYPE_MACHINERY_TRACTOR'
export const SELECTED_ITEM = 'SELECTED_ITEM'
export const ENCREMENT_ID = 'ENCREMENT_ID'
export const ENCREMENT_ID_FW = 'ENCREMENT_ID_FW'
export const DECREMENT_ID_FW = 'DECREMENT_ID_FW'
export const ENCREMENT_TID = 'ENCREMENT_TID'
export const REMOVE_ITEM_MACHINERY = 'REMOVE_ITEM_MACHINERY'
export const REMOVE_ITEM_FINANCIAL_WAREHOUSE = 'REMOVE_ITEM_FINANCIAL_WAREHOUSE'

// add plants :
export const ADD_PLANT = 'ADD_PLANT'
export const ADD_PLANT_START = 'ADD_PLANT_START'
export const ADD_PLANT_FAIL = 'ADD_PLANT_FAIL'
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS'
export const SET_PLANT_FOR_EDIT = 'SET_PLANT_FOR_EDIT'
export const EDIT_PLANT = 'EDIT_PLANT'
export const EDIT_PLANT_START = 'EDIT_PLANT_START'
export const EDIT_PLANT_FAIL = 'EDIT_PLANT_FAIL'
export const EDIT_PLANT_SUCCESS = 'EDIT_PLANT_SUCCESS'
export const DELETE_PLANT_SHAPE = 'DELETE_PLANT_SHAPE'
export const DELETE_PLANT_SHAPE_START = 'DELETE_PLANT_SHAPE_START'
export const DELETE_PLANT_SHAPE_FAIL = 'DELETE_PLANT_SHAPE_FAIL'
export const DELETE_PLANT_SHAPE_SUCCESS = 'DELETE_PLANT_SHAPE_SUCCESS'

//irrigation
export const FETCH_IRRIGATION_OPERATIONS = 'FETCH_IRRIGATION_OPERATIONS'
export const FETCH_IRRIGATION_OPERATIONS_START =
  'FETCH_IRRIGATION_OPERATIONS_START'
export const FETCH_IRRIGATION_OPERATIONS_FAIL =
  'FETCH_IRRIGATION_OPERATIONS_FAIL'
export const FETCH_IRRIGATION_OPERATIONS_SUCCESS =
  'FETCH_IRRIGATION_OPERATIONS_SUCCESS'
export const POST_IRRIGATION_OPERATIONS = 'FETCH_IRRIGATION_OPERATIONS'
export const POST_IRRIGATION_OPERATIONS_START =
  'FETCH_IRRIGATION_OPERATIONS_START'
export const POST_IRRIGATION_OPERATIONS_FAIL =
  'FETCH_IRRIGATION_OPERATIONS_FAIL'
export const POST_IRRIGATION_OPERATIONS_SUCCESS =
  'FETCH_IRRIGATION_OPERATIONS_SUCCESS'
export const POST_IRRIGATION_OPERATIONS_CHECK_PROOF =
  'FETCH_IRRIGATION_OPERATIONS_CHECK_PROOF'
export const POST_IRRIGATION_OPERATIONS_CHECK_PROOF_START =
  'FETCH_IRRIGATION_OPERATIONS_CHECK_PROOF_START'
export const POST_IRRIGATION_OPERATIONS_CHECK_PROOF_FAIL =
  'FETCH_IRRIGATION_OPERATIONS_CHECK_PROOF_FAIL'
export const POST_IRRIGATION_OPERATIONS_CHECK_PROOF_SUCCESS =
  'FETCH_IRRIGATION_OPERATIONS_CHECK_PROOF_SUCCESS'

// watering operation
export const SET_HUMAN_RESOURCE_WATERING = 'SET_HUMAN_RESOURCE_WATERING'

// wateringManagment
export const LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID =
  'LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID'
export const LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS =
  'LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_SUCCESS'
export const LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD =
  'LIST_WATERING_MANAGMENT_BY_YEAR_ID_AND_PLANTATION_ID_FAILD'

/*operationReport */
export const LIST_OPERATION_REPORT = 'LIST_OPERATION_REPORT'
export const LIST_OPERATION_REPORT_SUCCESS = 'LIST_OPERATION_REPORT_SUCCESS'
export const LIST_OPERATION_REPORT_FAILD = 'LIST_OPERATION_REPORT_FAILD'
export const LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS =
  'LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS'
export const LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS_SUCCESS =
  'LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS_SUCCESS'
export const LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS_FAILD =
  'LIST_OPERATION_REPORT_BETWEEN_SELECTED_ITEMS_FAILD'
export const LIST_OPERATION_REPORTـSELECTED_ITEM =
  'LIST_OPERATION_REPORTـSELECTED_ITEM'

// CopyCrops
export const COPY_CROPS = 'COPY_CROPS'
export const COPY_CROPS_SUCCESS = 'COPY_CROPS_SUCCESS'
export const COPY_CROPS_FAILD = 'COPY_CROPS_FAILD'
