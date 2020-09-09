import {
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE,
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS,
  LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS,
  LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD,
  SELECTED_ITEM_SYSTEM_WAREHOUSE,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS,
  LIST_FINANCIAL_SYSTEM_WAREHOUSE,
  Exit_PlantationId_BY_RAW_MATERIAL_ID,
  Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS,
  Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD,
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
  REMOVE_ITEM_FINANCIAL_WAREHOUSE
} from '../../constants/actionTypes'

const initState = {
  loading: false,
  listOperationTypeByPlantationIdByOperationTypeId: [],
  listOperationTypeByPlantationId: [],
  seletedItemSystemWarehouse: [],
  listSeletedIemsHuman: [],
  listSystemWarehouse: [],
  listExitByplantationIdByRawMaterialId: [],
  listExitPlantationIdByRawMaterialId: [],
  selectedExitByPlantationIdByRawMaterialId: [],
  listMachineryByParentId: [],
  listMachineryTypeByParentId: [],
  listMachineryByplantationIdByParentId: [],
  selectedItemTractor: [],
  selectedItem: [],
  id: 0,
  iFw: 0,
  tId: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE:
      return { ...state, loading: true, ...action.payload }
    case LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        listOperationTypeByPlantationIdByOperationTypeId: action.payload
      }
    case LIST_OPERATION_TAB_BY_PLANTATIONID_OPERATION_TYPE_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_OPERATION_TYPES_BY_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case LIST_OPERATION_TYPES_BY_PLANTATION_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        listOperationTypeByPlantationId: action.payload
      }
    case LIST_OPERATION_TYPES_BY_PLANTATION_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case SELECTED_ITEM_SYSTEM_WAREHOUSE:
      return {
        ...state,
        seletedItemSystemWarehouse: [
          ...state.seletedItemSystemWarehouse,
          action.payload
        ]
      }
    case LIST_SELECTED_ITEMS_HUMAN_RESOURCE:
      return { ...state, listSeletedIemsHuman: action.payload }
    case SELECTED_ITEM_EXIT_BY_PLANTATION_ID_BY_MATERIAl_ID:
      return {
        ...state,
        selectedExitByPlantationIdByRawMaterialId: [
          ...state.selectedExitByPlantationIdByRawMaterialId,
          action.payload
        ]
      }
    case LIST_FINANCIAL_SYSTEM_WAREHOUSE:
      return {
        ...state,
        loading: false,
        listSystemWarehouse: action.payload
      }
    case LIST_FINANCIAL_SYSTEM_WAREHOUSE_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_FINANCIAL_SYSTEM_WAREHOUSE_SUCCESS:
      return { ...state, listSystemWarehouse: action.payload }
    case Exit_PlantationId_BY_RAW_MATERIAL_ID:
      return {
        ...state,
        loading: false,
        ...action.payload
      }
    case Exit_PlantationId_BY_RAW_MATERIAL_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case Exit_PlantationId_BY_RAW_MATERIAL_ID_SUCCESS:
      return { ...state, ...action.payload }

    case LIST_MACHINERY_BY_PARENT_ID:
      return {
        ...state,
        loading: false,
        listMachineryByParentId: action.payload
      }
    case LIST_MACHINERY_BY_PARENT_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_MACHINERY_BY_PARENT_ID_SUCCESS:
      return { ...state, listMachineryByParentId: action.payload }
    case LIST_MACHINERY_TYPES_BY_PARENT_ID:
      return {
        ...state,
        loading: false,
        listMachineryTypeByParentId: action.payload
      }
    case LIST_MACHINERY_TYPES_BY_PARENT_ID_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_MACHINERY_TYPES_BY_PARENT_ID_SUCCESS:
      return { ...state, listMachineryTypeByParentId: action.payload }
    case LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id:
      return {
        ...state,
        loading: false,
        ...action.payload
      }
    case LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case LIST_MACHINERY_BY_PLANTATION_ID_PARENT_Id_SUCCESS:
      return {
        ...state,
        listMachineryByplantationIdByParentId: action.payload
      }
    case SELECTED_ITEM_TYPE_MACHINERY_TRACTOR:
      return {
        ...state,
        selectedItemTractor: [...state.selectedItemTractor, action.payload]
      }
    case ENCREMENT_ID:
      return {
        ...state,
        id: state.id + 1
      }
    case ENCREMENT_ID_FW:
      return {
        ...state,
        iFw: state.iFw + 1
      }
    case DECREMENT_ID_FW:
      return {
        ...state,
        iFw: state.iFw - 1
      }

    case ENCREMENT_TID:
      return {
        ...state,
        tId: state.tId + 1
      }
    // case SELECTED_ITEM:
    //   let tempState = state.selectedItem
    //   tempState[state.id] = action.payload
    //   return {
    //     ...state,
    //     selectedItem: tempState
    //   }
    case SELECTED_ITEM:
      return {
        ...state,
        selectedItem: [...state.selectedItem, action.payload]
      }
    // case REMOVE_ITEM_MACHINERY:
    //   let temp = state.selectedItem
    //   delete temp[action.payload]
    //   return {
    //     ...state,
    //     selectedItem: temp
    //   }
    case REMOVE_ITEM_MACHINERY:
      return {
        ...state,
        selectedItem: state.selectedItem.filter(
          (item, index) => index !== action.payload
        )
      }
    case REMOVE_ITEM_FINANCIAL_WAREHOUSE:
      return {
        ...state,
        selectedExitByPlantationIdByRawMaterialId: state.selectedExitByPlantationIdByRawMaterialId.filter(
          (item, index) => index !== action.payload
        )
      }
    default:
      return { ...state }
  }
}
