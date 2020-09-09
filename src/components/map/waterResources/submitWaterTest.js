import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DatePicker} from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";
import {useParams, useHistory} from "react-router";
import Button from "../../ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import {submitWaterTest} from "../../../redux/actions";

const SubmitWaterTest = props => {
    let { id } = useParams();
    let history = useHistory();

    const comeBack = event => {
        history.goBack();
    };

    const staticV = [
        {
            title: "هدایت الکتریکی",
            name: "EC",
            value: 0
        },
        {
            title: "اسیدیته",
            name: "PH",
            value: 0
        },
        {
            title: "کربنات",
            name: "Co3",
            value: 0
        },
        {
            title: "بیکربنات",
            name: "Hco3",
            value: 0
        },
        {
            title: "کلرید",
            name: "Cl",
            value: 0
        },
        {
            title: "کربن آلی",
            name: "OC",
            value: 0
        },
        {
            title: "سولفات",
            name: "So4",
            value: 0
        },
        {
            title: "Ani.",
            name: "Ani",
            value: 0
        },
        {
            title: "کلسیم",
            name: "Ca",
            value: 0
        },
        {
            title: "منیزیم",
            name: "Mg",
            value: 0
        },
        {
            title: "سدیم",
            name: "Na",
            value: 0
        },
        {
            title: "پتاسیم",
            name: "k",
            value: 0
        },
        {
            title: "Cat.",
            name: "CAT",
            value: 0
        },
        {
            title: "S.A.R",
            name: "SAR",
            value: 0
        },
        {
            title: "کل مواد محلول",
            name: "TDS",
            value: 0
        },
        {
            title: "سختی کل",
            name: "THD",
            value: 0
        },
        {
            title: "بر",
            name: "B",
            value: 0
        },
        {
            title: "RSC",
            name: "RSC",
            value: 0
        },
        {
            title: "سختی کربناتی",
            name: "CHD",
            value: 0
        },
        {
            title: "آهن",
            name: "Fe",
            value: 0
        },
        {
            title: "منگنز",
            name: "Mn",
            value: 0
        },
        {
            title: "روی",
            name: "Zn",
            value: 0
        },
        {
            title: "مس",
            name: "Cu",
            value: 0
        },
        {
            title: "سرب",
            name: "Pb",
            value: 0
        },
        {
            title: "کادمیم",
            name: "Cd",
            value: 0
        },
        {
            title: "CaMg",
            name: "CaMg",
            value: 0
        },
        {
            title: "S-cation",
            name: "S-cation",
            value: 0
        },
        {
            title: "S-Anion",
            name: "S-Anion",
            value: 0
        },
        {
            title: "water-class",
            name: "water-class",
            value: 0
        }
    ];
    const [testDate, setTestDate] = useState(
        moment(new Date()).format('jYYYY/jMM/jDD')
    );
    useEffect(() => comeBack, [props.submitResult]);
    const [staticValues, setStaticValues] = useState(staticV);
    const [description, setDescription] = useState("");
    const inputChangeHandler = event => {
        let newList = staticValues;
        newList[event.target.id].value = event.target.value;
        setStaticValues([...newList]);
    };

    const datePickerChangeHandler = (unix, formatted) => {
        setTestDate(formatted);
    };

    const textareaChangeHandler = event => {
        setDescription(event.target.value);
    };

    const exportFormData = (array) => {
        return {
            analysis_date: testDate,
            EC: array[0].value,
            PH: array[1].value,
            Co3: array[2].value,
            Hco3: array[3].value,
            Cl: array[4].value,
            OC: array[5].value,
            So4: array[6].value,
            Ani: array[7].value,
            Ca: array[8].value,
            Mg: array[9].value,
            Na: array[10].value,
            k: array[11].value,
            CAT: array[12].value,
            SAR: array[13].value,
            TDS: array[14].value,
            THD: array[15].value,
            B: array[16].value,
            RSC: array[17].value,
            CHD: array[18].value,
            Fe: array[19].value,
            Mn: array[20].value,
            Zn: array[21].value,
            Cu: array[22].value,
            Pb: array[23].value,
            Cd: array[24].value,
            CaMg: array[25].value,
            'S-cation': array[26].value,
            'S-Anion': array[27].value,
            'water-class': array[28].value,
            description: description,
            'water_resource_id': id,
        }
    };

    const btnSubmitClickHandler = () => {
        props.submitWaterTest(exportFormData(staticValues));
    };

    return (
        <div className="WaterTestEdit">
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
                        preSelected={testDate}
                        onChange={datePickerChangeHandler}
                    />
                </div>
                {
                    staticValues.map((value, index) => (
                        <div key={value.name} className="form-group">
                            <label>:{value.title}</label>
                            <input
                                type="number"
                                className="form-control"
                                id={index}
                                value={value.value}
                                onChange={inputChangeHandler}
                            />
                        </div>
                    ))
                }
                <div className="form-fullsize">
                    <label>توضیحات</label>
                    <textarea className="textarea-full" value={description} onChange={textareaChangeHandler}/>
                </div>
                <button onClick={btnSubmitClickHandler} >ثبت</button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        submitResult: state.waterTests.submitResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitWaterTest: postData => dispatch(submitWaterTest(postData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitWaterTest);