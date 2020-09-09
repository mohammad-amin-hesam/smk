import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getPlantationState } from '../../redux/actions'
import { Marker, Polygon, Popup, Tooltip } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

const exportCompanyData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'company',
      name: response[key].name,
      center: response[key].center,
      coords: response[key].coords,
      id: response[key].id
    })
  }
  return mapData
}

const exportFarmData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'farm',
      name: response[key].name,
      center: response[key].center,
      coords: response[key].coords,
      id: response[key].id
    })
  }
  return mapData
}

const exportSectionData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'section',
      name: response[key].name,
      center: response[key].center,
      coords: response[key].coords,
      id: response[key].id
    })
  }
  return mapData
}

const exportFieldData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'field',
      name: response[key].name,
      center: null,
      coords: null,
      id: response[key].id
    })
  }
  return mapData
}

const exportUnitData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'unit',
      name: response[key].name,
      center: response[key].center,
      coords: response[key].coords,
      id: response[key].id
    })
  }
  return mapData
}

const exportPieceData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'piece',
      name: response[key].name,
      center: response[key].center,
      coords: response[key].coords,
      id: response[key].id
    })
  }
  return mapData
}

const exportPlantData = (response) => {
  let mapData = []
  for (let key in response) {
    mapData.push({
      type: 'plant',
      name: response[key].crop_name,
      center: null,
      coords: response[key].coords,
      id: response[key].plantation_id
    })
  }
  return mapData
}

const createMarkers = (mapData) => {
  let myMarkers = mapData.map((item, index) => {
    if (item.center !== null) {
      return (
        <Marker key={index} position={[item.center[0].lat, item.center[0].lng]}>
          <Popup>{item.name ? item.name : null}</Popup>
          <Tooltip direction="center" offset={[-5, -5]}>
            {item.name}
          </Tooltip>
        </Marker>
      )
    } else return <div key={index} />
  })
  return myMarkers
}

const makeGeoData = (coordsArray) => {
  let geoData = []
  coordsArray.map((item) => {
    let geoArr = []
    if (item.coords !== null) {
      item.coords.map((coord) => {
        geoArr.push([coord.lat, coord.lng])
      })
      geoData.push({
        key: item.id,
        name: item.name,
        geoArray: geoArr
      })
    }
  })
  return geoData
}

const renderArea = (geoData, plantForEdit) => {
  return geoData.map((area, index) => {
    return (
      <Polygon
        key={index}
        positions={area.geoArray}
        color={plantForEdit === area.key ? 'red' : 'blue'}
      >
        <Tooltip direction="center" offset={[-5, -5]}>
          {area.name}
        </Tooltip>
      </Polygon>
    )
  })
}
const Plantation = (props) => {
  useEffect(() => {
    props.getPlantationState()
  }, [])

  let myData = []

  if (props.mod === 'map') {
    switch (props.pState) {
      case 'company':
        myData = exportCompanyData(props.companies)
        break
      case 'farm':
        myData = exportFarmData(props.farms)
        break
      case 'field':
        myData = exportFieldData(props.fields)
        break
      case 'section':
        myData = exportSectionData(props.sections)
        break
      case 'unit':
        myData = exportUnitData(props.units)
        break
      case 'piece':
        myData = exportPieceData(props.pieces)
        break
      case 'plant':
        myData = exportPlantData(props.plants)
        break
      default:
        break
    }
  } else {
    myData = exportPieceData(props.pieces)
    myData = [...myData, ...exportPlantData(props.plants)]
  }

  const myElement = createMarkers(myData)
  let geoData = makeGeoData(myData)
  return (
    <div>
      <MarkerClusterGroup>{myElement}</MarkerClusterGroup>
      {renderArea(geoData, props.plantForEdit ? props.plantForEdit : null)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pState: state.plantationState.plantationState,
    companies: state.company.companies,
    farms: state.farms.farms,
    fields: state.fields.fields,
    sections: state.section.section,
    units: state.units.units,
    pieces: state.pieces.pieces,
    plants: state.plants.plants
  }
}

export default connect(mapStateToProps, { getPlantationState })(Plantation)
