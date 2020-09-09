import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  closeModal,
  getExitPlantationIdByRawMaterialId,
  getSelectedItemExitByPlantationIdByMaterialId,
} from "../../../../../redux/actions";
import Spinner from "../../../../../components/ui/spinner/spinner";
import Button from "../../../../../components/ui/button/button";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 400,
    margin: "30px auto",
    boxShadow: "0 0.5em 0.5em #999",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ExitPlantationIdByRawMaterialId = (props) => {
  let {
    loading,
    listExitPlantationIdByRawMaterialId,
    plantationId,
    selectedItem,
    selectedExitByPlantationIdByRawMaterialId,
  } = props;

  // let listExit = listExitByplantationIdByRawMaterialId
  //   ? Object.values(listExitByplantationIdByRawMaterialId)
  //   : []

  const selectedItemHandler = (item) => {
    props.getSelectedItemExitByPlantationIdByMaterialId(item);
  };

  const closeHandler = () => {
    props.closeModal();
  };

  return (
    <div className="select_raw_materials">
      <div className="form-title">
        <h2>انتخاب مواد اولیه از لیست</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </Button>
        </div>
      </div>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>کدسیستم</th>
            <th>شماره حواله </th>
            <th>کد حواله </th>
            <th>زمان خروج</th>
            <th>عنوان </th>
            <th>مقدار </th>
            <th>واحد </th>
            <th>هزینه هر عدد </th>
            <th>مجموع هزینه ریالی </th>
            <th> تفصیلی 3 - شماره قطعه </th>
            <th> عملیات </th>
          </tr>
        </thead>
        <tbody>
          {listExitPlantationIdByRawMaterialId?.map((item) => {
            return (
              <tr
                key={item.id}
                // style={{
                //   backgroundColor: selectedExitByPlantationIdByRawMaterialId.map(
                //     (select) => select.id == item.id
                //   )
                //     ? '#97CCA0'
                //     : 'red'
                // }}
              >
                <td>{item.asp_id}</td>
                <td>{item.doc_no}</td>
                <td>{item.doc_code}</td>
                <td>{item.exit_date ? item.exit_date : ""}</td>
                <td>
                  {item.raw_material_title ? item.raw_material_title : ""}
                </td>
                <td>{item.value ? item.value : ""}</td>
                <td>{item.raw_material_unit ? item.raw_material_unit : ""}</td>
                <td>{item.price_per_unit ? item.price_per_unit : ""}</td>
                <td>{item.total_price ? item.total_price : ""}</td>
                <td>
                  {item.path
                    ? item.path.map(
                        (item) => item.depth.title + " " + ":" + item.name + ">"
                      )
                    : ""}
                </td>

                <td>
                  <Button
                    btnType="success"
                    clicked={() => selectedItemHandler(item)}
                  >
                    انتخاب
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  operationTypeTab: {
    loading,
    listExitPlantationIdByRawMaterialId,
    selectedExitByPlantationIdByRawMaterialId,
    listSystemWarehouse,
  },
  plantationState: { plantationId },
}) => ({
  loading,
  listExitPlantationIdByRawMaterialId,
  plantationId,
  selectedExitByPlantationIdByRawMaterialId,
  listSystemWarehouse,
});

export default connect(mapStateToProps, {
  getExitPlantationIdByRawMaterialId,
  closeModal,
  getSelectedItemExitByPlantationIdByMaterialId,
})(ExitPlantationIdByRawMaterialId);
