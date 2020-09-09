import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  listHumanByYearIdAndPlantationId,
  fetchHumanResourcesTypes,
  getListSelectedItemsHumanResource,
  closeModal
} from '../../../../../redux/actions'
import Spinner from '../../../../../components/ui/spinner/spinner'
import Button from '../../../../../components/ui/button/button'
import LinearDeterminate from '../../../../../components/ui/progressBar/progressBar'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 140,
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

const AddHuman = (props) => {
  let { listHumanReport, loading, plantationId, yearId, types } = props
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const [selectedItems, setSelectedItems] = useState(new Map())
  const classes = useStyles()
  listHumanReport = listHumanReport ? Object.values(listHumanReport) : []
  const [filterHumanReport, setFilterHumanReport] = useState(listHumanReport)

  const closeHandler = (selectedItems) => {
    props.closeModal()
    props.getListSelectedItemsHumanResource(selectedItems)
  }
  useEffect(() => {
    props.listHumanByYearIdAndPlantationId(yearId, plantationId)
  }, [])

  useEffect(() => {
    props.fetchHumanResourcesTypes()
  }, [])

  const selectHumanResource = (item) => {
    if (selectedItems.has(item.id)) {
      selectedItems.delete(item.id)
    } else {
      selectedItems.set(item.id, item)
    }
    setSelectedItems(new Map(selectedItems))
  }

  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase()
    const itemData = listHumanReport.filter((item) => {
      const searchValue = item.name.toUpperCase()
      if (searchValue.indexOf(textSeach) > -1) {
        return item
      }
    })
    setFilterHumanReport(itemData)
    setSearch(e.target.value)
  }

  return (
    <div className="operation human_report">
      <div className="form-title">
        <h2>انتخاب نیروی انسانی از روی لیست</h2>
        <div className="submit-close">
          <button onClick={() => closeHandler(selectedItems)}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <input type="text" placeholder="جستجو" onChange={searchFilterHandler} />
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value} onChange={(e) => setValue(e.target.value)}>
          {loading ? (
            <option>...</option>
          ) : (
            types.map((select, index) => {
              return (
                <option key={index} value={select.subject}>
                  {select.title}
                </option>
              )
            })
          )}
        </Select>
      </FormControl>
      <table>
        <thead>
          <tr>
            <th>نام</th>
            <th> تلفن تماس </th>
            <th>سمت </th>
            <th>تحصیلات</th>
            <th>گرایش </th>
            <th>نوع فعالیت </th>
            <th>نوع استخدام </th>
            <th>مسیر </th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {search ? (
            filterHumanReport?.map((item) => (
              <HumanReportRows
                isSelected={selectedItems.has(item.id)}
                selectHumanResource={selectHumanResource}
                item={item}
                key={item.id}
              />
            ))
          ) : loading ? (
            <Spinner />
          ) : (
            listHumanReport?.map((item) => (
              <HumanReportRows
                isSelected={selectedItems.has(item.id)}
                selectHumanResource={selectHumanResource}
                item={item}
                key={item.id}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({
  listHumanReport: { loading, listHumanReport },
  plantationState: { plantationId, yearId },
  humanResourcesTypes: { types }
}) => ({
  loading,
  listHumanReport,
  plantationId,
  yearId,
  types
})

export default connect(mapStateToProps, {
  listHumanByYearIdAndPlantationId,
  fetchHumanResourcesTypes,
  closeModal,
  getListSelectedItemsHumanResource
})(AddHuman)

const HumanReportRows = ({ item, selectHumanResource, isSelected }) => (
  <tr style={{ backgroundColor: isSelected ? '#97CCA0' : '#ffffff' }}>
    <td>{item.name}</td>
    <td>{item.cellphone}</td>
    <td>{item.type.title}</td>
    <td>{item.education}</td>
    <td>{item.tendency}</td>
    <td>{item.activity_type}</td>
    <td>{item.employment_type}</td>
    <td>
      {item.plantation.path.length
        ? item.plantation.path.map((path, index) => {
            if (index > 0)
              return (
                <span>
                  {' '}
                  {'>'} {path.depth.title}
                  {':'}
                  {path.name}
                </span>
              )
            return (
              <span>
                {path.depth.title}
                {':'}
                {path.name}
              </span>
            )
          })
        : ''}
    </td>

    <td>
      {isSelected ? (
        <Button btnType="success" clicked={() => selectHumanResource(item)}>
          انصراف
        </Button>
      ) : (
        <Button btnType="success" clicked={() => selectHumanResource(item)}>
          انتخاب
        </Button>
      )}
    </td>
  </tr>
)
