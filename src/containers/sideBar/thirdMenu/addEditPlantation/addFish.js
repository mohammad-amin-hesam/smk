import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import Button from "../../../../components/ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router";
import {fetchCropsById, fetchVarietiesById} from "../../../../redux/crops/actions";
import moment from "moment-jalaali";
import {DatePicker} from "react-advance-jalaali-datepicker";

const AddFish = props => {
    let history = useHistory();

    const comeBack = event => {
        history.goBack();
    };

    const [selectedCrop, setSelectedCrop] = useState(null);
    const [selectedVariety, setSelectedVariety] = useState(null);
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('jYYYY/jMM/jDD'));

    useEffect(() => {
            props.fetchCropsById(7)
    }, []);

    useEffect(() => {
        setSelectedCrop(props.crops[0]);
    }, [props.crops]);

    useEffect(() => {
        setSelectedVariety(props.varieties[0]);
    }, [props.varieties]);

    useEffect(() => {
        if (selectedCrop) {
            props.fetchVarietiesById(selectedCrop.id)
        }
    }, [selectedCrop]);

    const datePickerChangeHandler = (unix, formatted) => {
        setSelectedDate(formatted);
    };

    const submitClickHandler = () => {

    }

    return (
        <div className="AddPlant">
            <div className="form-title" style={{position: "sticky"}}>
                <span style={{fontSize: "1rem"}}>افزودن/ویرایش ماهی</span>
                <div className="submit-close">
                    <Button btnType="success" clicked={comeBack}>
                        <span>بازگشت</span>
                        <ArrowBackIcon/>
                    </Button>
                </div>
            </div>
            <div className="form-content" >
                <div className="col-mod-4">
                    <div className="form-group">
                        <div className="col-mod-8">
                            <label className="col-mod-4">محصول :</label>
                            <select
                                value={props.crops.indexOf(selectedCrop)}
                                className="form-control"
                                onChange={e => setSelectedCrop(props.crops[e.target.value])}
                            >
                                {
                                    props.crops.map((crop, index) => (
                                        <option key={index} value={index}>{crop.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">رقم :</label>
                        <div className="col-mod-8">
                            <select
                                className="form-control"
                                value={props.crops.indexOf(selectedVariety)}
                                onChange={e => setSelectedVariety(props.varieties[e.target.value])}
                            >
                                {
                                    props.varieties.map((variety, index) => (
                                        <option key={index} value={index}>{variety.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">تاریخ</label>
                        <div className="col-mod-8">
                            <DatePicker
                                id={"analysis_date"}
                                placeholder="----/--/--"
                                format="jYYYY/jMM/jDD"
                                customClass="date-input"
                                preSelected={selectedDate}
                                onChange={datePickerChangeHandler}
                            />
                        </div>
                    </div>

                    <button
                        className="btn-primary"
                        onClick={submitClickHandler}
                    >
                        ثبت
                    </button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        crops: state.crops.crops,
        varieties: state.crops.varieties,
        plantationId: state.plantationState.plantationId,
        yearId: state.plantationState.yearId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCropsById: id => dispatch(fetchCropsById(id)),
        fetchVarietiesById: cropId => dispatch(fetchVarietiesById(cropId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFish);