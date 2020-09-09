import React, {useState} from "react";
import {connect} from "react-redux";

import {
    setWaterResourceActive,
    setWeatherStationActive,
    setSatImgActive
} from "../../../redux/actions";
import DateDivider from "../satelliteImage/dateDivider";

const labels = [
    'تصاویر ماهواره ای',
    'ایستگاه های هواشناسی',
    'منابع آب'
];

const LayerManagement = props => {
    const toggleCheckbox = event => {
        switch (event.target.value) {
            case labels[2] : {
                if (event.target.checked) {
                    props.setWaterResourceActive(true)
                } else {
                    props.setWaterResourceActive(false)
                }
                break;
            }
            case labels[1] : {
                if (event.target.checked) {
                    props.setWeatherStationActive(true)
                } else {
                    props.setWeatherStationActive(false)
                }
                break;
            }
            case labels[0] : {
                if (event.target.checked) {
                    props.setSatImgActive(true)
                } else {
                    props.setSatImgActive(false)
                }
                break;
            }
            default:
                break;
        }
    };
    const checkInputAble = label => {
        if (label === labels[0]) {
            switch (props.plantationState) {
                case "piece":
                    return false;
                case "plant":
                    return false;
                default:
                    return true;
            }
        } else {
            return false
        }
    }

    return (
        <div className="LayerManagementContainer">
            <div style={{fontSize: '1em'}} className="LayerManagementItembox">مدیریت لایه ها</div>
            {labels.map(label => (
                <div className="LayerManagementItembox" key={label}>
                    <label>
                        <input
                            type="checkbox"
                            value={label}
                            onChange={toggleCheckbox}
                            disabled={checkInputAble(label)}
                        />
                        {label}
                    </label>
                </div>
            ))}
            {props.satelliteImgActive? <DateDivider/> : <div/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        plantationState: state.plantationState.plantationState,
        satelliteImgActive: state.satelliteImg.active
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setWaterResourceActive: active => dispatch(setWaterResourceActive(active)),
        setWeatherStationActive: active => dispatch(setWeatherStationActive(active)),
        setSatImgActive : active => dispatch(setSatImgActive(active))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerManagement);