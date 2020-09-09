import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { getWateringManagmentByYearIdByPlantationId } from '../../../redux/actions'
import Spinner from '../../../components/ui/spinner/spinner'
import Button from '../../../components/ui/button/button'

const WateringManagement = (props) => {
  let { plantationId, yearId, listWateringManagment, loading } = props
  let history = useHistory()

  let listWaterManagment = listWateringManagment
    ? Object.values(listWateringManagment)
    : []

  useEffect(() => {
    props.getWateringManagmentByYearIdByPlantationId(yearId, plantationId)
  }, [])

  const goBackHandler = () => {
    history.goBack()
  }

  return (
    <div className="operation watering_managment">
      <div className="form-title">
        <h2>لیست آبیاری</h2>
        <div className="submit-close">
          <button onClick={goBackHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>

      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <table>
        <thead>
          <tr>
            <th>ردیف</th>
            <th> محصول </th>
            <th>منابع آب </th>
            <th>تاریخ</th>
            <th>زمان </th>
            <th>مقدار </th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {listWaterManagment?.map((water, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {water.crop}({water.variety_name})
                </td>
                <td>{water.water_resource_name}</td>
                <td>{water.irrigation_date}</td>
                <td>
                  {water.end_time}- {water.start_time}
                </td>
                <td>{water.value}</td>
                <td>
                  {!water.status ? (
                    <Button btnType="btn_info">تایید</Button>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* )} */}
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId, yearId },
  wateringManagment: { listWateringManagment, loading }
}) => ({
  plantationId,
  yearId,
  loading,
  listWateringManagment
})
export default connect(mapStateToProps, {
  getWateringManagmentByYearIdByPlantationId
})(WateringManagement)
