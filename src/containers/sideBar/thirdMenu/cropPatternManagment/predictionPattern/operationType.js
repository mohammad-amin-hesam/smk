import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import {
  listOperationByPlantationPatternByPlantatinIdByPatternId,
  postOperationTypePattern
} from '../../../../../redux/actions'
import Spinner from '../../../../../components/ui/spinner/spinner'
import Button from '../../../../../components/ui/button/button'

const OperationType = (props) => {
  let {
    patternId,
    plantationId,
    loading,
    changeItem,
    listOperationByPlantainIdByPatternId,
    listOperationByPlantationIdComparisionBetweeenParentId
  } = props

  const [items, setItems] = useState(
    !changeItem
      ? listOperationByPlantainIdByPatternId
      : listOperationByPlantationIdComparisionBetweeenParentId
  )
  useEffect(() => {
    props.listOperationByPlantationPatternByPlantatinIdByPatternId(
      plantationId,
      patternId
    )
  }, []);

  const submitOperationTypeHandler = useCallback(
    () => {
      props.postOperationTypePattern(plantationId, patternId, items)
    },
    [],
  );

  const resetHandler = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        value: 0,
        cost: 0,
        need_proof: 0
      }))
    )
  }

  const setPatternState = (e) => {
    const id = +e.target.getAttribute('data-operation-id')
    const { name, value } = e.target
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [name]: !Number.isNaN(+value) ? value : value ? 1 : 0
          }
        }
        return item
      })
    })
  }

  return (
    <div className="list_operation_type">
      <button className="success" onClick={resetHandler}>
        بازگشت به مقدار اولیه
      </button>
      <button className="submit" onClick={submitOperationTypeHandler}>
        ثبت
      </button>

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
          {items.map((item, index) => {
            return (
              <tr
                style={{
                  backgroundColor:
                    item.comparision_value > 0 || item.diff_comparison > 0
                      ? '#ff847c'
                      : 'rgba(68,157,68,.5)'
                }}
              >
                <td>{index + 1}</td>
                <td>{item.operation_type_name}</td>
                <td className="valu_content">
                  <p className="test">
                    <input
                      name="value"
                      type="number"
                      data-operation-id={item.id}
                      min="0"
                      value={item.value}
                      onChange={setPatternState}
                    />
                    <label>{item.operation_type_unit}</label>
                    <input
                      type="checkbox"
                      data-operation-id={item.id}
                      name="need_proof"
                      checked={item.need_proof === 1}
                      onChange={setPatternState}
                    />
                    <span>{item.comparision_value}</span>
                    <span>{item.diff_comparison}</span>
                  </p>
                </td>
                <td className="valu_content">
                  <p className="test">
                    <input
                      data-operation-id={item.id}
                      name="cost"
                      type="number"
                      min="0"
                      value={item.cost}
                      onChange={setPatternState}
                    />
                    <span>{item.comparision_cost}</span>
                    <span>{item.diff_cost}</span>
                  </p>
                </td>
              </tr>
            )
          })}
          )
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
    listOperationByPlantainIdByPatternId,
    listOperationByPlantationIdComparisionBetweeenParentId,
    changeItem
  }
}) => ({
  plantationId,
  patternId,
  listOperationByPlantainIdByPatternId,
  listOperationByPlantationIdComparisionBetweeenParentId,
  changeItem
})
export default connect(mapStateToProps, {
  listOperationByPlantationPatternByPlantatinIdByPatternId,
  postOperationTypePattern
})(OperationType)
