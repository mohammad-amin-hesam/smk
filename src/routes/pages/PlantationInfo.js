import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { toast } from 'react-toastify'
import Grid from '@material-ui/core/Grid'
import Button from '../../components/ui/button/button'
import {
  getListFiles,
  setPlantationState,
  fileUploadByPlantationId,
  closeModal,
  setModalType,
  getListFilesByPlantationId,
} from '../../redux/actions'
import GetAppIcon from '@material-ui/icons/GetApp'
import DeleteIcon from '@material-ui/icons/Delete'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Spinner from '../../components/ui/spinner/spinner'

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
    backgroundColor: theme.palette.background.paper
  }
}))

const PlantationInfo = (props) => {
  const [file, setFile] = useState(' ')
  let {
    loading,
    uploaded,
    files,
    msg,
    listFiles,
    plantationId,
    selectedItem,
    getListFiles
  } = props
  const classes = useStyles()
  const [value, setValue] = useState(0)
  let [infoFileName, setInfoFileName] = useState('')
  listFiles = listFiles ? Object.values(listFiles) : ''
  let listOfFile = listFiles[0] ? Object.values(listFiles[0]) : ''

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  useEffect(() => {
    props.getListFilesByPlantationId(selectedItem.id)
    getListFiles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const comeBack = () => {
     props.closeModal()
    // props.setModalType("")
    
  }

  const submit = (e) => {
    e.preventDefault()
    if (selectedItem) {
      props.fileUploadByPlantationId({
        infoFileName,
        file,
        plantationId: selectedItem.id
      });
    } else {
      // You can show an error to the user in here.
    }
  }
  return (
    <div className="plantaion_info">
      <div className="form-title">
        <span>اطلاعات تکمیلی</span>
        <div className="submit-close">
          <Button btnType="success" clicked={comeBack}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
        <div></div>
      </div>

      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="فایل ها" {...a11yProps(0)} />
          <Tab label="اطلاعات ثابت" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {
          loading?<Spinner/>:
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ردیف</th>
                <th> تاریخ </th>
                <th>عنوان </th>
                <th>سایز </th>
                <th>مسیر </th>
                <th>لینک دانلود </th>
                <th>عملیات </th>
              </tr>
            </thead>
            <tbody>
              {listOfFile
                ? listOfFile.map((file, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{file.date}</td>
                        <td>{file.name}</td>
                        <td>{file.size}</td>
                        <td>{file.path}</td>
                        <td>
                          <a href={file.src} target="_blank">
                            <GetAppIcon className="download" />
                          </a>
                        </td>
                        <td>{/* <DeleteIcon color="secondary" /> */}</td>
                      </tr>
                    )
                  })
                : ''}
            </tbody>
          </table>
        }

        <form onSubmit={submit}>
          <span>افزودن فایل</span>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={5}>
              <div className="upload_file">
                <label>نام فایل</label>
                <input
                  type="text"
                  value={infoFileName}
                  onChange={(e) => setInfoFileName(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={5} sm={5}>
              <div className="upload_file">
                <label>آپلود فایل</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Button btnType="submit" >
                ثبت
              </Button>
            </Grid>
          </Grid>
        </form>
        <span> {props.msg ? props.msg : ''} </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  )
}

const mapStateToProps = ({
  files: { loading, files, msg, listFiles },
  plantationState: { plantationId }
}) => ({
  loading,
  files,
  msg,
  listFiles,
  plantationId
})
export default connect(mapStateToProps, {
  getListFiles,
  fileUploadByPlantationId,
  setPlantationState,
  closeModal,
  setModalType,
  getListFilesByPlantationId,
 
})(PlantationInfo)
