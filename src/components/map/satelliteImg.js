import React, {useEffect, useState} from "react";
import axios from "axios"
import { connect } from "react-redux"
import {ImageOverlay} from "react-leaflet";

const SatelliteImgOnMap = props => {
    const [image, setImage] = useState("");
    const [bound, setBound] = useState([[0,0],[0,0]]);
    useEffect(() => {
        if(props.index !== "" && props.satellites[props.index]) {
            axios.get(props.satellites[props.index].img,  { responseType: 'arraybuffer' })
                .then(response => {
                    const base64 = btoa(
                        new Uint8Array(response.data).reduce(
                            (data , byte) => data + String.fromCharCode(byte),
                            '',
                        )
                    );
                    setImage("data:;base64," + base64)
                });
            setBound(props.satellites[props.index].bound);
        }
    }, [props.index]);

    return (
        <div>
            {
            props.index !== "" ?
                <ImageOverlay url={image} bounds={bound}/> :
                <div/>
        }</div>

    )
};

const mapStateToProps = state => {
    return {
        satellites: state.satelliteImg.satellites,
        index: state.satelliteImg.index
    }
};

export default connect(mapStateToProps)(SatelliteImgOnMap)