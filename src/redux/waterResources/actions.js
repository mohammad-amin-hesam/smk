import {
  FETCH_WATER_RESOURCE,
  FETCH_WATER_RESOURCE_START,
  FETCH_WATER_RESOURCE_FAIL,
  FETCH_WATER_RESOURCE_SUCCESS,
  SET_WATER_RESOURCE_ACTIVE,
  FETCH_RESOURCE_DETAIL,
  FETCH_RESOURCE_DETAIL_START,
  FETCH_RESOURCE_DETAIL_FAIL,
  FETCH_RESOURCE_DETAIL_SUCCESS,
  FETCH_WATER_RESOURCE_BY_PLANTATION,
  FETCH_WATER_RESOURCE_BY_PLANTATION_START,
  FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL,
  FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS,
  FETCH_WATER_RESOURCE_USAGE,
  FETCH_WATER_RESOURCE_USAGE_START,
  FETCH_WATER_RESOURCE_USAGE_FAIL,
  FETCH_WATER_RESOURCE_USAGE_SUCCESS,
} from "../../constants/actionTypes";

export const fetchWaterResource = (plantationId, yearId) => {
  return {
    type: FETCH_WATER_RESOURCE,
    pId: plantationId,
    yId: yearId,
  };
};

export const fetchWaterResourceStart = () => {
  return {
    type: FETCH_WATER_RESOURCE_START,
  };
};

export const fetchWaterResourceFail = (error) => {
  return {
    type: FETCH_WATER_RESOURCE_FAIL,
    payload: error,
  };
};

export const fetchWaterResourceSuccess = (waterResources) => {
  return {
    type: FETCH_WATER_RESOURCE_SUCCESS,
    payload: waterResources,
  };
};

export const setWaterResourceActive = (active) => {
  return {
    type: SET_WATER_RESOURCE_ACTIVE,
    payload: active,
  };
};

export const fetchResourceDetail = (resourceId, yearId) => {
  return {
    type: FETCH_RESOURCE_DETAIL,
    resourceId: resourceId,
    yId: yearId,
  };
};

export const fetchResourceDetailStart = () => {
  return {
    type: FETCH_RESOURCE_DETAIL_START,
  };
};

export const fetchResourceDetailFail = (error) => {
  return {
    type: FETCH_RESOURCE_DETAIL_FAIL,
    payload: error,
  };
};

export const fetchResourceDetailSuccess = (detail) => {
  return {
    type: FETCH_RESOURCE_DETAIL_SUCCESS,
    payload: detail,
  };
};

export const fetchWaterResourceByPlantation = (plantationId, yearId) => {
  return {
    type: FETCH_WATER_RESOURCE_BY_PLANTATION,
    pId: plantationId,
    yId: yearId,
  };
};

export const fetchWaterResourceByPlantationStart = () => {
  return {
    type: FETCH_WATER_RESOURCE_BY_PLANTATION_START,
  };
};

export const fetchWaterResourceByPlantationFail = (error) => {
  return {
    type: FETCH_WATER_RESOURCE_BY_PLANTATION_FAIL,
    payload: error,
  };
};

export const fetchWaterResourceByPlantationSuccess = (waterResources) => {
  return {
    type: FETCH_WATER_RESOURCE_BY_PLANTATION_SUCCESS,
    payload: waterResources,
  };
};

export const fetchWaterResourceUsage = (resourceId, yearId) => {
  return {
    type: FETCH_WATER_RESOURCE_USAGE,
    resourceId: resourceId,
    yId: yearId,
  };
};

export const fetchWaterResourceUsageStart = () => {
  return {
    type: FETCH_WATER_RESOURCE_USAGE_START,
  };
};

export const fetchWaterResourceUsageFail = (error) => {
  return {
    type: FETCH_WATER_RESOURCE_USAGE_FAIL,
    payload: error,
  };
};

export const fetchWaterResourceUsageSuccess = (usage) => {
  return {
    type: FETCH_WATER_RESOURCE_USAGE_SUCCESS,
    payload: usage,
  };
};
