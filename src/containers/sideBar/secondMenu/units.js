import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../../components/ui/spinner/spinner'
import information from '../../../assets/imges/information.svg'
import {
  listUnitsBySectionId,
  getListFilesByPlantationId,
  setModalType
} from '../../../redux/actions'
import Modal from '../../../components/ui/modal/modal'
import PlantationInfo from '../../../routes/pages/PlantationInfo'

const Units = (props) => {
  let { units, modalType, loading, yearId } = props
  units = Object.values(units)
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [filterUnits, setFilterUnits] = useState([])

  useEffect(() => {
    props.listUnitsBySectionId(props?.sectionId)
  }, [])
  const searchFilter = (e) => {
    const itemData = units.filter((item) => {
      const valueInput = item.name.toUpperCase()
      const textSeach = e.target.value.toUpperCase()
      if (valueInput.indexOf(textSeach) > -1) {
        return item
      }
    })
    setFilterUnits(itemData)
    setSearch(e.target.value)
  }
  const onShowInformation = (item) => {
    setSelectedItem(item)
    props.setModalType('units')
    props.getListFilesByPlantationId(item.id)
  }

  return (
    <div className="agricultureـindustry">
      <input
        type="text"
        placeholder="جستجو"
        value={search}
        onChange={searchFilter}
      />
      <ul>
        {search ? (
          <UnitsRows
            yearId={yearId}
            data={filterUnits}
            onShowInformation={onShowInformation}
          />
        ) : loading ? (
          <Spinner />
        ) : (
          <UnitsRows
            yearId={yearId}
            data={units}
            onShowInformation={onShowInformation}
          />
        )}
      </ul>

      {modalType === 'units' ? (
        <Modal>
          <PlantationInfo selectedItem={selectedItem} />
        </Modal>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = ({
  units: { loading, units },
  modalType: { modalType: modalType },
  plantationState: { yearId }
}) => ({
  loading,
  units,
  modalType,
  yearId
})

export default connect(mapStateToProps, {
  listUnitsBySectionId,
  getListFilesByPlantationId,
  setModalType
})(Units)

const UnitsRows = ({ data, yearId, onShowInformation }) => {
  let history = useHistory()
  const q = new URLSearchParams(history.location.search)
  const specialityId = q.get('specialityId') || q.get('speciality_id')
  return data?.map((item) => (
    <li key={item.id}>
      <NavLink
        to={`/map?step=6&unitId=${item.id}&yearId=${yearId}&speciality_id=${specialityId}`}
      >
        <p className="name">
          <span> {item.name} </span>
          <img
            src={information}
            alt={information}
            onClick={(e) => {
              e.preventDefault()
              onShowInformation(item)
            }}
          />
        </p>
        <p className="details">
          <span className="farms_count">{item.piece_count} قطعه </span>
          <span className="text-area">{item.area}هکتار</span>
        </p>
      </NavLink>
    </li>
  ))
}
