import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Customers from "../../containers/sideBar/thirdMenu/customers/Customers";
import AddEditCustomer from "../../containers/sideBar/thirdMenu/customers/addEditCustomer";

const CustomerRoutes = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={path} exact component={Customers} />
        <Route
          path={`${path}/addEditCustomer`}
          exact
          component={AddEditCustomer}
        />
        <Route
          path={`${path}/addEditCustomer/:id`}
          exact
          component={AddEditCustomer}
        />
      </Switch>
    </div>
  );
};

export default CustomerRoutes;
