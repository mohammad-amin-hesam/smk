import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import {
  listHumanByYearIdAndPlantationId,
  getListSelectedItemsHumanResource
} from '../../../../../redux/actions'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Calender from '../../../../../components/ui/datePicker/datePicker'
import Button from '../../../../../components/ui/button/button'

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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 350,
    margin: '30px auto',
    boxShadow: '0 0.5em 0.5em #999'
  }
}))

const SelectHumanResource = (props) => {
  let { plantationId, yearId, listSeletedIemsHuman } = props
  const [value, setValue] = useState(0)
  const classes = useStyles()
  const listSeletedIems = listSeletedIemsHuman
    ? Array.from(listSeletedIemsHuman.values())
    : []

  useEffect(() => {
    props.listHumanByYearIdAndPlantationId(yearId, plantationId)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const removeItemHanler = (item) => {
    let itemFilter = listSeletedIems.filter((el) => el.id !== item.id)
    props.getListSelectedItemsHumanResource(itemFilter)
  }

  return (
    <div>
      {listSeletedIems.map((item) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <label>نیروی انسانی مستقیم</label>
              <input type="text" value={item.name} />
            </Grid>
            <Grid item xs={6} spacing={5}>
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="مقدار نفر ساعت" {...a11yProps(0)} />
                    <Tab label="بازه تاریخی" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div class="operation_value">
                    <label>مقدار نفر ساعت</label>
                    <input
                      type="number"
                      min="0"
                      name="operation_type_value"
                      id="operationTypeArea"
                      className="people_houres"
                    />
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div class="operation_value" style={{ display: 'flex' }}>
                    <Calender />
                    <Calender />
                  </div>
                </TabPanel>
              </div>
            </Grid>
            <Grid item xs={1}>
              <span class="remove" onClick={() => removeItemHanler(item)}>
                حذف
              </span>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({
  listHumanReport: { loading, listHumanReport },
  plantationState: { plantationId, yearId },
  operationTypeTab: { listSeletedIemsHuman: listSeletedIemsHuman }
}) => ({
  loading,
  listHumanReport,
  plantationId,
  yearId,
  listSeletedIemsHuman
})

export default connect(mapStateToProps, {
  listHumanByYearIdAndPlantationId,
  getListSelectedItemsHumanResource
})(SelectHumanResource)
