import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DatePicker} from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";
import {useHistory, useParams} from "react-router";
import Button from "../../../../components/ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import {submitSoilAnalyses} from "../../../../redux/actions";

const SoilAnalysesEdit = props => {
    let history = useHistory();

    const comeBack = event => {
        history.goBack();
    };

    const staticV = [
        {
            title: "هدایت الکتریکی(شوری)",
            name: "EC",
            value: 0
        },
        {
            title: "پتاسیم قابل جذب",
            name: "K",
            value: 0
        },
        {
            title: "نیتروژن(ازت)",
            name: "N",
            value: 0
        },
        {
            title: "کربن آلی",
            name: "OC",
            value: 0
        },
        {
            title: "فسفر قابل جذب",
            name: "P",
            value: 0
        },
        {
            title: "واکنش خاک(اسیدیته)",
            name: "PH",
            value: 0
        },
        {
            title: "SAR",
            name: "SAR",
            value: 0
        },
        {
            title: "درصد اشباع خاک",
            name: "SP",
            value: 0
        },
        {
            title: "مواد خنثی شونده(آهک)",
            name: "TNV",
            value: 0
        },
        {
            title: "رس",
            name: "clay",
            value: 0
        },
        {
            title: "مس",
            name: "copper",
            value: 0
        },
        {
            title: "آهن",
            name: "iron",
            value: 0
        },
        {
            title: "منگنز",
            name: "manganese",
            value: 0
        },
        {
            title: "شن",
            name: "sand",
            value: 0
        },
        {
            title: "سیلت",
            name: "silt",
            value: 0
        },
        {
            title: "کلاس بافت خاک",
            name: "soil_texture_class",
            value: 0
        },
        {
            title: "روی",
            name: "zine",
            value: 0
        }
    ];

    const selectArray = [
        "شنی",
        "سنی - لومی",
        "لومی - شنی",
        "لوم",
        "لومی - سیلتی",
        "سیلت",
        "لومی رسی - شنی",
        "لومی و رسی",
        "لوم رسی - سیلتی",
        "رسی و شنی",
        "رسی و سیلتی",
        "رسی",
    ];

    useEffect(() => comeBack, [props.submitResult]);
    const [analyseDate, setAnalyseDate] = useState(
        moment(new Date()).format('jYYYY/jMM/jDD')
    );
    const [staticValues, setStaticValues] = useState(staticV);
    const [description, setDescription] = useState("");

    const inputChangeHandler = event => {
        let newList = staticValues;
        newList[event.target.id].value = event.target.value;
        setStaticValues([...newList]);
    };

    const datePickerChangeHandler = (unix, formatted) => {
        setAnalyseDate(formatted);
    };

    const textareaChangeHandler = event => {
        setDescription(event.target.value);
    };

    const exportFormData = (array) => {
        return {
            analysis_date: analyseDate,
            plantation_id: props.plantationId,
            EC: array[0].value,
            K: array[1].value,
            N: array[2].value,
            OC: array[3].value,
            P: array[4].value,
            PH: array[5].value,
            SAR: array[6].value,
            SP: array[7].value,
            TNV: array[8].value,
            clay: array[9].value,
            copper: array[10].value,
            iron: array[11].value,
            manganese: array[12].value,
            sand: array[13].value,
            silt: array[14].value,
            soil_texture_class: array[15].value,
            zine: array[16].value,
            description: description
        }
    };

    const btnSubmitClickHandler = () => {
        props.submitSoilAnalyses(exportFormData(staticValues));
    };

    return (
        <div className="SoilAnalysesSubmit">
            <div className="form-title" style={{position: "sticky"}}>
                <span style={{fontSize: "1rem"}}>افزودن/ویرایش آزمایش آب</span>
                <div className="submit-close">
                    <Button btnType="success" clicked={comeBack}>
                        <span>بازگشت</span>
                        <ArrowBackIcon/>
                    </Button>
                </div>
            </div>
            <div className="form-content">
                <div className="form-group">
                    <label>تاریخ عملیات</label>
                    <DatePicker
                        id={"analysis_date"}
                        placeholder="----/--/--"
                        format="jYYYY/jMM/jDD"
                        customClass="form-datePick"
                        preSelected={analyseDate}
                        onChange={datePickerChangeHandler}
                    />
                </div>
                {
                    staticValues.map((value, index) => (
                        <div key={value.name} className="form-group">
                            <label>:{value.title}</label>
                            {
                                index !== 15 ?
                                    <input
                                        type="number"
                                        className="form-control"
                                        id={index}
                                        value={value.value}
                                        onChange={inputChangeHandler}
                                    /> :
                                    <select className="form-control" defaultValue={value.value}>
                                        {
                                            selectArray.map((texture, i) => (
                                                <option value={i + 1}>{texture}</option>
                                            ))
                                        }
                                    </select>}
                        </div>
                    ))
                }
                <div className="form-fullsize">
                    <label>توضیحات</label>
                    <textarea className="textarea-full" value={description} onChange={textareaChangeHandler}/>
                </div>
                <button onClick={btnSubmitClickHandler}>ثبت</button>
            </div>
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
        submitSoilAnalyses: postData=> dispatch(submitSoilAnalyses(postData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SoilAnalysesEdit);

