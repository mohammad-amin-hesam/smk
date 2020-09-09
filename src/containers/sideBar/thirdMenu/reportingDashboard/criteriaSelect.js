import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Spinner from '../../../../components/ui/spinner/spinner'

import {
  fetchCrops,
  fetchRawMaterial,
  fetchOperationTypes,
  listmacheneryByPlantaionId,
  fetchMachineryTypes,
  listHumanByYearIdAndPlantationId,
  fetchHumanResourcesTypes,
  listYears,
  setCriteriaSelected,
  closeModal,
  fetchHumanResourcesTypesSelectedItem
} from '../../../../redux/actions'

let myElement = <Spinner />

const CriteriaSelect = (props) => {
  useEffect(() => {
    switch (props.alias) {
      case 'crops': {
        props.fetchCrops()
        break
      }
      case 'raw_materials': {
        props.fetchRawMaterial(props.plantationId)
        break
      }
      case 'operation_type': {
        props.fetchOperationTypes()
        break
      }
      case 'machinery': {
        props.fetchMachinery(props.plantationId)
        break
      }
      case 'machinery_types': {
        props.fetchMachineryTypes()
        break
      }
      case 'human_resources': {
        props.fetchHumanResources(props.yearId, props.plantationId)
        break
      }
      case 'human_resource_types': {
        props.fetchHumanResourcesTypes()
        break
      }
      case 'Planting_years': {
        props.fetchYears()
        break
      }
      default: {
      }
    }
  }, [])

  const [selectedItems, setSelectedItems] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const btnChooseClickHandler = (event, crop) => {
    if (!selectedItems.includes(event.target.value)) {
      const newItems = [...selectedItems]
      newItems.push(event.target.value)
      setSelectedItems(newItems)
    } else {
      const newItems = [...selectedItems]

      newItems.splice(newItems.indexOf(event.target.value), 1)
      setSelectedItems(crop)
    }
    props.fetchHumanResourcesTypesSelectedItem(selectedItems)
  }
  const checkInclude = (array, value) => {
    return array.some((item) => value === item)
  }
  const createCropsTable = () => {
    return (
      <div>
        {props.crops.map((cropType, index) => (
          <div key={index}>
            <span>{cropType.speciality_name}</span>
            <table>
              <tbody>
                {cropType.crops.map((crop, index) => (
                  <tr key={index}>
                    <td>{crop.name}</td>
                    <td>
                      <button
                        onClick={() => btnChooseClickHandler(crop)}
                        value={crop.id}
                        className={
                          checkInclude(selectedItems, '' + crop.id)
                            ? 'btnCancel'
                            : 'btnChoose'
                        }
                      >
                        {checkInclude(selectedItems, '' + crop.id)
                          ? 'انصراف'
                          : 'انتخاب'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    )
  }

  const getTableData = () => {
    switch (props.alias) {
      case 'crops': {
        return []
      }
      case 'raw_materials': {
        const newList = []
        props.rawMaterial.map((material) => {
          newList.push({
            id: material.raw_material.id,
            name: material.raw_material.name
          })
        })
        return newList
      }
      case 'operation_type': {
        const newList = []
        props.operationTypes.map((operationType) => {
          newList.push({
            id: operationType.id,
            name: operationType.name
          })
        })
        return newList
      }
      case 'machinery': {
        const fetchedMachinery = []
        for (let key in props.machinery) {
          fetchedMachinery.push({
            ...props.machinery[key],
            id: key
          })
        }
        const newList = []
        fetchedMachinery.map((machinery) => {
          newList.push({
            id: machinery.id,
            name: machinery.name,
            ownership: machinery.ownership,
            type: machinery.type.title,
            plaque: machinery.plaque,
            horsepower: machinery.horsepower
          })
        })
        return newList
      }
      case 'machinery_types': {
        const newList = []
        props.machineryTypes.map((type) => {
          newList.push({
            id: type.id,
            name: type.title
          })
        })
        return newList
      }
      case 'human_resources': {
        const fetchedHumanResource = []
        for (let key in props.humanResources) {
          fetchedHumanResource.push({
            ...props.humanResources[key],
            id: key
          })
        }
        const newList = []
        fetchedHumanResource.map((resource) => {
          newList.push({
            id: resource.id,
            name: resource.name,
            cellphone: resource.cellphone,
            type: resource.type.title,
            education: resource.education,
            tendency: resource.tendency,
            activity_type: resource.activity_type,
            employment_type: resource.employment_type
          })
        })
        return newList
      }
      case 'human_resource_types': {
        const newList = []
        props.humanResourcesTypes.map((type) => {
          newList.push({
            id: type.id,
            name: type.title
          })
        })
        return newList
      }
      case 'Planting_years': {
        const newList = []
        if (props.years) {

          props.years.map((year) => {
            newList.push({
              id: year.id,
              name: year.from + 'تا' + year.to
            })
          })
        }
        return newList
      }
      default: {
        return []
      }
    }
  }

  const createTable = (listData) => {
    if (listData.length > 0) {
      return (
        <table>
          <thead>
            <tr>
              <th>عنوان</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((item, index) => (
              <tr
                style={{
                  backgroundColor: checkInclude(selectedItems, '' + item.id)
                    ? '#97CCA0'
                    : ''
                }}
                key={item.id ? item.id : index}
              >
                <td>{item.name ? item.name : ''}</td>
                <td>
                  <button
                    value={item.id ? item.id : index}
                    onClick={btnChooseClickHandler}
                    className={
                      checkInclude(selectedItems, '' + item.id)
                        ? 'btnCancel'
                        : 'btnChoose'
                    }
                  >
                    {checkInclude(selectedItems, '' + item.id)
                      ? 'انصراف'
                      : 'انتخاب'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    } else {
      return <div />
    }
  }

  const submitClickHandler = () => {
    const newList = props.selectedCriterias
    props.closeModal()
    if (newList.length > 0) {
      newList.map((item, index) => {
        if (item.name === props.alias) {
          newList.splice(index, 1)
        }
      })
    }
    if (selectedItems.length > 0) {
      newList.push({
        name: props.alias,
        selected: selectedItems
      })
    }
    props.setCriteriaSelected(newList)
    setSubmitted(true)
    setSelectedItems(selectedItems)

  }

  const myData = getTableData()
  myElement = props.alias === 'crops' ? createCropsTable() : createTable(myData)

  return (
    <div className="CriteriaSelect">
      <div className="form-title" style={{ position: 'sticky' }}>
        <span style={{ fontSize: '1rem' }}>انتخاب {props.title}</span>

        <button
          className={submitted ? 'btnSubmitted' : 'btnSubmit'}
          onClick={submitClickHandler}
        >
          <span>
            {submitted ? 'موارد انتخاب شده ثبت شد' : 'ثبت و بازگشت به فرم'}
          </span>
          <ArrowBackIcon />
        </button>
      </div>
      <div className="criteriaTable">{myElement}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    crops: state.crops.crops,
    plantationId: state.plantationState.plantationId,
    operationTypes: state.operationTypes.types,
    rawMaterial: state.rawMaterial.material,
    machinery: state.machinery.machinery,
    machineryTypes: state.machineryTypes.types,
    yearId: state.plantationState.yearId,
    humanResources: state.listHumanReport.listHumanReport,
    humanResourcesTypes: state.humanResourcesTypes.types,
    years: state.years.years,
    selectedCriterias: state.dashboardOptions.criterias
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrops: () => dispatch(fetchCrops()),
    fetchRawMaterial: (pId) => dispatch(fetchRawMaterial(pId)),
    fetchOperationTypes: () => dispatch(fetchOperationTypes()),
    closeModal: () => dispatch(closeModal()),
    fetchHumanResourcesTypesSelectedItem: () =>
      dispatch(fetchHumanResourcesTypesSelectedItem()),
    fetchMachinery: (pId) => dispatch(listmacheneryByPlantaionId(pId)),
    fetchMachineryTypes: () => dispatch(fetchMachineryTypes()),
    fetchHumanResources: (yId, pId) =>
      dispatch(listHumanByYearIdAndPlantationId(yId, pId)),
    fetchHumanResourcesTypes: () => dispatch(fetchHumanResourcesTypes()),
    fetchYears: () => dispatch(listYears()),
    setCriteriaSelected: (selectedCriteria) =>
      dispatch(setCriteriaSelected(selectedCriteria))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CriteriaSelect)
