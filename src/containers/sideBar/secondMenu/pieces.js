import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  listPiecesByUnitIdAndYearId,
  getListFilesByPlantationId,
  setModalType
} from '../../../redux/actions'
import { NavLink, useHistory } from 'react-router-dom'
import Spinner from '../../../components/ui/spinner/spinner'
import information from '../../../assets/imges/information.svg'
import Modal from '../../../components/ui/modal/modal'
import PlantationInfo from '../../../routes/pages/PlantationInfo'

const Piece = (props) => {
  let { pieces, modalType, loading } = props
  const [selectedItem, setSelectedItem] = useState(null)
  pieces = Object.values(pieces)
  const [search, setSearch] = useState('')
  const [filterPiece, setFilterPiece] = useState([])

  // SearchInput
  const searchFilter = (e) => {
    const itemData = pieces.filter((item) => {
      const valueInput = item.name.toUpperCase()
      const textSeach = e.target.value.toUpperCase()
      if (valueInput.indexOf(textSeach) > -1) {
        return item
      }
    })
    setFilterPiece(itemData)
    setSearch(e.target.value)
  }

  useEffect(() => {
    props.listPiecesByUnitIdAndYearId(props.unitId, props.yearId)
  }, [props.yearId])

  const onShowInformation = (item) => {
    setSelectedItem(item)
    props.setModalType('pieces')
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
          <PieceRows
            data={filterPiece}
            yearId={props.yearId}
            onShowInformation={onShowInformation}
          />
        ) : loading ? (
          <Spinner />
        ) : (
          <PieceRows
            data={pieces}
            yearId={props.yearId}
            onShowInformation={onShowInformation}
          />
        )}
      </ul>
      {modalType === 'pieces' ? (
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
  pieces: { loading, pieces },
  modalType: { modalType: modalType }
}) => ({
  pieces,
  loading,
  modalType
})

export default connect(mapStateToProps, {
  listPiecesByUnitIdAndYearId,
  getListFilesByPlantationId,
  setModalType
})(Piece)

const PieceRows = ({ data, yearId, onShowInformation }) => {
  let history = useHistory()
  const q = new URLSearchParams(history.location.search)
  const specialityId = q.get('specialityId') || q.get('speciality_id')
  return data?.map((item) => (
    <li key={item.id}>
      <NavLink
        to={`/map?step=7&pieceId=${item.id}&yearId=${yearId}&speciality_id=${specialityId}`}
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
          <span className="farms_count">{item.subpiece_count}محصول</span>
          <span className="text-area">{item.area} هکتار </span>
        </p>
        <p className="piece_ancestors">
          <span className="name_ancestors">{item.ancestors[3].name}</span>
          <span className="name_ancestors">{item.ancestors[2].name}</span>
        </p>
      </NavLink>
    </li>
  ))
}
