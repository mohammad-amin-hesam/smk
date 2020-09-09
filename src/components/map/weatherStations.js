import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Marker, Tooltip, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

import {fetchWeatherStation} from "../../redux/actions";
import "../../scss/_style.scss"

const getMapData = response => {
    let mapData = [];
    response.map(station => {
        mapData.push({
            id: station.id,
            name: station.name,
            clim2: station.clim2,
            elevation: station.elevation,
            uniqueName: station.uniquename,
            coord: [station.lat, station.lng]
        })
    });
    return mapData;
};

const createMarkers = mapData => {
    let myElement = <div/>
    let myIcon = L.icon({
        iconSize: [30, 40],
        iconUrl: require('../../assets/imges/icon/weather.png')
    });
    if (mapData.length > 0) {
        myElement = mapData.map(item => (
            <Marker icon={myIcon} key={item.id} position={item.coord}>
                <Tooltip direction='center' offset={[-5, -5]}>{item.name}</Tooltip>
                <Popup>
                    <div className="Popup">
                        <div> نام ایستگاه : {item.name}</div>
                        <div> نام یکتا : {item.uniqueName}</div>
                        <div> آب و هوا : {item.clim2}</div>
                        <div> ارتفاع : {item.elevation}</div>
                        <button className="BlueButton">مشاهده اطلاعات هواشناسی</button>
                        <button className="GreenButton">See weather charts</button>
                        <button className="OrangeButton">See weather alerts</button>
                    </div>
                </Popup>
            </Marker>
        ))
    }
    return myElement;
};

const WeatherStationOnMap = props => {
    useEffect(() => {
        props.fetchWeatherStation();
    }, []);
    let finalElement = createMarkers(getMapData(props.stations));
    // let finalElement = <div/>
    return (
        <div>
            <MarkerClusterGroup>
                {finalElement}
            </MarkerClusterGroup>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        stations: state.weatherStation.stations
    }
};

export default connect(mapStateToProps, {fetchWeatherStation})(WeatherStationOnMap)