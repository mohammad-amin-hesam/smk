import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from '@material-ui/lab';


import { addToScreens, addNewScreen } from "../../../../redux/actions";

const AddToScreens = props => {

    useEffect(()=> {
        if(title !== "") {
            callAddToScreens(props.screens[props.screens.length - 1].id);
        }
    }, [props.newScreenResult]);

    const [screenTitle, setScreenTitle] = useState("");

    const blueSubmitClickHandler = () => {
        props.addNewScreen(props.plantationId, screenTitle)
    };
    const greenSubmitClickHandler = () => {
        setSubmitElement("blue");
    };

    let blueSubmit = <div className="inline-group">
        <input
            type="text"
            className="page-title"
            placeholder="عنوان صفحه"
            value={screenTitle}
            onChange={e =>setScreenTitle(e.target.value)}
        />
        <button  onClick={blueSubmitClickHandler} className="btn-info">ثبت</button>
    </div>;

    let greenSubmit = <div><button onClick={greenSubmitClickHandler} className="btn-success">افزودن صفحه</button> </div>

    const [title, setTitle] = useState("");
    const [selectedScreen , setSelectedScreen] = useState("");
    const [submitElements, setSubmitElement] =useState("green");

    const callAddToScreens = screenId => {
        let criterias = [];
        if(props.requirements.criteria.length > 0) {
            props.requirements.criteria.map((crt, index) => {
                let c = "{";
                c = c + crt.name + ":" + crt.selected + "}";
                if(index !== props.requirements.criteria.length - 1) {
                    c = c + ",";
                }
                criterias.push(c)
            })
        }

        let options = {
            reporter_type_id: props.reportId,
            report_title: title,
            screen_id: screenId,
            options: {
                category_id: props.requirements.category,
                divider: props.requirements.divider,
                indicator_id: props.requirements.indicator,
                criteria: props.requirements.criteria,
                ratio: props.ratio
            }
        };
        props.addToScreens(options);
    };

    const selectedScreenBtnHandler = event => {
        setSelectedScreen(event.target.value);
        callAddToScreens(event.target.value);
    };

    return (
        <div className="AddToScreens">
            <div className="panel-default">
                <div className="panel-heading">افزودن به صفحات گزارش</div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>عنوان</label>
                        <input
                            className="form-control"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>انتخاب نوع شاخص</label>
                        <div className="btn-group">
                            {
                                props.screens.map(screen => (
                                    <button
                                        className="btn-active"
                                        value={screen.id}
                                        onClick={selectedScreenBtnHandler}
                                    >
                                        {screen.title}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="overlap-group"></div>
                        {submitElements === "green" ? greenSubmit: blueSubmit}
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        screens: state.dashboardOptions.screens,
        plantationId: state.plantationState.plantationId,
        newScreenResult: state.dashboardOptions.newScreenResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToScreens: options => dispatch(addToScreens(options)),
        addNewScreen: (pId, title) => dispatch(addNewScreen(pId, {title: title}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToScreens);