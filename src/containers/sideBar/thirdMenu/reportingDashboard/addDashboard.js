import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import {addNewScreen} from "../../../../redux/actions";

const AddDashboards = props => {

    const [alert, setAlert] = useState(<div/>);
    const [screenTitle, setScreenTitle] = useState("");
    const [alertOpen, setAlertOpen] = useState(true);

    useEffect(() => {
        if (props.newScreenResult) {
            setAlert(
                // <Collapse in={alertOpen}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setAlertOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    عملیات با موفقیت انجام شد
                </Alert>
                // </Collapse>
            )
        }

    }, [props.newScreenResult]);


    const submitClickHandler = () => {
        props.addNewScreen(props.plantationId, screenTitle)
    };

    return (
        <div className="AddDashboard">
            <Collapse in={alertOpen}>
                {alert}
            </Collapse>
            <input
                type="text"
                className="form-control"
                placeholder="عنوان صفحه"
                value={screenTitle}
                onChange={e => setScreenTitle(e.target.value)}/>
            <button className="btn-success" onClick={submitClickHandler}>ثبت</button>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        newScreenResult: state.dashboardOptions.newScreenResult,
        plantationId: state.plantationState.plantationId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewScreen: (pId, title) => dispatch(addNewScreen(pId, {title: title}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDashboards);