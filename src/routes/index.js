import React from "react";
import clsx from "clsx";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import dashboards from "./dashboards";
import SecondMenu from "../containers/sideBar/secondMenu";
import SideBar from "../containers/sideBar/drawer";
import ThirdMenu from "../containers/sideBar/thirdMenu";
import TopBar from "../containers/topBar/topBar";
import MyMap from "../components/map/map";
import { parseQuery } from "../utils";
import { listCompanies, listFarmsByCompanyId } from "../redux/actions";
import Login from "../routes/pages/login";
import Dashboards from "./dashboards";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    width: "65%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const MainApp = (props) => {
  const { match, location } = props;
  const classes = useStyles();
  return (
    <div className="layout">
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar && classes.appBarShift)}
      >
        <TopBar />
      </AppBar>
      <div className="all_Menu_sideBar">
        <SideBar />
        <List className="secondMenu">
          <Route path={`${match.url}`}>
            <SecondMenu data={{ ...parseQuery(location.search) }} />
          </Route>
        </List>
        <List className="thirdMenu">
          <Route component={ThirdMenu} />
        </List>
        {/* <List className={classes.fourthMenu}><FourthMenu/></List> */}
      </div>
      <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8} lg={12}>
              <Route component={dashboards} />
              <MyMap />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, { listCompanies, listFarmsByCompanyId })(MainApp)
);
