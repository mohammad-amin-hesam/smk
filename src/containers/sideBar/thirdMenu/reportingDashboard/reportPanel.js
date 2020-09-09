import React, {useState} from "react";
import { connect } from "react-redux";

import GaugePanel from "./gaugePanel";

const ReportPanel = props => {
    const [reports, setReports] = useState(<div/>);
    let reportPanel;
    if (props.result) {
        reportPanel = <div>{
            props.result.map( item => (
                item.report.type === "gage" ? <GaugePanel result={item}/> : null
            ))
        }</div>;
    }
    setReports(reportPanel);

    return (
        <div>
            {reports}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        result: state.dashboardReports.reports
    }
};

export default connect(mapStateToProps)(ReportPanel);