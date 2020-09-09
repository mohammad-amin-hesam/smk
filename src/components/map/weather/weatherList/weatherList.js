import React, {useEffect, useState} from "react";
import {connect} from "react-redux"

import "./weatherList.css"
import {fetchWeatherCurrent, setModalType} from "../../../../redux/actions";
import Modal from "../../../ui/modal/modal";
import WeatherForecast from "../../../weatherForecast/weatherForecast";

const WeatherList = props => {
    useEffect(() => {
        if(props.plantationId) {
            props.fetchWeatherCurrent(props.plantationId)
        }
    }, [props.plantationId]);
    const [selectedCurrent, setSelectedCurrent] = useState("0");
    const [selectedCityId, setSelectedCityId] = useState("0");

    const cityClickedHandler = (current) => {
        props.setModalType("weatherList");
        setSelectedCurrent(current.id);
        setSelectedCityId(current.current.city.id);
    };
    const currentElement =
        <table style={{overflowY: "scroll"}}><tbody>
            {props.currents.map(current => (
                <tr className="WeatherListItem" key={current.id} value={current.id} onClick={() => cityClickedHandler(current)}>
                    <td style={{border: "none"}}>{current.name}</td>
                    <td style={{border: "none"}}>{current.current.temperature.now.value}</td>
                    <td style={{border: "none"}}>
                        <img style={{maxHeight: "24px", maxWidth: "24px"}}
                             src={
                                 require(`../../../../assets/imges/icon/weather_icons/${current.current.weather.icon}@2x.png`)
                             }/>
                    </td>
                </tr>
            ))}
        </tbody></table>

    return (
        <div className="ContainerList">
            <div
                style={
                    props.display ?
                        {display: "flex", overflowY: "scroll"} :
                        {display: "none", overflowY: "scroll"}
                }>
                {currentElement}
            </div>
            {
                props.modalType === "weatherList" ?
                    <Modal><WeatherForecast
                        selectedCurrent={selectedCurrent}
                        selectedCityId={selectedCityId}/>
                    </Modal> :
                    <div/>
            }
        </div>

    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        currents: state.weatherCurrent.current,
        modalType: state.modalType.modalType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWeatherCurrent: plantationId => dispatch(fetchWeatherCurrent(plantationId)),
        setModalType: type => dispatch(setModalType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);

