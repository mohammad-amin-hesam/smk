import React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import MainRoute from "../routes";
import Login from "../routes/pages/login";
import Error from "../routes/pages/error";

const InitialPath = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

// eslint-disable-next-line react/prefer-stateless-function
const App = (props) => {
  const { user, location } = props;
  // if (
  //   location.pathname === '/' ||
  //   location.pathname === '/app' ||
  //   location.pathname === '/app/'
  // ) {
  //   return <Redirect to="/" />
  // }
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <InitialPath path="/" authUser={user} component={MainRoute} />
        <Route path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(mapStateToProps, {})(App);
