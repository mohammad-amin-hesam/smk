import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  setPlantationState,
  getListDetails,
  closeModal
} from '../../../../redux/actions'
import Spinner from '../../../../components/ui/spinner/spinner'
import CustomizedProgressBar from '../../../../components/ui/progressBar/progressCustom'

const DetailsPattern = (props) => {
  let { plantationId, patternId, listDetails, loading, cropId } = props
  listDetails = listDetails ? Object.values(listDetails) : []

  useEffect(() => {
    if (plantationId > 0 && patternId > 0) {
      props.getListDetails(plantationId, patternId, cropId.id)
    }
  }, [cropId.id])

  const comBackHandler = () => {
    props.closeModal()
  }

  return (
    <div className=" pattern_crop_detail">
      <div className="form-title">
        <span>جزئیات</span>
        <div className="submit-close">
          <button onClick={comBackHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      {loading ? (
        <CustomizedProgressBar />
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>عنوان </th>
              <th>مسیر </th>
              <th>مساحت(هکتار)</th>
              <th> تولید </th>
              <th>فروش </th>
            </tr>
          </thead>
          <tbody>
            {listDetails?.map((itemDetails, index) => {
              return (
                <tr key={itemDetails.crop_id}>
                  <td>{index + 1}</td>
                  <td>
                    {itemDetails.crop_name}({itemDetails.variety_name})
                  </td>
                  <td style={{ width: '300px' }}>
                    {itemDetails.path.ancestors
                      ? itemDetails.path.ancestors.map((path, index) => {
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
                  <td>{itemDetails.area}</td>
                  <td>{itemDetails.produce}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId },
  pattern: { patternId, listDetails, loading }
}) => ({
  plantationId,
  patternId,
  listDetails,
  loading
})

export default connect(mapStateToProps, {
  setPlantationState,
  getListDetails,
  closeModal
})(DetailsPattern)
