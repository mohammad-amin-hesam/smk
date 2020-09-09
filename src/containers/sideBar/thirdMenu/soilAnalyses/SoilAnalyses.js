import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSoilAnalyses, deleteSoilAnalyses } from '../../../../redux/actions'
import SecondModal from "../../../../components/ui/secondModal/secondModal";
import SoilAnalysesEdit from "./soilAnalysesEdit";


const SoilAnalyses = (props) => {
    let history = useHistory();
    const closeHandler = () => {
        history.goBack();
    };

    const [soilAnalysesSelect, setSoilAnalysesSelect] = useState(false);
    const [selectedAnalyse, setSelectedAnalyse] = useState({});
    const [soilAnalyses, setSoilAnalyses] = useState(props.soilAnalyses);

    useEffect(() => {
        props.fetchSoilAnalyses(props.plantationId);
    }, [props.deleteResult]);

    useEffect(() => {
        setSoilAnalyses(props.soilAnalyses);
    }, [props.soilAnalyses]);

    useEffect(() => {
        setSoilAnalysesSelect(false);
        setSelectedAnalyse(...props.soilAnalyses);
    }, [props.addEditResult]);

    const soilAnalysesEditCancelHandler = () => {
        setSoilAnalysesSelect(false);
    };

    const soilAnalysesEditHandler = event => {
        setSelectedAnalyse(props.soilAnalyses[event.target.value]);
        setSoilAnalysesSelect(true);
    };

    const deleteWaterTestHandler = event => {
        props.deleteSoilAnalyses(event.target.value);
    };

  return (
    <div className="operation pattern_managment">
        <div className="SoilAnalyses">
            <img onClick={closeHandler} src={require('../../../../assets/imges/close.svg')}/>
            {
                soilAnalyses.length > 0 ?
                    <ul>
                        {soilAnalyses.map((analyse, index) => (
                            <li key={index}>
                                {analyse.analysis_date}
                                <span>
                                        <button
                                            value={index}
                                            onClick={soilAnalysesEditHandler}
                                        >
                                            ویرایش
                                        </button>
                                        <button
                                            value={analyse.id}
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
        {
            soilAnalysesSelect ?
                <SecondModal
                    show={soilAnalysesSelect}
                    modalClosed={soilAnalysesEditCancelHandler}
                >
                    <SoilAnalysesEdit analyse={selectedAnalyse}/>
                </SecondModal> : null
        }
    </div>
  )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        soilAnalyses: state.soilAnalyses.analyses,
        addEditResult: state.soilAnalyses.addEditResult,
        deleteResult: state.soilAnalyses.deleteResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSoilAnalyses: pId => dispatch(fetchSoilAnalyses(pId)),
        deleteSoilAnalyses: testId => dispatch(deleteSoilAnalyses(testId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SoilAnalyses)
