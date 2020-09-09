import React, {useState} from "react";
import {connect} from "react-redux";

import {adjustIndicatorValue} from "../../../../redux/dashboardReports/actions";

const AdjustIndicatorValues = props => {

    let adjustData;

    const [low, setLow] = useState(props.indicators.low);
    const [high, setHigh] = useState(props.indicators.high);
    const [medium, setMedium] = useState(props.indicators.medium);

    const inputChangeHandler = event => {
        switch (event.target.id) {
            case "low" : {
                setLow(event.target.value);
                break;
            }
            case "medium": {
                setMedium(event.target.value);
                break;
            }
            case "high" : {
                setHigh(event.target.value);
                break;
            }
            default:
                break;
        }
    };

    const inputClickHandler = event => {
        switch (event.target.id) {
            case "low" : {
                let low = (2 * parseInt(medium)) - parseInt(high);
                setLow(low);
                break;
            }
            case "medium": {
                let medium = (parseInt(low) + parseInt(high))/2;
                setMedium(medium);
                break;
            }
            case "high" : {
                let high = (2 * parseInt(medium)) - parseInt(low);
                setHigh(high);
                break;
            }
            default:
                break;
        }
    };

    const btnSubmitHandler = event => {
        adjustData = {
            divider_alias: props.options.divider,
            indicator_id: props.options.indicator_id,
            plantation_id: props.pId,
            ratio: props.ratio.alias,
            report_type_id: props.reportId,
            updated_at: new Date(),
            value: {low: low, medium: medium, high: high}
        }
        props.adjustIndicatorValue(adjustData)
    };


    return (
        <div className="AdjustIndicatorValues">
            <div className="adjust-panel">
                <div className="panel-head">تنظیم مقادیر شاخص</div>
                <div className="panel-body">
                    <div className="inline-group">
                        <label>مقدار کنونی:</label>
                        <span>{props.defultValue}</span>
                        <span>{props.ratio.title}</span>
                    </div>
                    <div className="inline-group">
                        <label>نوع شاخص گزارش:</label>
                    </div>
                    <div className="form-group">
                        <label style={{display: "block"}}>انتخاب مقادیر:</label>
                        <div className="third">
                            <label>حداقل</label>
                            <input
                                id="low"
                                type="number"
                                value={low}
                                onChange={inputChangeHandler}
                                onClick={inputClickHandler}
                            />
                        </div>
                        <div className="third">
                            <label>پیش بینی</label>
                            <input
                                id="medium"
                                type="number"
                                value={medium}
                                onChange={inputChangeHandler}
                                onClick={inputClickHandler}
                            />
                        </div>
                        <div className="third">
                            <label>حداکثر</label>
                            <input
                                id="high"
                                type="number"
                                value={high}
                                onChange={inputChangeHandler}
                                onSelect={inputClickHandler}
                            />
                        </div>
                    </div>
                    <button className="btnSubmit" onClick={btnSubmitHandler}>ثبت</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        adjustIndicatorValue: adjustData => dispatch(adjustIndicatorValue(adjustData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdjustIndicatorValues);
