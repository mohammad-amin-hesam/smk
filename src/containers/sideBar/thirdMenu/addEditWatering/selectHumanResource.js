import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, FormControl} from 'react-bootstrap';

import "../../../../styles/local/packages/form.scss";
import "../../../../styles/local/packages/tablist.scss";
import {
    listHumanByYearIdAndPlantationId,
    fetchHumanResourcesTypes,
    fetchHumanResourceByType,
    setHumanResourceWatering
} from "../../../../redux/actions";

const SelectHumanResource = props => {

    useEffect(() => {
        props.fetchHumanResource(props.plantationId, props.yearId);
        props.fetchHumanResourcesTypes();
    }, []);

    const [listHuman, setListHuman] = useState([]);
    const [humanType, setHumanType] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        let newList = [];
        for (let key in props.humanResources) {
            newList.push({
                ...props.humanResources[key]
            });
            setListHuman([...newList]);
        }
    }, [props.humanResources]);

    useEffect(() => {
        if (humanType !== null) {
            if (humanType.id) {
                props.fetchHumanResourceByType(props.plantationId, props.yearId, humanType.id);
            }
        }
    }, [humanType]);

    useEffect(() => {
        if (props.humanResourcesByType) {
            setListHuman([...props.humanResourcesByType])
        }
    }, [props.humanResourcesByType]);

    useEffect(() => {
        props.setHumanResourceWatering(selectedItems);
    }, [selectedItems]);

    const checkInclude = (array, value) => {
        return array.some(item => value === item)
    };

    const typeSelectHandler = event => {
        setHumanType(props.humanResourcesTypes[event.target.value]);
    };

    const filterChangeHandler = event => {
        let myList = [];
        if (props.humanResourcesByType) {
            myList = [...props.humanResourcesByType];
        } else {
            let newList = [];
            for (let key in props.humanResources) {
                newList.push({
                    ...props.humanResources[key]
                });
            }
            myList = [...newList];
        }
        setListHuman([...myList.filter(human => human.name.includes(event.target.value))]);
    };

    const btnChooseClickHandler = event => {
        if (!selectedItems.includes(listHuman[event.target.value])) {
            const newItems = [...selectedItems];
            newItems.push(listHuman[event.target.value]);
            setSelectedItems([...newItems]);
        } else {
            const newItems = [...selectedItems];
            newItems.splice(newItems.indexOf(listHuman[event.target.value]), 1);
            setSelectedItems([...newItems]);
        }
    };

    return (
        <div className="WateringAddHumanResource">
            <div className="form-title" style={{position: "sticky"}}>
                <span style={{fontSize: "1rem"}}>انتخاب نیروی انسانی از روی لیست</span>
            </div>
            <FormControl placeholder={"پالایش"} className="filter" onChange={filterChangeHandler}/>
            <FormControl as="select" onChange={typeSelectHandler} className="filter">
                {
                    props.humanResourcesTypes ?
                        props.humanResourcesTypes.map((type, index) => (
                            <option value={index} key={index}>{type.title}</option>
                        )) : null
                }
            </FormControl>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>{"عنوان"}</th>
                    <th>{"تلفن تماس"}</th>
                    <th>{"سمت"}</th>
                    <th>{"تحصیلات"}</th>
                    <th>{"گرایش"}</th>
                    <th>{"نوع فعالیت"}</th>
                    <th>{"نوع استخدام"}</th>
                    <th>{"مسیر"}</th>
                    <th>{"عملیات"}</th>
                </tr>
                </thead>
                <tbody >
                {
                    listHuman.length > 0 ?
                        listHuman.map((human, index) => (
                            <tr
                                key={index}
                                style={checkInclude(selectedItems, human)? {backgroundColor: "rgba(26, 255, 102, 0.5)"}: null}
                            >
                                <td>{human.name}</td>
                                <td>{human.cellphone}</td>
                                <td>{human.type.title}</td>
                                <td>{human.education}</td>
                                <td>{human.tendency}</td>
                                <td>{human.activity_type}</td>
                                <td>{human.employment_type}</td>
                                <td>
                                    {(human.plantation.path.length ? human.plantation.path.map((path, index) => {
                                            if (index > 0) return (<span> {">"} {path.depth.title}{":"}{path.name}</span>);
                                            return (<span>{path.depth.title}{":"}{path.name}</span>);
                                        }) : (<span className="hidden"></span>)
                                    )}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        style={
                                            checkInclude(selectedItems, human) ?
                                                {
                                                    backgroundColor: "rgb(255, 128, 0)",
                                                    border: "none"
                                                }: null
                                        }
                                        value={index}
                                        onClick={btnChooseClickHandler}>
                                        {
                                            checkInclude(selectedItems, human) ?
                                                "انصراف" : "انتخاب"
                                        }
                                    </button>
                                </td>
                            </tr>
                        )) : null
                }
                </tbody>
            </Table>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        yearId: state.plantationState.yearId,
        humanResources: state.listHumanReport.listHumanReport,
        humanResourcesTypes: state.humanResourcesTypes.types,
        humanResourcesByType: state.humanResourcesTypes.humanResourcesByType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHumanResource: (pId, yId) => dispatch(listHumanByYearIdAndPlantationId(yId, pId)),
        fetchHumanResourcesTypes: () => dispatch(fetchHumanResourcesTypes()),
        fetchHumanResourceByType: (pId, yId, typeId) => dispatch(fetchHumanResourceByType(pId, yId, typeId)),
        setHumanResourceWatering: selectedHuman => dispatch(setHumanResourceWatering(selectedHuman))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectHumanResource);