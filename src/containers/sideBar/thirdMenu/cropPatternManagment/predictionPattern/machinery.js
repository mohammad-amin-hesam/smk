import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { listMachineryByPlantationPatternByPlantatinIdByPatternId } from '../../../../../redux/actions'
import Button from '../../../../../components/ui/button/button'

const Machinery = (props) => {
  let {
    patternId,
    plantationId,
    loading,
    changeItem,
    listMachineryByPlantainIdByPatternId
  } = props

  const listMachinery = listMachineryByPlantainIdByPatternId
    ? Object.values(listMachineryByPlantainIdByPatternId)
    : []

  useEffect(() => {
    props.listMachineryByPlantationPatternByPlantatinIdByPatternId(
      plantationId,
      patternId
    )
  }, [])

  return (
    <div className="machinery">
      <button className="success">بازگشت به مقدار اولیه</button>
      <button className="submit">ثبت</button>
      <table className="table table-striped table-bordered table-hover">
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
          {listMachinery?.map((machinery) => {
            return machinery.map((item, index) => {
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
  pattern: { pattern: pattern, patternId, listMachineryByPlantainIdByPatternId }
}) => ({
  plantationId,
  patternId,
  listMachineryByPlantainIdByPatternId
})
export default connect(mapStateToProps, {
  listMachineryByPlantationPatternByPlantatinIdByPatternId
})(Machinery)
