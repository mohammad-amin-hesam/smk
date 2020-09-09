import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { listHumanResourceByPlantationPatternByPlantatinIdByPatternId } from '../../../../../redux/actions'
import Spinner from '../../../../../components/ui/spinner/spinner'
import Button from '../../../../../components/ui/button/button'

const HumanResource = (props) => {
  let {
    patternId,
    plantationId,
    loading,
    changeItem,
    listHumanResourceByPlantainIdByPatternId
  } = props

  const listHumanResourc = listHumanResourceByPlantainIdByPatternId
    ? Object.values(listHumanResourceByPlantainIdByPatternId)
    : []
  const ss = listHumanResourc ? Object.values(listHumanResourc) : ''

  useEffect(() => {
    props.listHumanResourceByPlantationPatternByPlantatinIdByPatternId(
      plantationId,
      patternId
    )
  }, [])

  return (
    <div className="human_resource">
      <button className="success">بازگشت به مقدار اولیه</button>
      <button className="submit">ثبت</button>
      <table
        style={{ marginTop: '20px' }}
        className="table table-striped table-bordered table-hover"
      >
        <thead>
          <tr>
            <th>ردیف</th>
            <th>عنوان </th>
            <th>
              <span>مقدار</span>
              <p className="thead">
                <span>مقدار</span>
                <span>نیازبه تایید</span>
                <span>مقدار هزینه</span>
                <span> اختلاف</span>
              </p>
            </th>
            <th>
              <span>هزینه</span>
              <p className="thead">
                <span>هزینه</span>
                <span>مقدارهزینه</span>
                <span>اختلاف</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {listHumanResourc?.map((human) => {
            return human.map((item, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td className="valu_content">
                    <input type="text" />
                    <input type="checkbox" />
                  </td>
                  <td className="valu_content">
                    <input type="text" />
                  </td>
                </tr>
              )
            })
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId },
  pattern: {
    pattern: pattern,
    patternId,
    listHumanResourceByPlantainIdByPatternId,
    changeItem
  }
}) => ({
  plantationId,
  patternId,
  listHumanResourceByPlantainIdByPatternId,
  changeItem
})
export default connect(mapStateToProps, {
  listHumanResourceByPlantationPatternByPlantatinIdByPatternId
})(HumanResource)
