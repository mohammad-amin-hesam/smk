import {
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE,
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS,
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD,
  Exit_PlantationId_BY_RAW_MATERIAL_ID,
  Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD,
  Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS,
  LIST_MACHINERY_BY_PARENT_ID,
  LIST_MACHINERY_BY_PARENT_ID_SUCCESS,
  LIST_MACHINERY_BY_PARENT_ID_FAILD,
  LIST_MACHINERY_TYPES_BY_PARENT_ID,
  LIST_MACHINERY_TYPES_BY_PARENT_ID_SUCCESS,
  LIST_MACHINERY_TYPES_BY_PARENT_ID_FAILD,
  LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id,
  LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_SUCCESS,
  LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_FAILD,
  LIST_SELECTED_ITEMS_HUMAN_RESOURCE,
  SELECTED_ITEM_EXIT_BY_PLANTATION_ID_BY_MATERIAl_ID,
  SELECTED_ITEM_TYPE_MACHINERY_TRACTOR,
  SELECTED_ITEM,
  ENCREMENT_ID,
  ENCREMENT_TID,
  ENCREMENT_ID_FW,
  DECREMENT_ID_FW,
  REMOVE_ITEM_MACHINERY,
  SELECTED_ITEM_SYSTEM_WAREHOUSE,
  REMOVE_ITEM_FINANCIAL_WAREHOUSE
} from '../../constants/actionTypes'

export const getOperationByPlantationIdByOperationType = (
  plantationId,
  operationTypes
) => ({
  type: LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE,
  payload: { plantationId, operationTypes }
})

export const getOperationByPlantationIdByOperationTypeFaild = (msg) => {
  return {
    type: LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD,
    payload: msg
  }
}

export const getSelectedItemRawMaterial = (selectedItemSystemWareHouse) => {
  return {
    type: SELECTED_ITEM_SYSTEM_WAREHOUSE,
    payload: selectedItemSystemWareHouse
  }
}
export const incrementId = () => {
  return {
    type: ENCREMENT_ID
  }
}
export const incrementIdFw = () => {
  return {
    type: ENCREMENT_ID_FW
  }
}
export const decrementIdFw = () => {
  return {
    type: DECREMENT_ID_FW
  }
}
export const incrementTId = () => {
  return {
    type: ENCREMENT_TID
  }
}
export const getSelectedItemMachineryTractor = (selectedItemTractor) => {
  return {
    type: SELECTED_ITEM_TYPE_MACHINERY_TRACTOR,
    payload: selectedItemTractor
  }
}
export const selecedItemHandler = (selectedItem) => ({
  type: SELECTED_ITEM,
  payload: selectedItem
})
export const removeItemMachinery = (id) => ({
  type: REMOVE_ITEM_MACHINERY,
  payload: id
})
export const removeItemFinancialWareHouse = (id) => ({
  type: REMOVE_ITEM_FINANCIAL_WAREHOUSE,
  payload: id
})

export const getSelectedItemExitByPlantationIdByMaterialId = (selectedItem) => {
  return {
    type: SELECTED_ITEM_EXIT_BY_PLANTATION_ID_BY_MATERIAl_ID,
    payload: selectedItem
  }
}

export const getListSelectedItemsHumanResource = (selectedItemsHuman) => {
  return {
    type: LIST_SELECTED_ITEMS_HUMAN_RESOURCE,
    payload: selectedItemsHuman
  }
}
export const getOperationByPlantationIdByOperationTypeSuccess = (
  listOperationType
) => {
  return {
    type: LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS,
    payload: listOperationType
  }
}
export const listOperationTypesByPlantationId = (plantationId) => ({
  type: LIST_OPERATION_TYPES_BY_PLANTATION_ID,
  payload: { plantationId }
})

export const listOperationTypesByPlantationIdFaild = (msg) => {
  return {
    type: LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD,
    payload: msg
  }
}

export const listOperationTypesByPlantationIdSuccess = (
  listOperationTypeByPlantationId
) => {
  return {
    type: LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS,
    payload: listOperationTypeByPlantationId
  }
}

export const listFinancialSystemWarehouse = (plantationId) => ({
  type: LIST_FINANCIAL_SYSTEM_WAREHOUSE,
  payload: { plantationId }
})

export const listFinancialSystemWarehouseFaild = (msg) => {
  return {
    type: LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD,
    payload: msg
  }
}

export const listFinancialSystemWarehouseSuccess = (listSystemWarehouse) => {
  return {
    type: LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS,
    payload: listSystemWarehouse
  }
}
export const getExitPlantationIdByRawMaterialId = (
  plantationId,
  rawMaterialId
) => ({
  type: Exit_PlantationId_BY_RAW_MATERIAL_ID,
  payload: { plantationId, rawMaterialId }
})
export const getExitPlantationIdByRawMaterialIdSuccess = (
  listExitPlantationIdByRawMaterialId
) => ({
  type: Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS,
  payload: { listExitPlantationIdByRawMaterialId }
})
export const getExitPlantationIdByRawMaterialIdFaild = (msg) => {
  return {
    type: Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD,
    payload: msg
  }
}
export const getListMachineryByParentId = (listMachineryByParentId) => ({
  type: LIST_MACHINERY_BY_PARENT_ID,
  payload: { listMachineryByParentId }
})
export const getListMachineryByParentIdSuccess = (listMachineryByParentId) => ({
  type: LIST_MACHINERY_BY_PARENT_ID_SUCCESS,
  payload: { listMachineryByParentId }
})
export const getListMachineryByParentIdFaild = (msg) => {
  return {
    type: LIST_MACHINERY_BY_PARENT_ID_FAILD,
    payload: msg
  }
}
export const getListMachineryTypeByParentId = (machineryId) => ({
  type: LIST_MACHINERY_TYPES_BY_PARENT_ID,
  payload: { machineryId }
})
export const getListMachineryTypeByParentIdSuccess = (
  listMachineryTypeByParentId
) => ({
  type: LIST_MACHINERY_TYPES_BY_PARENT_ID_SUCCESS,
  payload: { listMachineryTypeByParentId }
})
export const getListMachineryTypeByParentIdFaild = (msg) => {
  return {
    type: LIST_MACHINERY_TYPES_BY_PARENT_ID_FAILD,
    payload: msg
  }
}
export const getlistMachineryByPlantationIdBYParentId = (
  plantationId,
  machineryId
) => ({
  type: LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id,
  payload: { plantationId, machineryId }
})
export const getlistMachineryByPlantationIdBYParentIdSuccess = (
  listMachineryByPlantatinIdByMachineryId
) => ({
  type: LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_SUCCESS,
  payload: { listMachineryByPlantatinIdByMachineryId }
})
export const getlistMachineryByPlantationIdBYParentIdFaild = (msg) => {
  return {
    type: LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_FAILD,
    payload: msg
  }
}
