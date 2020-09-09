import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DatePicker} from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";
import {FeatureGroup, Map} from 'react-leaflet';
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import {EditControl} from "react-leaflet-draw";
import {toast} from 'react-toastify';

import PlantationOnMap from "../../../../components/map/plantation";
import {
    addPlant,
    fetchCropsById,
    fetchSatImg,
    fetchVarietiesById,
    setSatIndex,
    fetchAllFields
} from "../../../../redux/actions";
import Button from "../../../../components/ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router";
import SatelliteImgOnMap from "../../../../components/map/satelliteImg";

const AddPlantation = props => {
    let history = useHistory();
    let piecesArray = [];

    const comeBack = event => {
        history.goBack();
    };

    const [satelliteImgs, setSatelliteImgs] = useState([]);
    const [selectedCrop, setSelectedCrop] = useState(null);
    const [selectedVariety, setSelectedVariety] = useState(null);
    const [area, setArea] = useState(0);
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('jYYYY/jMM/jDD'));
    const [selectedSatelliteImg, setSelectedSatelliteImg] = useState(null);
    const [center, setCenter] = useState([32, 55]);
    const [zoom, setZoom] = useState(6);
    const [selectedCoords, setSelectedCoords] = useState("");
    const [selectedField, setSelectedField] = useState(null);
    let fileInput = React.createRef();

    useEffect(() => {
        props.fetchSatImg("piece", props.plantationId);
        props.fetchAllFields();
        for (let key in props.pieces) {
            piecesArray.push({
                type: "piece",
                name: props.pieces[key].name,
                center: props.pieces[key].center,
                coords: props.pieces[key].coords,
                id: props.pieces[key].id
            });
            if (piecesArray.length > 0) {
                let cn = [];
                cn.push(piecesArray[0].coords[0].lat);
                cn.push(piecesArray[0].coords[0].lng);
                setCenter([...cn]);
                setZoom(17);
            }
        }
    }, []);

    useEffect(() => {
        if(props.allFields) {
            setSelectedField(props.allFields[0]);
        }
    }, [props.allFields]);

    useEffect(() => {
        if(selectedField !== null) {
            props.fetchCropsById(selectedField.id);
        }
    }, [selectedField]);

    useEffect(() => {
        setSelectedCrop(props.crops[0]);
    }, [props.crops]);

    useEffect(() => {
        setSelectedVariety(props.varieties[0]);
    }, [props.varieties]);

    useEffect(() => {
        if (selectedCrop) {
            props.fetchVarietiesById(selectedCrop.id)
        }
    }, [selectedCrop]);

    useEffect(() => {
        let newList = [{day: "هیچکدام"}];
        newList.push(...props.satellitesImgs);
        setSatelliteImgs([...newList]);
        setSelectedSatelliteImg(newList[0]);
    }, [props.satellitesImgs]);

    useEffect(() => {
        if (selectedSatelliteImg !== null) {
            props.setSatIndex(props.satellitesImgs.indexOf(selectedSatelliteImg))
        }
    }, [selectedSatelliteImg]);

    useEffect(() => {
        if (props.addPlantResult) {
            toast.success("عملیات با موفقیت انجام شد", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }, [props.addPlantResult]);

    const datePickerChangeHandler = (unix, formatted) => {
        setSelectedDate(formatted);
    };

    const onCreatedDraw = e => {
        let temp = "";
        e.layer._latlngs[0].map((coord, index) => {
            temp = temp + coord.lng + " " + coord.lat + ",";
            if (index === e.layer._latlngs[0].length - 1) {
                temp = temp + e.layer._latlngs[0][0].lng + " " + +e.layer._latlngs[0][0].lat
            }
        });
        setSelectedCoords(temp);
        setArea(0);

    };

    const submitClickHandler = () => {
        let postData = {
            piece_id: props.plantationId,
            area: area === 0 ? "" : area,
            coordinate: selectedCoords,
            planting_years_id: props.yearId,
            crop_id: selectedCrop.id,
            variety_id: selectedVariety.id,
            planting_date: selectedDate,
        };
        props.addPlant(postData)
    };

    return (
        <div className="AddPlant">
            <div className="form-title" style={{position: "sticky"}}>
                <span style={{fontSize: "1rem"}}>افزودن/ویرایش آزمایش آب</span>
                <div className="submit-close">
                    <Button btnType="success" clicked={comeBack}>
                        <span>بازگشت</span>
                        <ArrowBackIcon/>
                    </Button>
                </div>
            </div>
            <div className="form-content">
                <div className="col-mod-4">
                    {
                        props.allFields ?<div className="form-group">
                            <label className="col-mod-4">حوزه :</label>
                            <div className="col-mod-8">
                                <select
                                    value={props.allFields.indexOf(selectedField)}
                                    className="form-control"
                                    onChange={e => setSelectedField(props.allFields[e.target.value])}
                                >
                                    {
                                        props.allFields.map((field, index) => (
                                            <option key={index} value={index}>{field.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div> : null
                    }

                    <div className="form-group">
                        <label className="col-mod-4">محصول :</label>
                        <div className="col-mod-8">
                            <select
                                value={props.crops.indexOf(selectedCrop)}
                                className="form-control"
                                onChange={e => setSelectedCrop(props.crops[e.target.value])}
                            >
                                {
                                    props.crops.map((crop, index) => (
                                        <option key={index} value={index}>{crop.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">رقم :</label>
                        <div className="col-mod-8">
                            <select
                                className="form-control"
                                value={props.crops.indexOf(selectedVariety)}
                                onChange={e => setSelectedVariety(props.varieties[e.target.value])}
                            >
                                {
                                    props.varieties.map((variety, index) => (
                                        <option key={index} value={index}>{variety.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">مساحت(هکتار)</label>
                        <div className="col-mod-8">
                            <input
                                className="form-control"
                                type="number"
                                value={area}
                                onChange={e => setArea(parseInt(e.target.value))}
                                disabled={selectedCoords.length > 0}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">تاریخ</label>
                        <div className="col-mod-8">
                            <DatePicker
                                id={"analysis_date"}
                                placeholder="----/--/--"
                                format="jYYYY/jMM/jDD"
                                customClass="date-input"
                                preSelected={selectedDate}
                                onChange={datePickerChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">آپلود فایل</label>
                        <div className="col-mod-8">
                            <input type="file" ref={fileInput}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-mod-4">تصاویر ماهواره ای:</label>
                        <div className="col-mod-8">
                            <select
                                className="form-control"
                                value={satelliteImgs.indexOf(selectedSatelliteImg)}
                                onChange={e => setSelectedSatelliteImg(satelliteImgs[e.target.value])}

                            >
                                {
                                    satelliteImgs.map((img, index) => (
                                        <option key={index} value={index}>{img.day}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button
                        className="btn-primary"
                        onClick={submitClickHandler}
                    >
                        ثبت
                    </button>
                </div>
                <div className="col-mod-8">
                    <div className="drawPolygonMap">
                        <Map id="mapid" center={center} zoom={zoom} zoomControl={false}>
                            <ReactLeafletGoogleLayer
                                googleMapsLoaderConf={{KEY: 'AIzaSyDps-7j5qWhb9wcDWya2qlaehTtkUgKfu4'}}
                                type={'satellite'}/>
                            <PlantationOnMap mod={"draw"}/>
                            {
                                selectedSatelliteImg !== null ?
                                    <SatelliteImgOnMap/> : null
                            }
                            <FeatureGroup>
                                <EditControl
                                    position="topright"
                                    // onEdited={onEditedDraw}
                                    onCreated={onCreatedDraw}
                                    draw={{
                                        marker: false,
                                        circle: false,
                                        rectangle: false,
                                        polyline: false,
                                        circleMarker: false
                                    }}
                                />
                            </FeatureGroup>
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        satellitesImgs: state.satelliteImg.satellites,
        crops: state.crops.crops,
        varieties: state.crops.varieties,
        plantationId: state.plantationState.plantationId,
        yearId: state.plantationState.yearId,
        plantationState: state.plantationState.plantationState,
        pieces: state.pieces.pieces,
        addPlantResult: state.plants.addPlantResult,
        allFields: state.fields.allFields
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSatImg: (state, pId) => dispatch(fetchSatImg(state, pId)),
        fetchCropsById: id => dispatch(fetchCropsById(id)),
        fetchVarietiesById: cropId => dispatch(fetchVarietiesById(cropId)),
        setSatIndex: index => dispatch(setSatIndex(index)),
        addPlant: postData => dispatch(addPlant(postData)),
        fetchAllFields: () => dispatch(fetchAllFields())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlantation);