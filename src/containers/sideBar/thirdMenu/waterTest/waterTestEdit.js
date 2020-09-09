import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DatePicker} from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";

import {addEditWaterTest} from "../../../../redux/actions";
import {toast} from "react-toastify";

const WaterTestEdit = props => {
    const staticV = [
        {
            title: "هدایت الکتریکی",
            name: "EC",
            value: props.test.value["EC"]
        },
        {
            title: "اسیدیته",
            name: "PH",
            value: props.test.value["PH"]
        },
        {
            title: "کربنات",
            name: "Co3",
            value: props.test.value["Co3"]
        },
        {
            title: "بیکربنات",
            name: "Hco3",
            value: props.test.value["Hco3"]
        },
        {
            title: "کلرید",
            name: "Cl",
            value: props.test.value["Cl"]
        },
        {
            title: "کربن آلی",
            name: "OC",
            value: props.test.value["OC"]
        },
        {
            title: "سولفات",
            name: "So4",
            value: props.test.value["So4"]
        },
        {
            title: "Ani.",
            name: "Ani",
            value: props.test.value["Ani"]
        },
        {
            title: "کلسیم",
            name: "Ca",
            value: props.test.value["Ca"]
        },
        {
            title: "منیزیم",
            name: "Mg",
            value: props.test.value["Mg"]
        },
        {
            title: "سدیم",
            name: "Na",
            value: props.test.value["Na"]
        },
        {
            title: "پتاسیم",
            name: "k",
            value: props.test.value["k"]
        },
        {
            title: "Cat.",
            name: "CAT",
            value: props.test.value["CAT"]
        },
        {
            title: "S.A.R",
            name: "SAR",
            value: props.test.value["SAR"]
        },
        {
            title: "کل مواد محلول",
            name: "TDS",
            value: props.test.value["TDS"]
        },
        {
            title: "سختی کل",
            name: "THD",
            value: props.test.value["THD"]
        },
        {
            title: "بر",
            name: "B",
            value: props.test.value["B"]
        },
        {
            title: "RSC",
            name: "RSC",
            value: props.test.value["RSC"]
        },
        {
            title: "سختی کربناتی",
            name: "CHD",
            value: props.test.value["CHD"]
        },
        {
            title: "آهن",
            name: "Fe",
            value: props.test.value["Fe"]
        },
        {
            title: "منگنز",
            name: "Mn",
            value: props.test.value["Mn"]
        },
        {
            title: "روی",
            name: "Zn",
            value: props.test.value["Zn"]
        },
        {
            title: "مس",
            name: "Cu",
            value: props.test.value["Cu"]
        },
        {
            title: "سرب",
            name: "Pb",
            value: props.test.value["Pb"]
        },
        {
            title: "کادمیم",
            name: "Cd",
            value: props.test.value["Cd"]
        },
        {
            title: "CaMg",
            name: "CaMg",
            value: props.test.value["CaMg"]
        },
        {
            title: "S-cation",
            name: "S-cation",
            value: props.test.value["S-cation"]
        },
        {
            title: "S-Anion",
            name: "S-Anion",
            value: props.test.value["S-Anion"]
        },
        {
            title: "water-class",
            name: "water-class",
            value: props.test.value["water-class"]
        }
    ];
    const [testDate, setTestDate] = useState(
        moment(props.test.analysis_date, "jYYYY/jMM/jDD").format('jYYYY/jMM/jDD')
    );
    const [staticValues, setStaticValues] = useState(staticV);
    const [description, setDescription] = useState(props.test.description);
    const [testId, setTestId] = useState(props.test.id);
    const [resourceId, setResourceId] = useState(props.test.water_resource.id);

    useEffect(() => {
        if (props.addEditResult) {
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
            'water_resource_id': resourceId,
            id: testId,
            _method: "PUT"
        }
    };

    const btnSubmitClickHandler = () => {
        props.addEditWaterTest(testId, exportFormData(staticValues))
    };

    return (
        <div className="WaterTestEdit">
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
                    <button onClick={btnSubmitClickHandler} >ثبت</button>
                </div>

            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        addEditResult: state.waterTests.addEditResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addEditWaterTest: (testId, postData) => dispatch(addEditWaterTest(testId, postData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterTestEdit);
