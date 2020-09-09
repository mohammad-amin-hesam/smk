import { combineReducers } from 'redux'
import authUser from './auth/reducer'
import company from './company/reducer'
import farms from './farms/reducer'
import years from './years/reducer'
import fields from './fields/reducer'
import section from './section/reducer'
import units from './units/reducer'
import pieces from './piece/reducer'
import plants from './plants/reducer'
import notifications from './notification/reducer'
import plantationState from './plantationState/reducers'
import files from './uploadFile/reducer'
import waterResources from './waterResources/reducer'
import modalType from './modal/reducer'
import weatherStation from './weatherStation/reducer'
import weatherCurrent from './weatherCurrent/reducer'
import satelliteImg from './satelliteImg/reducer'
import weatherForecast from './weatherForecast/reducer'
import customers from './customers/reducer'
import pattern from './newPattern/reducer'
import products from './products/reducer'
import machinery from './machineryReport/reducer'
import listHumanReport from './humanReport/reducer'
import listExpertReport from './expertReport/reducer'
import dashboardOptions from './dashboardOptions/reducer'
import dashboardReports from './dashboardReports/reducer'
import crops from './crops/reducer'
import rawMaterial from './rawMaterial/reducer'
import operationTypes from './operationTypes/reducer'
import machineryTypes from './machinaryTypes/reducer'
import humanResourcesTypes from './humanResourceType/reducer'
import waterTests from './waterTest/reducer'
import operationTypeTab from './operationTypeTab/reducer'
import soilAnalyses from './soilAnalysis/reducer'
import irrigation from './irrigation/reducer'
import watering from './watering/reducer'
import wateringManagment from './wateringManagment/reducer'
import operationReport from './operationReport/reducer'
import copyCrops from './copyCrops/reducer'

const reducers = combineReducers({
  authUser,
  company,
  farms,
  years,
  fields,
  section,
  units,
  pieces,
  plants,
  notifications,
  plantationState,
  waterResources,
  files,
  modalType,
  weatherStation,
  weatherCurrent,
  satelliteImg,
  weatherForecast,
  customers,
  pattern,
  products,
  machinery,
  listHumanReport,
  listExpertReport,
  dashboardOptions,
  dashboardReports,
  crops,
  rawMaterial,
  operationTypes,
  machineryTypes,
  humanResourcesTypes,
  waterTests,
  operationTypeTab,
  soilAnalyses,
  wateringManagment,
  operationReport,
  irrigation,
  watering,
  copyCrops
})

export default reducers
