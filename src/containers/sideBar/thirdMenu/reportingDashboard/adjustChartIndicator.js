import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {adjustChartIndicator, fetchDashboardReports} from "../../../../redux/dashboardReports/actions";

const AdjustChartIndicator = props => {


    let adjustData;
    const [indicatorValues, setIndicatorValues] = useState(props.values);

    useEffect(() => {
        props.fetchDashboardReports(props.requirements);
    }, [props.adjustResult])

    const btnSubmitHandler = event => {

        let value = "{";
        indicatorValues.map((item, index) => {
            value =
                value +
                '"' +
                item.id +
                '"' +
                ":" +
                item.indicators;
            if (index !== indicatorValues.length - 1) {
                value = value + ",";
            }
        });
        value = value + "}";

        adjustData = {
            divider_alias: props.options.divider,
            indicator_id: props.options.indicator_id,
            plantation_id: props.pId,
            ratio: props.ratio.alias,
            report_type_id: props.reportId,
            updated_at: new Date(),
            value: value
        };
        props.adjustChartIndicator(adjustData);
    };

    const handleIndicatorChange = event => {
        let newValues = [...indicatorValues];
        newValues[event.target.id].indicators = parseInt(event.target.value);
        setIndicatorValues(newValues);
    };

    return (
        <div className="AdjustChartIndicator">
            <div className="panel-default">
                <div className="panel-heading">تنظیم مقادیر شاخص</div>
                <div className="panel-body">
                    <div className="inline-group">
                        <label>مقدار کنونی:</label>
                        {props.result.report.ratio.title}
                    </div>
                    <div className="inline-group">
                        <label>نوع شاخص گزارش:</label>
                        <span></span>
                    </div>
                    <div className="form-group">
                        <label>انتخاب مقادیر:</label>
                        {indicatorValues.map((item, index) => (

                            <div key={index} className="inputFill">
                                <label>{item.name}</label>
                                <input
                                    type="number"
                                    value={indicatorValues[index].indicators}
                                    id={index}
                                    onChange={handleIndicatorChange}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="btn-info" onClick={btnSubmitHandler}>ثبت</button>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        adjustResult: state.dashboardReports.adjustResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        adjustChartIndicator: adjustData => dispatch(adjustChartIndicator(adjustData)),
        fetchDashboardReports: requirements => dispatch(fetchDashboardReports(requirements))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdjustChartIndicator);