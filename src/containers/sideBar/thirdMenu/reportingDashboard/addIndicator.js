import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {addNewIndicator} from "../../../../redux/actions";

const AddIndicator = props => {

    const [indicatorMode, setIndicatorMode] = useState("");
    const [inputTitle, setInputTitle] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleTitleChange = event => {
        event.preventDefault();
        setInputTitle(event.target.value);
    };

    const btnIndicatorClickHandler = event => {
        event.preventDefault();
        setIndicatorMode(event.target.value);
    };

    const submitClickHandler = () => {
        if (indicatorMode !== "" && inputTitle !== "") {

            let indicatorData = {
                title: inputTitle,
                type: indicatorMode,
                plantation_id: props.plantationId ,
                category_id: 1,
            };
            props.addNewIndicator(indicatorData);
        }
    };

    return (
        <div className="AddIndicator" onSubmit={handleSubmit}>
            <form className="panel">
                <div className="panel-heading">تعریف شاخص جدید</div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>عنوان</label>
                        <input onChange={handleTitleChange}/>
                    </div>
                    <div className="form-group">
                        <label>انتخاب نوع شاخص</label>
                        <div className="btn-group">
                            <button
                                className={indicatorMode === "public" ? "btn-active" : "btn-deactive"}
                                value="public"
                                onClick={btnIndicatorClickHandler}
                            >
                                <span>شاخص عمومی</span>
                                در دسترس برای تمام گزارشات
                            </button>
                            <button
                                className={indicatorMode === "private" ? "btn-active" : "btn-deactive"}
                                value="private"
                                onClick={btnIndicatorClickHandler}
                            >
                                <span>شاخص اختصاصی</span>
                                در دسترس برای تمام گزارشات
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="Submit"
                    onClick={submitClickHandler}
                >ایجاد شاخص</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewIndicator: indicatorData => dispatch(addNewIndicator(indicatorData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIndicator);