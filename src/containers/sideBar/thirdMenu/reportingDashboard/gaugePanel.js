import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Gauge from 'react-svg-gauge';

import {fetchDashboardReportsByRatio} from "../../../../redux/actions";
import AdjustIndicatorValues from "./adjustIndicatorValues";
import AddToScreens from "./addToScreens";

const GaugePanel = props => {

    const [result, setResult] = useState(props.result);

    useEffect(() => {
        setResult(props.result);
    }, [props.result]);

    const [ratio, setRatio] = useState(props.result.report.ratio);
    const [adjustIndicatorOpen, setAdjustIndicatorOpen] = useState(false);
    const [addScreenOpen, setAddScreenOpen] = useState(false);

    useEffect(() => {
        if (props.ratioResult) {
            if (props.ratioResult[0].id === props.result.id) {
                setResult(props.ratioResult[0])
            }
            setAdjustIndicatorOpen(false);
        }
    }, [props.ratioResult]);

    const fetchedRatios = [];
    for (let key in props.result.report.ratios) {
        fetchedRatios.push({
            ...props.result.report.ratios[key],
            id: key
        })
    }

    const valueStyle = {
        fontSize: "1.7rem",
        fontWeight: "bold"
    };

    const handleRatioChange = event => {
        setRatio(fetchedRatios[event.target.value]);
        let newRequirements = {
            ...props.requirements,
            ratio: ratio.alias,
            resultId: props.result.id
        };
        props.fetchDashboardReportsByRatio(newRequirements);
    };
    return (
        <div className="GaugePanel">
            <div className="panel-heading">
                <span>{result.title ? result.title : ""}</span>
                <select value={fetchedRatios[fetchedRatios.indexOf(ratio)]} onChange={handleRatioChange}>
                    {
                        fetchedRatios.map((ratio, index) => (
                            <option value={index}>{ratio.title}</option>
                        ))
                    }
                </select>
                {
                    props.indicatorId !== "" ? <div style={{display: "inline"}}>
                            <img
                                onClick={() => setAddScreenOpen(!addScreenOpen)}
                                src={require('../../../../assets/imges/add.svg')}/>
                            <img
                                onClick={() => setAdjustIndicatorOpen(!adjustIndicatorOpen)}
                                src={require('../../../../assets/imges/controls.svg')}/>
                        </div> :
                        null
                }

            </div>
            <div className="panel-body">
                <Gauge
                    min={result.report.indicators.low}
                    max={result.report.indicators.high}
                    value={result.report.value}
                    color={result.report.excellence.color}
                    valueLabelStyle={valueStyle}
                    label=""
                    height={250}
                />
                <span>{result.report.ratio.title} - {result.report.excellence.message}</span>
            </div>
            {
                adjustIndicatorOpen ?
                    <AdjustIndicatorValues
                        defultValue={result.report.value}
                        indicators={result.report.indicators}
                        ratio={result.report.ratio}
                        options={props.resultOptions}
                        pId={props.plantationId}
                        reportId={result.id}
                    /> :
                    null
            }
            {
                addScreenOpen ?
                    <AddToScreens
                        reportId={result.id}
                        ratio={ratio.alias}
                        requirements={props.requirements}/> :
                    null
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        ratioResult: state.dashboardReports.ratioReports.result,
        resultOptions: state.dashboardReports.reports.options,
        plantationId: state.plantationState.plantationId,
        indicatorId: state.dashboardReports.indicatorId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDashboardReportsByRatio: requirements => dispatch(fetchDashboardReportsByRatio(requirements))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GaugePanel);