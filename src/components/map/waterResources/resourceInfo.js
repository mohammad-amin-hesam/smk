import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import {fetchResourceDetail} from "../../../redux/actions";

const ResourceInfo = props => {

    let history = useHistory();

    const btnMode = [
        "optimizedCropPattern",
        "showWaterTests",
        "submitWaterTest"
    ];

    const [selectedBtn, setSelectedBtn] = useState("");

    useEffect(() => {
        props.fetchResourceDetail(props.resourceId, props.yearId);
    }, []);

    const btnClickHandler = event => {
        history.push(`/${event.target.value}/${props.resourceId}`)
    };

    return (
        <div>
            <div className="ResourceInfo">
                {
                    props.detail ?
                        <div>
                            <div className="row">
                                <span>نام منبع : </span>
                                <span>{props.detail.name}</span>
                            </div>
                            <div className="row">
                                <span>نوع منبع : </span>
                                <span>{props.detail.type}</span>
                            </div>
                            <div className="row">
                                <span>ساعات کارکرد مجاز در سال : </span>
                                <span>{props.detail.whpy}</span>
                            </div>
                            <div className="row">
                                <span>دبی پیشفرض : </span>
                                <span>{props.detail.default_debi}(لیتر بر ثانیه)</span>
                            </div>
                            <div className="row">
                                <span>دبی سال زراعی : </span>
                                <span>{props.detail.debi}(لیتر بر ثانیه)</span>
                            </div>
                            <button
                                value={btnMode[0]}
                                onClick={btnClickHandler}
                                className="btn-success"
                            >
                               ایجاد الگوی کشت بهینه
                            </button>
                            <button
                                value={btnMode[1]}
                                onClick={btnClickHandler}
                                className="btn-info"
                            >
                                مشاهده آزمایشات آب
                            </button>
                            <button
                                value={btnMode[2]}
                                onClick={btnClickHandler}
                                className="btn-warning"
                            >
                                ثبت آزمایشات آب
                            </button>
                        </div> : null
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        yearId: state.plantationState.yearId,
        detail: state.waterResources.detail
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchResourceDetail: (resourceId, yId) => dispatch(fetchResourceDetail(resourceId, yId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceInfo);