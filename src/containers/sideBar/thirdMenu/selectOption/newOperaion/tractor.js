import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  getListMachineryByParentId,
  closeModal,
  setModalType,
  getlistMachineryByPlantationIdBYParentId,
  getSelectedItemMachineryTractor
} from '../../../../../redux/actions'
import Spinner from '../../../../../components/ui/spinner/spinner'
import Button from '../../../../../components/ui/button/button'
import { makeStyles } from '@material-ui/core/styles'

const Tractor = (props) => {
  let {
    loading,
    listMachineryByplantationIdByParentId,
    selectedItemTractor
  } = props

  let listTractor = listMachineryByplantationIdByParentId.listMachineryByPlantatinIdByMachineryId
    ? Object.values(
        listMachineryByplantationIdByParentId.listMachineryByPlantatinIdByMachineryId
      )
    : []

  const closeFormHandler = () => {
    props.closeModal()
  }
  const selectedHandler = (item) => {
    props.getSelectedItemMachineryTractor(item)
    props.closeModal()
  }
  return (
    <div className="machinery_tractor">
      <div className="form-title">
        <h2>انتخاب ماشین آلات از لیست</h2>
        <div className="submit-close">
          <Button clicked={closeFormHandler}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </Button>
        </div>
      </div>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>عنوان</th>
            <th>مالک </th>
            <th>نوع </th>
            <th>پلاک </th>
            <th>توضیحات </th>
            <th>وضعیت کنونی </th>
            <th>اسب بخار </th>
            <th>مسیر </th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {listTractor?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.ownership}</td>
                <td>{item.type.title}</td>
                <td>{item.plaque}</td>
                <td>{item.description}</td>
                <td>{item.current_status}</td>
                <td>{item.horsepower}</td>
                <td>
                  {item.plantation.path.length
                    ? item.plantation.path.map((path, index) => {
                        if (index > 0)
                          return (
                            <span>
                              {'>'}
                              {path.depth.title}
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

                <td>
                  <Button
                    btnType="success"
                    clicked={() => selectedHandler(item)}
                  >
                    انتخاب
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({
  operationTypeTab: {
    loading,
    listMachineryByParentId,
    listMachineryByplantationIdByParentId,
    selectedItemTractor
  }
}) => ({
  loading,
  listMachineryByParentId,
  listMachineryByplantationIdByParentId,
  selectedItemTractor
})

export default connect(mapStateToProps, {
  getListMachineryByParentId,
  closeModal,
  getlistMachineryByPlantationIdBYParentId,
  getSelectedItemMachineryTractor
})(Tractor)
