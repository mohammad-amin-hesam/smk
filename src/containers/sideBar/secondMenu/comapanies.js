import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../../components/ui/spinner/spinner'
import information from '../../../assets/imges/information.svg'
import {
  listCompanies,
  getListFilesByPlantationId,
  setModalType
} from '../../../redux/actions'
import Modal from '../../../components/ui/modal/modal'
import PlantationInfo from '../../../routes/pages/PlantationInfo'

const Companies = (props) => {
  let { companies, modalType, loading, listCompanies } = props
  companies = Object.values(companies)
  const [selectedItem, setSelectedItem] = useState(null)
  const [search, setSearch] = useState('')
  const [filterCompanies, setFilterCompanies] = useState([])
  useEffect(() => {
    listCompanies()
  }, [listCompanies])

  const searchFilter = (e) => {
    const itemData = companies.filter((item) => {
      const valueInput = item.name.toUpperCase()
      const textSeach = e.target.value.toUpperCase()
      if (valueInput.indexOf(textSeach) > -1) {
        return item
      }
    })
    setFilterCompanies(itemData)
    setSearch(e.target.value)
  }

  const onShowInformation = (item) => {
    setSelectedItem(item)
    props.setModalType('companies')
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
          <CompanyRows
            data={filterCompanies}
            onShowInformation={onShowInformation}
          />
        ) : loading ? (
          <Spinner />
        ) : (
          <CompanyRows data={companies} onShowInformation={onShowInformation} />
        )}
      </ul>

      {modalType === 'companies' ? (
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
  company: { loading, companies },
  modalType: { modalType: modalType }
}) => ({
  loading,
  companies,
  modalType
})

export default connect(mapStateToProps, {
  listCompanies,
  getListFilesByPlantationId,
  setModalType
})(Companies)

const CompanyRows = ({ data, onShowInformation }) =>
  data?.map((item) => (
    <li key={item.id}>
      <NavLink to={`/map?step=2&companyId=${item.id}`}>
        <span className="name">
          <span> {item.name} </span>
          <img
            src={information}
            alt={information}
            onClick={(e) => {
              e.preventDefault()
              onShowInformation(item)
            }}
          />
        </span>

        <span className="details">
          <span className="farms_count">{item.farm_count} کشت و صنعت </span>
          <span className="text-area">{item.area}هکتار</span>
        </span>
      </NavLink>
    </li>
  ))
