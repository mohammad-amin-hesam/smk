import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DatePicker} from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";

import {addEditSoilAnalyses} from "../../../../redux/actions";
import {toast} from "react-toastify";

const SoilAnalysesEdit = props => {
    const staticV = [
        {
            title: "هدایت الکتریکی(شوری)",
            name: "EC",
            value: props.analyse.value["EC"]
        },
        {
            title: "پتاسیم قابل جذب",
            name: "K",
            value: props.analyse.value["K"]
        },
        {
            title: "نیتروژن(ازت)",
            name: "N",
            value: props.analyse.value["N"]
        },
        {
            title: "کربن آلی",
            name: "OC",
            value: props.analyse.value["OC"]
        },
        {
            title: "فسفر قابل جذب",
            name: "P",
            value: props.analyse.value["P"]
        },
        {
            title: "واکنش خاک(اسیدیته)",
            name: "PH",
            value: props.analyse.value["PH"]
        },
        {
            title: "SAR",
            name: "SAR",
            value: props.analyse.value["SAR"]
        },
        {
            title: "درصد اشباع خاک",
            name: "SP",
            value: props.analyse.value["SP"]
        },
        {
            title: "مواد خنثی شونده(آهک)",
            name: "TNV",
            value: props.analyse.value["TNV"]
        },
        {
            title: "رس",
            name: "clay",
            value: props.analyse.value["clay"]
        },
        {
            title: "مس",
            name: "copper",
            value: props.analyse.value["copper"]
        },
        {
            title: "آهن",
            name: "iron",
            value: props.analyse.value["iron"]
        },
        {
            title: "منگنز",
            name: "manganese",
            value: props.analyse.value["manganese"]
        },
        {
            title: "شن",
            name: "sand",
            value: props.analyse.value["sand"]
        },
        {
            title: "سیلت",
            name: "silt",
            value: props.analyse.value["silt"]
        },
        {
            title: "کلاس بافت خاک",
            name: "soil_texture_class",
            value: props.analyse.value["soil_texture_class"]
        },
        {
            title: "روی",
            name: "zine",
            value: props.analyse.value["zine"]
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

    const [analyseDate, setAnalyseDate] = useState(
        moment(props.analyse.analysis_date, "jYYYY/jMM/jDD").format('jYYYY/jMM/jDD')
    );
    const [staticValues, setStaticValues] = useState(staticV);
    const [description, setDescription] = useState(props.analyse.description);
    const [analyseId, setAnalyseId] = useState(props.analyse.id);

    useEffect(() => {
        if(props.addEditResult) {
            toast.success("عملیات با موفقیت انجام شد", {
                position: toast.POSITION.TOP_CENTER,
                rtl: true,
                style: {font: "inherit"}
            });
        }
    }, [props.addEditResult]);


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
            soil_id: analyseId,
            description: description
        }
    };

    const btnSubmitClickHandler = () => {
        props.addEditSoilAnalyses(analyseId, exportFormData(staticValues))
    };

    return (
        <div className="SoilAnalysesEdit">
            <div className="form-title" style={{position: "sticky"}}>
                <span style={{fontSize: "1rem"}}>افزودن/ویرایش آزمایش آب</span>
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
        plantationId: state.plantationState.plantationId,
        addEditResult: state.soilAnalyses.addEditResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addEditSoilAnalyses: (analyseId, postData) => dispatch(addEditSoilAnalyses(analyseId, postData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SoilAnalysesEdit);

