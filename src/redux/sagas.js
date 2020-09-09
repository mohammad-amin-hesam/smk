import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import companySagas from './company/saga'
import farmsSagas from './farms/saga'
import yearsSaga from './years/saga'
import fieldsSagas from './fields/saga'
import sectionSagas from './section/saga'
import unitsSagas from './units/saga'
import pieceSagas from './piece/saga'
import plantsSagas from './plants/saga'
import uploadFilesSagas from './uploadFile/saga'
import notification from './notification/saga'
import waterResourcesSaga from './waterResources/saga'
import weatherStationSagas from './weatherStation/saga'
import weatherCurrent from './weatherCurrent/saga'
import satelliteImg from './satelliteImg/saga'
import weatherForecast from './weatherForecast/saga'
import customers from './customers/saga'
import pattern from './newPattern/saga'
import products from './products/saga'
import machinery from './machineryReport/saga'
import listHumanReport from './humanReport/saga'
import listExpertReport from './expertReport/saga'
import dashboardOptions from './dashboardOptions/saga'
import dashboardReports from './dashboardReports/saga'
import crops from './crops/saga'
import rawMaterial from './rawMaterial/saga'
import operationType from './operationTypes/saga'
import machineryTypes from './machinaryTypes/saga'
import humanResourcesTypes from './humanResourceType/saga'
import waterTests from './waterTest/saga'
import operationTypeTab from './operationTypeTab/saga'
import soilAnalyses from './soilAnalysis/saga'
import newScreenSaga from './dashboardOptions/newScreenSaga'
import irrigationOperations from './irrigation/saga'
import wateringManagment from './wateringManagment/saga'
import operationReporting from './operationReport/saga'
import copyCrops from './copyCrops/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    companySagas(),
    farmsSagas(),
    yearsSaga(),
    fieldsSagas(),
    sectionSagas(),
    unitsSagas(),
    pieceSagas(),
    plantsSagas(),
    uploadFilesSagas(),
    notification(),
    waterResourcesSaga(),
    weatherStationSagas(),
    weatherCurrent(),
    satelliteImg(),
    weatherForecast(),
    customers(),
    pattern(),
    products(),
    machinery(),
    listHumanReport(),
    listExpertReport(),
    pattern(),
    dashboardOptions(),
    dashboardReports(),
    crops(),
    rawMaterial(),
    operationType(),
    machineryTypes(),
    humanResourcesTypes(),
    waterTests(),
    operationTypeTab(),
    soilAnalyses(),
    newScreenSaga(),
    wateringManagment(),
    operationReporting(),
    irrigationOperations(),
    copyCrops()
  ])
}
