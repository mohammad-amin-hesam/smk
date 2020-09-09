import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
// import Map from './map'
import Operations from "./operetions";
import Setting from "./settings";
import Notifications from "./notifications";
import Training from "./training";
import Customers from "../../containers/sideBar/thirdMenu/customers/Customers";
import ApproveOperaion from "../../containers/sideBar/thirdMenu/ApproveOperation";
import ReportingDashboard from "../../containers/sideBar/thirdMenu/reportingDashboard/reportnigDashboard";
import HumanReport from "../../containers/sideBar/thirdMenu/humanReport";
import MachineryReport from "../../containers/sideBar/thirdMenu/MachineryReport";
import OperationReport from "../../containers/sideBar/thirdMenu/OperationReport";
import ProductionAndSales from "../../containers/sideBar/thirdMenu/producions/ProductionsAndSales";
import WaterTestPlantation from "../../containers/sideBar/thirdMenu/waterTest/WaterTestPlantation";
import CropPatternManagement from "../../containers/sideBar/thirdMenu/cropPatternManagment/cropPatternManagement";
import WateringManagement from "../../containers/sideBar/thirdMenu/WateringManagement";
import ExpertReport from "../../containers/sideBar/thirdMenu/expertReport/ExpertReport";
import SalesDetails from "../../containers/sideBar/thirdMenu/producions/salesDetails";
import PlantCultivar from "../../containers/sideBar/thirdMenu/producions/plantcultivar";
import AddSales from "../../containers/sideBar/thirdMenu/producions/addSales";
import CustomerRoutes from "../dashboards/customerRoutes";
import CropPatternManagmentRoutes from "../dashboards/cropPatternMangmentRoutes";
import AddEditExpertReport from "../../containers/sideBar/thirdMenu/expertReport/addEditExpertReport";
import AddHumanResource from "../../containers/sideBar/thirdMenu/selectOption/newOperaion/addhuman";
import NewOperation from "../../containers/sideBar/thirdMenu/selectOption/newOperaion/newOperation";
import CopyCrops from "../../containers/sideBar/thirdMenu/selectOption/CopyCrops";
import CopyFish from "../../containers/sideBar/thirdMenu/selectOption/copyFish";
import CreateCropPattern from "../../components/map/waterResources/createCropPattern";
import ShowWaterTests from "../../components/map/waterResources/showWaterTests";
import SubmitWaterTest from "../../components/map/waterResources/submitWaterTest";
import SubmitSoilAnalyses from "../../containers/sideBar/thirdMenu/soilAnalyses/submitSoilAnalyses";
import AddPlantation from "../../containers/sideBar/thirdMenu/addEditPlantation/addPlantation";
import AddFish from "../../containers/sideBar/thirdMenu/addEditPlantation/addFish";
import AddEditWatering from "../../containers/sideBar/thirdMenu/addEditWatering/addEditWatering";
import EditPlantation from "../../containers/sideBar/thirdMenu/addEditPlantation/editPlantation";
import AddNewPattern from "../../containers/sideBar/thirdMenu/selectOption/NewPattern";

const Dashboards = (props) => {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  let { location } = props;
  return (
    <Switch>
      {/* <Redirect exact from='/' to='/map' /> */}
      {/* <Route path={`/map`} component={Map} /> */}
      <Route path={`/${location.search}/operations`} component={Operations} />
      <Route path={`/setting`} component={Setting} />
      <Route path={`/notifications`} component={Notifications} />
      <Route path={`/training`} component={Training} />
      <Route
        path={`/cropPatternManagement`}
        component={CropPatternManagmentRoutes}
      />
      {/*<Route path={`/soilManagement`} component={SoilManagement}/>*/}
      {/*<Route path={`/waterTestPlantation`} component={WaterTestPlantation}/>*/}
      <Route
        path={`/waterTestPlantation`}
        render={(props) => (
          <WaterTestPlantation {...props} mode={"byPlantation"} />
        )}
      />
      <Route path={`/wateringManagement`} component={WateringManagement} />
      <Route path={`/approveOperation`} component={ApproveOperaion} />
      <Route path={`/operationList`} component={OperationReport} />
      <Route path={`/dashboard`} component={ReportingDashboard} />
      <Route path={`/humanReport/`} component={HumanReport} exact />
      <Route path={`/machineryReport`} component={MachineryReport} />
      <Route path={`/expertReport`} component={ExpertReport} />
      <Route path={`/productions`} component={ProductionAndSales} />
      <Route path={`/salesDetails`} exact component={SalesDetails} />
      <Route path={`/plantCultivar`} exact component={PlantCultivar} />
      <Route path={`/plantCultivar/:id`} exact component={PlantCultivar} />
      <Route path={`/salesAdd`} exact component={AddSales} />
      <Route path={`/customers`} component={CustomerRoutes} />
      <Route
        path={`/addEditExpertReport/:id`}
        component={AddEditExpertReport}
      />
      <Route path={`/addEditExpertReport/`} component={AddEditExpertReport} />
      <Route path={`/addHumanResource/`} component={AddHumanResource} exact />
      <Route path={`/newOperation`} component={NewOperation} exact />
      <Route path={`/copyCrops`} component={CopyCrops} exact />
      <Route path={`/CopyFish`} component={CopyFish} exact />
      <Route path={`/NewPattern`} component={AddNewPattern} exact />
      <Route path={`/newOperation/:id`} component={NewOperation} exact />
      <Route path={`/optimizedCropPattern/:id`} component={CreateCropPattern} />
      <Route
        path={`/showWaterTests/:id`}
        render={(props) => (
          <WaterTestPlantation {...props} mode={"byResourceId"} />
        )}
      />
      <Route path={"/submitWaterTest/:id"} component={SubmitWaterTest} />
      <Route path={"/SoilTestRecording"} component={SubmitSoilAnalyses} />
      <Route path={"/AddCrops"} component={AddPlantation} />
      <Route path={"/AddFish"} component={AddFish} />
      <Route
        path={"/RecordingWateringOperations"}
        component={AddEditWatering}
      />
      <Route path={"/editPlant"} component={EditPlantation} />
    </Switch>
  );
};

export default Dashboards;
