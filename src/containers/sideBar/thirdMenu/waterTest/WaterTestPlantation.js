import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router";
import {connect} from "react-redux";

import {deleteWaterTest, fetchWaterTest, fetchWaterTestByResource} from "../../../../redux/actions";
import SecondModal from "../../../../components/ui/secondModal/secondModal";
import WaterTestEdit from "./waterTestEdit";

const WaterTestPlantation = props => {
    let history = useHistory();
    let { id } = useParams();
    const closeHandler = () => {
        history.goBack();
    };

    const [waterTestSelect, setWaterTestSelect] = useState(false);
    const [selectedTest, setSelectedTest] = useState({});
    const [waterTests, setWaterTests] = useState(props.waterTests);

    useEffect(() => {
        props.mode === "byPlantation" ?
            props.fetchWaterTest(props.plantationId, props.yearId) :
            props.fetchWaterTestByResource(id)
    }, [props.deleteResult, id]);

    useEffect( () => {
        setWaterTests(props.waterTests);
    }, [props.waterTests]);

    useEffect(() => {
        setWaterTestSelect(false);
        setSelectedTest([...props.waterTests]);
    }, [props.addEditResult]);

    const waterTestEditCancelHandler = () => {
        setWaterTestSelect(false);
    };

    const waterTestEditHandler = event => {
        setSelectedTest(props.waterTests[event.target.value]);
        setWaterTestSelect(true);
    };

    const deleteWaterTestHandler = event => {
        props.deleteWaterTest(event.target.value);
    };

    return (
        <div>
            <div className="operation pattern_managment">
                <div className="WaterTest">
                    <img onClick={closeHandler} src={require('../../../../assets/imges/close.svg')}/>
                    {
                        waterTests.length > 0 ?
                            <ul>
                                {waterTests.map((test, index) => (
                                    <li key={index}>
                                        {test.analysis_date}
                                        <span>
                                        <button
                                            value={index}
                                            onClick={waterTestEditHandler}
                                        >
                                            ویرایش
                                        </button>
                                        <button
                                            value={test.id}
                                            onClick={deleteWaterTestHandler}
                                        >
                                            حذف
                                        </button>
                                    </span>
                                    </li>
                                ))}
                            </ul>
                            : null
                    }
                </div>
            </div>
            {
                waterTestSelect ?
                    <SecondModal
                        show={waterTestSelect}
                        modalClosed={waterTestEditCancelHandler}
                    >
                        <WaterTestEdit test={selectedTest}/>
                    </SecondModal> : null
            }

        </div>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        yearId: state.plantationState.yearId,
        waterTests: state.waterTests.tests,
        addEditResult: state.waterTests.addEditResult,
        deleteResult: state.waterTests.deleteResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWaterTest: (pId, yId) => dispatch(fetchWaterTest(pId, yId)),
        deleteWaterTest: testId => dispatch(deleteWaterTest(testId)),
        fetchWaterTestByResource: resourceId => dispatch(fetchWaterTestByResource(resourceId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterTestPlantation);
