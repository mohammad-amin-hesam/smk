import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PredictionPattern from "../../containers/sideBar/thirdMenu/cropPatternManagment/predictionPattern/predictionPattern";
import RealPattern from "../../containers/sideBar/thirdMenu/cropPatternManagment/realPattern";
import CropPatternManagement from "../../containers/sideBar/thirdMenu/cropPatternManagment/cropPatternManagement";

const CropPatternManagmentRoutes = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/الگوی واقعی`} exact component={RealPattern} />
        <Route
          path={`${path}/الگوی پیش بینی`}
          exact
          component={PredictionPattern}
        />
      </Switch>
    </div>
  );
};

export default CropPatternManagmentRoutes;
