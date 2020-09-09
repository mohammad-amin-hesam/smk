import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {connect} from "react-redux";

import {fetchDashboardReportsByRatio} from "../../../../redux/dashboardReports/actions";
import AdjustChartIndicator from "./adjustChartIndicator";
import AdjustIndicatorValues from "./adjustIndicatorValues";
import AddToScreens from "./addToScreens";


const BarChartPanel = props => {

    const [result, setResult] = useState(props.result);

    useEffect(() => {
        setResult(props.result);
    }, [props.result]);

    const btnGroupLabels = [
        "chart",
        "table",
        "map"
    ];

    const [ratio, setRatio] = useState(props.result.report.ratio);
    const [btnGpLabel, setBtnGpLabel] = useState(btnGroupLabels[0]);
    const [adjustIndicatorOpen, setAdjustIndicatorOpen] = useState(false);
    const [addScreenOpen, setAddScreenOpen] = useState(false);
    let myElement;
    let indicatorValues = [];

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

    const getTableData = () => {
        let tableData = [
            {
                title: "عنوان",
                value: "مقدار",
                high: "حداکثر",
                medium: "پیش بینی",
                low: "حداقل"
            }
        ];
        result.report.items.map(item => {
            tableData.push({
                title: item.title,
                value: item.value,
                high: "",
                medium: "",
                low: ""
            })
        });
        return tableData;
    };

    const getChartData = () => {
        let chartLabels = [];
        let chartDataIndicator = [];
        let chartDataValue = [];
        let chartLabelValue = "مقدار کنونی";
        let backgroundColorValue = [];
        indicatorValues = [];
        if (result.report.items) {
            result.report.items.map((item, index) => {
                chartLabels.push(item.title);
                chartDataValue.push(item.value);
                chartDataIndicator.push(item.indicators);
                backgroundColorValue.push(item.excellence.color);
                indicatorValues.push({
                    id: item.id,
                    name: item.title,
                    indicators: item.indicators
                })
            });
        }

        return {
            labels: chartLabels,
            datasets: [{
                label: chartLabelValue,
                data: chartDataValue,
                backgroundColor: backgroundColorValue
            },
                {
                    label: "",
                    data: chartDataIndicator,
                }]
        }
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

    switch (btnGpLabel) {
        case btnGroupLabels[0]: {
            myElement = <Bar data={getChartData()}/>;
            break;
        }
        case btnGroupLabels[1]: {
            const tableData = getTableData();
            myElement = <div className="table-container">
                <span>شاخص:{result.report.items[0].excellence.type ? result.report.items[0].excellence.type.name : null}</span>
                <span>واحد:{result.report.ratio.title}</span>
                <table>
                    <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            {
                                Object.keys(item).map(td => <td>{item[td]}</td>)
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>;
            break;
        }
        case btnGroupLabels[2]: {
            myElement = <div>map</div>;
            break;
        }
    }

    return (
        <div className="BarChartPanel">
            <div className="panel-heading">
                <span>{result.title ? result.title : ""}</span>
                <select value={fetchedRatios[fetchedRatios.indexOf(ratio)]} onChange={handleRatioChange}>
                    {
                        fetchedRatios.map((ratio, index) => (
                            <option value={index}>{ratio.title}</option>
                        ))
                    }
                </select>
                <img
                    onClick={() => setAddScreenOpen(!addScreenOpen)}
                    src={require('../../../../assets/imges/add.svg')}/>
                <img
                    onClick={() => setAdjustIndicatorOpen(!adjustIndicatorOpen)}
                    src={require('../../../../assets/imges/controls.svg')}/>
                <div className="btn-group">
                    <button
                        onClick={() => setBtnGpLabel(btnGroupLabels[0])}
                        className={btnGpLabel === btnGroupLabels[0] ? "btn-active" : "btn-deactive"}
                    >
                        نمودار
                    </button>
                    <button
                        onClick={() => setBtnGpLabel(btnGroupLabels[1])}
                        className={btnGpLabel === btnGroupLabels[1] ? "btn-active" : "btn-deactive"}
                    >
                        جدول
                    </button>
                    {/*<button*/}
                    {/*    onClick={() => setBtnGpLabel(btnGroupLabels[2])}*/}
                    {/*    className={btnGpLabel === btnGroupLabels[2] ? "btn-active" : "btn-deactive"}*/}
                    {/*>*/}
                    {/*    نقشه*/}
                    {/*</button>*/}
                </div>
            </div>
            <div className="panel-body">
                {myElement}
            </div>
            {
                adjustIndicatorOpen ?
                    <AdjustChartIndicator
                        values={indicatorValues}
                        defultValue={result.report.value}
                        indicators={result.report.indicators}
                        ratio={result.report.ratio}
                        options={props.resultOptions}
                        pId={props.plantationId}
                        reportId={result.id}
                        requirements={props.requirements}
                        result={result}/> :
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
        plantationId: state.plantationState.plantationId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDashboardReportsByRatio: requirements => dispatch(fetchDashboardReportsByRatio(requirements))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BarChartPanel);