import React, { useEffect, useState } from "react";
import { Map } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { connect } from "react-redux";

import Plantation from "./plantation";
import WaterResourceOnMap from "./waterResources/waterResources";
import LayerManagement from "./layerManagement/layerManagement";
import WeatherStationOnMap from "./weatherStations";
import SatelliteImgOnMap from "./satelliteImg";
import Weather from "./weather/weather";
import ErrorBoundaries from "../../errorBoundaries/errorBoundaries";

const MyMap = (props) => {
  const [center, setCenter] = useState([]);
  return (
    <div className="MyMap">
      <LayerManagement />
      <Weather />
      <ErrorBoundaries>
        <Map id="mapid" center={[32, 55]} zoom={6} zoomControl={false}>
          <ReactLeafletGoogleLayer
            googleMapsLoaderConf={{
              KEY: "AIzaSyDps-7j5qWhb9wcDWya2qlaehTtkUgKfu4",
            }}
            type={"satellite"}
          />
          <Plantation mod={"map"} />
          {props.waterResourceActive ? <WaterResourceOnMap /> : <div />}
          {props.weatherStationActive ? <WeatherStationOnMap /> : <div />}
          <SatelliteImgOnMap />
        </Map>
      </ErrorBoundaries>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    waterResourceActive: state.waterResources.active,
    weatherStationActive: state.weatherStation.active,
  };
};

export default connect(mapStateToProps)(MyMap);
