import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  listRealPatterns,
  listPatternsPlantingByPatternIdAndPlantationId,
  listOperationByPlantationPatternByPlantatinIdByPatternId,
  setModalType
} from '../../../../../redux/actions'
import Button from '../../../../../components/ui/button/button'
import Modal from '../../../../../components/ui/modal/modal'
import Spinner from '../../../../../components/ui/spinner/spinner'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import CompareRealPattern from '../compareRealPattern'
import OperationType from './operationType'
import HumanResource from './humanResource'
import Machinery from './machinery'
import RawMaterial from './rawMaterial'
import DetailsPattern from '../detailsPattern'

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const PredictionPattern = (props) => {
  let {
    realPatterns,
    patternId,
    plantationId,
    patternsByPlantationIdAndPatternId,
    patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
    loading,
    changeItem,
    listOperationByPlantainIdByPatternId,
    modalType
  } = props

  const [selectCropItem, setSelectCropItem] = useState(1)

  patternsByPlantationIdAndPatternId = patternsByPlantationIdAndPatternId
    ? Object.values(patternsByPlantationIdAndPatternId)
    : []
  const listPatternsByPlantationPatternId = patternsByPlantationIdAndPatternId[0]
    ? Object.values(patternsByPlantationIdAndPatternId[0])
    : []
  const patternsByPlantationIdAndBeetweenPatternId = patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId
    ? Object.values(
        patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId
      )
    : []
  const listPatternsByBeetweenPatterntId = patternsByPlantationIdAndBeetweenPatternId[0]
    ? Object.values(patternsByPlantationIdAndBeetweenPatternId[0])
    : []

  const classes = useStyles()
  const [value, setValue] = useState(0)
  let history = useHistory()
  realPatterns = realPatterns ? Object.values(realPatterns) : []
  const closeHandler = () => {
    history.goBack()
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    props.listPatternsPlantingByPatternIdAndPlantationId(
      plantationId,
      patternId
    )
  }, [])

  useEffect(() => {
    props.listOperationByPlantationPatternByPlantatinIdByPatternId(
      plantationId,
      patternId
    )
  }, [])

  const detailHandler = (item) => {
    props.setModalType('predicionPattern')
    setSelectCropItem(item)
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
      <CompareRealPattern />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="گیاهان" {...a11yProps(0)} />
          <Tab label="عملیات" {...a11yProps(1)} />
          <Tab label="نیروی انسانی" {...a11yProps(2)} />
          <Tab label="ماشین آلات" {...a11yProps(3)} />
          <Tab label="مواد اولیه" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
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
                ? listPatternsByPlantationPatternId?.map((item, index) => {
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
                : listPatternsByBeetweenPatterntId.map((item) => {
                    return (
                      <tr
                        style={{
                          backgroundColor:
                            item.diff_area < 0 ||
                            item.differnce_produce < 0 ||
                            item.comparision_produce < 0 ||
                            item.differnce_sale < 0
                              ? '#ff847c'
                              : 'rgba(68,157,68,.5)'
                        }}
                      >
                        <td>{item.id}</td>
                        <td>{item.name}</td>

                        <td>
                          <p className="test">
                            <span>{Number(item.area).toFixed(2)}</span>
                            <span>
                              {Number(item.comparision_area).toFixed(2)}
                            </span>
                            <span>{Number(item.diff_area).toFixed(2)}</span>
                          </p>
                        </td>

                        <td>
                          <p className="test">
                            <span>{Number(item.produce).toFixed(2)}</span>
                            <span>
                              {Number(item.comparision_produce).toFixed(2)}
                            </span>
                            <span>
                              {Number(item.differnce_produce).toFixed(2)}
                            </span>
                          </p>
                        </td>
                        <td>
                          <p className="test">
                            <span>{Number(item.sale).toFixed(2)}</span>
                            <span>
                              {Number(item.comparision_sale).toFixed(2)}
                            </span>
                            <span>
                              {Number(item.differnce_sale).toFixed(2)}
                            </span>
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
                  })}
            </tbody>
          </table>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OperationType />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HumanResource />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Machinery />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RawMaterial />
      </TabPanel>
      {modalType == 'predicionPattern' ? (
        <Modal>
          <DetailsPattern cropId={selectCropItem} />
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
    pattern: pattern,
    realPatterns,
    patternId,
    patternsByPlantationIdAndPatternId,
    loading,
    changeItem,
    patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
    listOperationByPlantainIdByPatternId
  },
  modalType: { modalType }
}) => ({
  plantationId,
  pattern,
  realPatterns,
  patternId,
  patternsByPlantationIdAndPatternId,
  loading,
  changeItem,
  patternsByPlantationIdAndPatternIdAndCompartionAnotherPatternId,
  listOperationByPlantainIdByPatternId,
  modalType
})
export default connect(mapStateToProps, {
  listRealPatterns,
  listPatternsPlantingByPatternIdAndPlantationId,
  listOperationByPlantationPatternByPlantatinIdByPatternId,
  setModalType
})(PredictionPattern)
