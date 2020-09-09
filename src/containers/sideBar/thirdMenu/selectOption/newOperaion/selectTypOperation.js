import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  listOperationTypesByPlantationId,
  getOperationByPlantationIdByOperationType
} from '../../../../../redux/actions'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import OperationTypeTab from './OperationTypeTab'
import OperatinTypesSprout from './operaionTypeSprout'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}))

const SelectTypeOperaion = (props) => {
  let { types, plantationId, listOperationTypeByPlantationId } = props
  const [isOpened, setIsOpened] = useState(false)
  const classes = useStyles()
  let history = useHistory()
  let location = useLocation()
  listOperationTypeByPlantationId = listOperationTypeByPlantationId
    ? Object.values(listOperationTypeByPlantationId)
    : []
  const [selectedItem, setSelectedItem] = useState({})

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    props.listOperationTypesByPlantationId(plantationId)
  }, [])

  const handleChange = (item) => {
    setSelectedItem(item)
    // props.listOperationTypesByPlantationId(plantationId)
  }
  return (
    <div className="select_type_operation">
      <Slider {...settings}>
        {listOperationTypeByPlantationId.map((item, index) => {
          return (
            <div
              className="item_slide"
              key={index}
              onClick={() => handleChange(item)}
            >
              <span className={item.icon}></span>
              <span>{item.name}</span>
            </div>
          )
        })}
      </Slider>

      {selectedItem?.has_child && <OperatinTypesSprout id={selectedItem.id} />}

      {selectedItem?.has_value && <OperationTypeTab unit={selectedItem.unit} />}
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId, plantationState },
  operationTypes: { types },
  operationTypeTab: { listOperationTypeByPlantationId }
}) => ({
  plantationId,
  types,
  listOperationTypeByPlantationId
})

export default connect(mapStateToProps, {
  listOperationTypesByPlantationId,
  getOperationByPlantationIdByOperationType
})(SelectTypeOperaion)
