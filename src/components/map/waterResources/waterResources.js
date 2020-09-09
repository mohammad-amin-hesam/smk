import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Marker, Tooltip, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet'
import {useHistory} from "react-router";

import {fetchWaterResource} from '../../../redux/actions'
import ResourceInfo from "./resourceInfo";

const getMapData = (resourcesList) => {

    let mapData = [];
    resourcesList.map((resource) => {
        mapData.push({
            id: resource.id,
            name: resource.name,
            coord: [resource.lat, resource.lng]
        })
    })
    return mapData
}

const createMarkers = (mapData, popupClose) => {

    let myElement = <div/>
    let myIcon = L.icon({
        iconSize: [30, 50],
        iconUrl: require('../../../assets/imges/icon/water.png')
    })
    if (mapData.length > 0) {
        myElement = mapData.map((item) => (
            <Marker icon={myIcon} key={item.id} position={item.coord}>
                <Tooltip direction="center" offset={[-5, -5]}>
                    {item.name}
                </Tooltip>
                <Popup onClose={() => popupClose}><ResourceInfo resourceId={item.id}/></Popup>
            </Marker>
        ))
    }
    return myElement;
};

const WaterResourceOnMap = (props) => {
    let history = useHistory();
    const popupClose = () => {
        history.goBack();
    };
    useEffect(() => {
        props.fetchWaterResource(props.plantationId, props.yearId)
    }, []);

    let finalElement = createMarkers(getMapData(props.resources), popupClose);
    return (
        <div>
            <MarkerClusterGroup>{finalElement}</MarkerClusterGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plantationId: state.plantationState.plantationId,
        yearId: state.plantationState.yearId,
        resources: state.waterResources.resources
    }
}

export default connect(mapStateToProps, {fetchWaterResource})(
    WaterResourceOnMap
)
