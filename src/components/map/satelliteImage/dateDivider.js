import React, {useEffect} from "react";
import {connect} from "react-redux";

import moment from "moment-jalaali";

import {fetchSatImg, setSatIndex} from "../../../redux/actions";
import Spinner from "../../ui/spinner/spinner";


const DateDivider = props => {
    useEffect(() => {
        switch (props.plantationState) {
            case "piece": {
                props.fetchSatImg("unit", props.plantationId);
                break;
            }
            case "plant": {
                props.fetchSatImg("piece", props.plantationId);
                break;
            }
            default : {
                break;
            }
        }
    }, [props.plantationState, props.plantationId]);


    const dateClickedHandler = event => {
        props.setSatIndex(event.target.value);
    }
    const jalaliDates = [];
    props.satellitesImgs.map(sat => {
        const m = moment(sat.day).locale('fa').format('jYYYY/jMM/jDD');
        jalaliDates.push(m)

    });
    let message = "";
    if (props.satellitesImgs.length > 0) {
        message = "تاریخ مورد نظر را انتخاب کنید"
    } else {
        message = "هیچ عکس ماهواره ای ثبت نشده است"
    }

    let satDates = <Spinner/>
    if (!props.loading) {
        satDates = jalaliDates.map(date => (
            <button
                value={jalaliDates.indexOf(date)}
                key={jalaliDates.indexOf(date)}
                onClick={dateClickedHandler}
            >
                {date}
            </button>
        ))
    }

    return (
        <div className="LayerManagementButtonContainer">
            <div>{message}</div>
            {satDates}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        plantationState: state.plantationState.plantationState,
        satellitesImgs: state.satelliteImg.satellites,
        loading: state.satelliteImg.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSatImg: (state, pId) => dispatch(fetchSatImg(state, pId)),
        setSatIndex: index => dispatch(setSatIndex(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateDivider);