import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import {
  listPatternsPlantingByPatternIdAndPlantationId,
  listPatternsByPlantingYearId,
  listPatterns,
  setModalType
} from '../../../../redux/actions'
import Button from '../../../../components/ui/button/button'
import Spinner from '../../../../components/ui/spinner/spinner'
import Modal from '../../../../components/ui/modal/modal'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CompareRealPattern from './compareRealPattern'
import DetailsPattern from './detailsPattern'
// import Modal from '@material-ui/core/Modal'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const RealPattern = (props) => {
  let {
    plantationId,
    pattern,
    realPatterns,
    patternsByPlantationIdAndPatternId,
    loading,
    patternId,
    changeItem,
    patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
    modalType
  } = props
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [selectCrop, setSelectCrop] = useState(1)

  let history = useHistory()

  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  realPatterns = realPatterns ? Object.values(realPatterns) : []
  patternsByPlantationIdAndPatternId = patternsByPlantationIdAndPatternId
    ? Object.values(patternsByPlantationIdAndPatternId)
    : []
  const patternsByPlantationIdAndBeetweenPatternId = patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId
    ? Object.values(
        patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId
      )
    : []
  const patternsByPlantationPatternId = patternsByPlantationIdAndPatternId[0]
    ? Object.values(patternsByPlantationIdAndPatternId[0])
    : []
  const listpatternsbybeetweenpatternid = patternsByPlantationIdAndBeetweenPatternId[0]
    ? Object.values(patternsByPlantationIdAndBeetweenPatternId[0])
    : []

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const closeHandler = () => {
    history.goBack()
  }

  useEffect(() => {
    props.listPatternsPlantingByPatternIdAndPlantationId(
      plantationId,
      patternId
    )
  }, [])

  const detailHandler = (item) => {
    setOpen(true)
    setShowDetails(true)
    props.setModalType('PatternCropDetail')
    setSelectCrop(item)
  }

  return (
    <div className="operation real_attern">
      <div className="form-title">
        <h2>اطلاعات تکمیلی</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="گیاهان" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <CompareRealPattern />
      <TabPanel value={value} index={0}>
        {loading ? (
          <Spinner />
        ) : (
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ردیف</th>
                <th>عنوان </th>
                <th>
                  مساحت
                  <p className="thead">
                    <span>مساحت(هکتار)</span>
                    <span>مساحت واقعی</span>
                    <span>اختلاف</span>
                  </p>
                </th>
                <th>
                  تولید
                  <p className="thead">
                    <span>تولید</span>
                    <span>تولید مقایسه</span>
                    <span>اختلاف</span>
                  </p>
                </th>
                <th>
                  فروش
                  <p className="thead">
                    <span>فروش</span>
                    <span>فروش مقایسه</span>
                    <span>اختلاف</span>
                  </p>
                </th>
                <th>عملیات </th>
              </tr>
            </thead>
            <tbody>
              {!changeItem
                ? patternsByPlantationPatternId?.map((item, index) => {
                    return (
                      <tr
                        key={item.id}
                        style={{
                          backgroundColor:
                            item.diff_area < 0 ||
                            item.differnce_produce < 0 ||
                            item.comparision_produce < 0
                              ? 'rgba(68,157,68,.5)'
                              : '#ff847c'
                        }}
                      >
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <p className="test">
                            <span>{Number(item.area).toFixed(2)}</span>
                            <span>{item.comparision_area}</span>
                            <span>{item.diff_area}</span>
                          </p>
                        </td>
                        <td>
                          <p className="test">
                            <span>{item.produce}</span>
                            <span>{item.comparision_produce}</span>
                            <span>{item.differnce_produce}</span>
                          </p>
                        </td>
                        <td>
                          <p className="test">
                            <span>{item.sale}</span>
                            <span>{item.comparision_sale}</span>
                            <span>{item.differnce_sale}</span>
                          </p>
                        </td>
                        <td>
                          <Button
                            btnType="success"
                            clicked={() => detailHandler(item)}
                          >
                            جزئیات
                          </Button>
                        </td>
                      </tr>
                    )
                  })
                : listpatternsbybeetweenpatternid.map((item) => {
                    return (
                      <tr
                        style={{
                          backgroundColor:
                            item.diff_area < 0 ||
                            item.differnce_produce < 0 ||
                            item.comparision_produce < 0
                              ? '#ff847c'
                              : 'rgba(68,157,68,.5)'
                        }}
                      >
                        <td>{item.id}</td>
                        <td>{item.name}</td>

                        <td className="valu_content">
                          <p className="test">
                            <span>{item.area}</span>
                            <span>{item.comparision_area}</span>
                            <span>{item.diff_area}</span>
                          </p>
                        </td>

                        <td className="valu_content">
                          <p className="test">
                            <span>{item.produce}</span>
                            <span>{item.comparision_produce}</span>
                            <span>{item.differnce_produce}</span>
                          </p>
                        </td>
                        <td className="valu_content">
                          <p className="test">
                            <span>{item.sale}</span>
                            <span>{item.comparision_sale}</span>
                            <span>{item.differnce_sale}</span>
                          </p>
                        </td>
                        <td>
                          <Button
                            btnType="success"
                            clicked={() => detailHandler(item)}
                          >
                            جزییات
                          </Button>
                        </td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        )}
      </TabPanel>

      {modalType == 'PatternCropDetail' ? (
        <Modal>
          <DetailsPattern cropId={selectCrop} />
        </Modal>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId },
  pattern: {
    pattern,
    realPatterns,
    patternsByPlantationIdAndPatternId,
    loading,
    patternId,
    patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
    changeItem
  },
  modalType: { modalType }
}) => ({
  plantationId,
  pattern,
  realPatterns,
  patternsByPlantationIdAndPatternId,
  loading,
  patternId,
  patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
  changeItem,
  modalType
})

export default connect(mapStateToProps, {
  listPatternsPlantingByPatternIdAndPlantationId,
  listPatterns,
  listPatternsByPlantingYearId,
  setModalType
})(RealPattern)
