import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Spinner from '../../../components/ui/spinner/spinner'
import {
  sectionByFarmId,
  getListFilesByPlantationId,
  setModalType
} from '../../../redux/actions'
import information from '../../../assets/imges/information.svg'
import Modal from '../../../components/ui/modal/modal'
import PlantationInfo from '../../../routes/pages/PlantationInfo'

export const Section = (props) => {
  let { section, modalType,loading } = props
  const [selectedItem, setSelectedItem] = useState(null)
  section = Object.values(section)

  useEffect(() => {
    props.sectionByFarmId(props.farmId, props.fieldId)
  }, [])

  const onShowInformation = (item) => {
    setSelectedItem(item)
    props.setModalType('sections')
    props.getListFilesByPlantationId(item.id)
  }

  return (
    <div className="agricultureـindustry">
      <input type="text" placeholder="جستجو" />
      {loading ? (
        <Spinner />
      ) : (
        <ul className="farms">
          {section.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/map?step=5&sectionId=${item.id}&speciality_id=${props.fieldId}`}
              >
                <p className="name">
                  <span>{item.name}</span>
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
                  <span className="farms_count">{item.unit_count}واحد</span>
                  <span className="text-area">{item.area} هکتار </span>
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {modalType=="sections" ? (
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
  section: { loading, section },
  modalType: { modalType: modalType }
}) => ({
  loading,
  section,
  modalType
})

export default connect(mapStateToProps, {
  sectionByFarmId,
  getListFilesByPlantationId,
  setModalType
})(Section)
