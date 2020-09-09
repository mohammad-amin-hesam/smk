import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  fetchRawMaterial,
  getSelectedItemRawMaterial,
  closeModal
} from '../../../../../redux/actions'
import Spinner from '../../../../../components/ui/spinner/spinner'
import Button from '../../../../../components/ui/button/button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 400,
    margin: '30px auto',
    boxShadow: '0 0.5em 0.5em #999'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const SelectRawMaterial = (props) => {
  let { loading, plantationId, material, getSelectedItemsRawMaterial } = props
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [showdetails, setShowDetails] = useState(new Map())
  const [filterRawMaterials, setFilterRawMaterials] = useState(material)

  const closeHandler = (selectedItem) => {
    if (selectedItem) {
      getSelectedItemsRawMaterial({
        ...selectedItem
      })
      props.closeModal()
    } else {
      props.closeModal()
    }
  }

  useEffect(() => {
    props.fetchRawMaterial(plantationId)
  }, [])

  const selectRawMaterials = (item) => {
    let isSame = item?.id == selectedItem?.id
    setSelectedItem(isSame ? null : item)
  }

  const addRow = (item) => {
    if (showdetails.has(item.id)) {
      showdetails.delete(item.id)
    } else {
      showdetails.set(item.id, item)
    }
    setShowDetails(new Map(showdetails))
  }

  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase()
    const itemData = material.filter((item) => {
      const searchValue = item.raw_material.name.toUpperCase()
      if (searchValue.indexOf(textSeach) > -1) {
        return item
      }
    })
    setFilterRawMaterials(itemData)
    setSearch(e.target.value)
  }
  return (
    <div className="select_raw_materials">
      <div className="form-title">
        <h2>انتخاب مواد اولیه از لیست</h2>
        <div className="submit-close">
          <Button clicked={() => closeHandler(selectedItem)}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <input
        type="text"
        className="search"
        placeholder="جستجو"
        onChange={searchFilterHandler}
      />

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>عنوان</th>
            <th> موجودی </th>
            <th>تامین کننده </th>
            <th>انبار</th>
            <th>تاریخ ورود به انبار </th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {search ? (
            filterRawMaterials?.map((item, index) => (
              <SelectRawMaterialRows
                key={index}
                isShowDetails={showdetails.has(item.id)}
                selectRawMaterials={selectRawMaterials}
                item={item}
                addRow={addRow}
                selectedItem={selectedItem}
              />
            ))
          ) : loading ? (
            <Spinner />
          ) : (
            material?.map((item, index) => (
              <SelectRawMaterialRows
                key={index}
                selectRawMaterials={selectRawMaterials}
                item={item}
                addRow={addRow}
                isShowDetails={showdetails.has(item.id)}
                selectedItem={selectedItem}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({
  rawMaterial: { loading, material },
  plantationState: { plantationId }
}) => ({
  loading,
  material,
  plantationId
})

export default connect(mapStateToProps, {
  fetchRawMaterial,
  getSelectedItemRawMaterial,
  closeModal
})(SelectRawMaterial)

const SelectRawMaterialRows = ({
  item,
  selectRawMaterials,
  addRow,
  selectedItem,
  isShowDetails
}) => (
  <React.Fragment>
    <tr
      style={{
        backgroundColor: selectedItem?.id === item.id ? '#97CCA0' : '#fff'
      }}
      key={item.id}
    >
      <td>{item.raw_material.name}</td>
      <td>{item.balance}</td>
      <td>{item.supplier.title}</td>
      <td>{item.entry_date}</td>

      <td>{item.plantation.name}</td>

      <td>
        <span style={{ display: 'flex' }}>
          <Button btnType="success" clicked={() => selectRawMaterials(item)}>
            {selectedItem?.id === item.id ? 'انصراف' : 'انتخاب'}
          </Button>
          <Button btnType="success" clicked={() => addRow(item)}>
            {!isShowDetails ? 'توضیحات' : 'پنهان کردن  جزییات'}
          </Button>
        </span>
      </td>
    </tr>
    {isShowDetails && (
      <tr className="add_row">
        <span className="show_details">
          <span>
            {item.raw_material.name}({item.raw_material.unique_code})
          </span>{' '}
          <span> موجودی: {item.balance} </span>
        </span>
        <span className="show_details">
          <span> تاریخ ورود به انبار: {item.entry_date} </span>
          <span> Invoice No.: {item.invoice_number} </span>
        </span>
        <span className="show_details"> شرکت:{item.plantation.name} </span>
        <span className="show_details">
          <span> تامین کننده: {item.supplier.title} </span>
          <span> تلفن تماس: {item.supplier.phone_number} </span>
          <span>آدرس: {item.supplier.address} </span>
        </span>
        <span className="show_details"> توضیحات:{item.description} </span>
      </tr>
    )}
  </React.Fragment>
)
