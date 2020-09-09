import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router-dom";
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {chromeTabsStylesHook} from '@mui-treasury/styles/tabs';

import {closeModal} from "../../../../redux/modal/action";
import {fetchDashboardScreens} from "../../../../redux/actions";
import Button from "../../../../components/ui/button/button";
import MainPanel from "./mainPanel";
import AddDashboards from "./addDashboard";
import Screen from "./screen";

const ReportingDashboard = props => {
    let history = useHistory();

    useEffect(() => {
        props.fetchScreens(props.plantationId);
    }, []);

    const [tabIndex, setTabIndex] = useState(0);
    const tabsStyles = chromeTabsStylesHook.useTabs();
    const tabItemStyles = chromeTabsStylesHook.useTabItem();

    const comeBack = event => {
        history.goBack();
    };
    let dashboard = <div/>;

    switch (tabIndex) {
        case 0 : {
            dashboard = <MainPanel/>;
            break;
        }
        case props.screens.length + 1 : {
            dashboard = <AddDashboards/>;
            break;
        }
        default: {
            dashboard = <Screen screenId={props.screens[tabIndex-1].id}/>;
            break;
        }
    }

    return (
        <MuiThemeProvider theme={createMuiTheme({})}>
            <div className="ReportingDashboard">
                <div className="form-title">
                    <span style={{fontSize: "1rem"}}>داشبورد گزارش گیری</span>
                    <div className="submit-close">
                        <Button btnType="success" clicked={comeBack}>
                            <span>بازگشت</span>
                            <ArrowBackIcon/>
                        </Button>
                    </div>
                </div>
                <Tabs
                    classes={tabsStyles}
                    value={tabIndex}
                    onChange={(e, index) => setTabIndex(index)}
                >
                    <Tab
                        classes={tabItemStyles}
                        label={'داشبورد اصلی'
                        }/>
                    {props.screens ?
                        props.screens.map(screen => (
                            <Tab
                                classes={tabItemStyles}
                                label={screen.title}
                            />
                        )) : null
                    }
                    <Tab classes={tabItemStyles} label={'+'}/>
                </Tabs>
                {dashboard}
            </div>
        </MuiThemeProvider>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        screens: state.dashboardOptions.screens
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchScreens: pId => dispatch(fetchDashboardScreens(pId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportingDashboard);
