import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "../../../../styles/local/packages/gauge.scss"

import {fetchScreenReports, deleteDashboardScreen, fetchDashboardScreens} from "../../../../redux/actions";
import GaugePanel from "./gaugePanel";
import BarChartPanel from "./barChartPanel";
import {toast} from "react-toastify";

const Screen = props => {

    // let reportPanel;
    const [reportPanel, setReportPanel] = useState(<div/>);

    useEffect(() => {
        props.fetchScreenReports(props.screenId)
    }, [props.screenId]);

    useEffect(() => {
        if (props.screenDeleteResult) {
            toast.success("عملیات حذف با موفقیت انجام شد", {
                position: toast.POSITION.TOP_CENTER
            });
            props.fetchHumanResourcesTypes(props.plantationId);
        }
    }, [props.screenDeleteResult]);

    useEffect(() => {
        if (props.result) {
            setReportPanel(<div>{
                props.result.map(item => (
                    item.report.type === "gage" ?
                        <GaugePanel result={item}/> :
                        item.report.type === "bar" ?
                            <BarChartPanel result={item}/> :
                            null
                ))
            }</div>);
        }
    }, [props.result]);

    const deleteScreenClickHandler = () => {
        props.deleteDashboardScreen(props.screenId)
    };

    return (
        <div className="DashboardScreen">
            {reportPanel}
            <button onClick={deleteScreenClickHandler} >حذف صفحه</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        result: state.dashboardOptions.screenReports,
        deleteResult: state.dashboardOptions.screenDeleteResult,
        plantationId: state.plantationState.plantationId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchScreenReports: scId => dispatch(fetchScreenReports(scId)),
        deleteDashboardScreen: scId => dispatch(deleteDashboardScreen(scId)),
        fetchScreens: pId => dispatch(fetchDashboardScreens(pId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);