import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  closeModal,
  listFinancialSystemWarehouse,
  setModalType,
  getExitPlantationIdByRawMaterialId,
} from "../../../../../redux/actions";
import Spinner from "../../../../../components/ui/spinner/spinner";
import Button from "../../../../../components/ui/button/button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import ExitPlantationIdByRawMaterialId from "./exitPlantationIdByRawMaterialId";
import Modal from "../../../../../components/ui/modal/modal";
import SecondModal from "../../../../../components/ui/secondModal/secondModal";

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

const SelectSystemWarehouse = (props) => {
  let { plantationId, listSystemWarehouse, loading, modalType } = props;

  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [selectedItems, setSelectedItems] = useState(new Map());
  const [detailWareHouse, setDetailWareHouse] = useState(false);
  const [filterRawSystemWarehouse, setFilterRawSystemWarehouse] = useState(
    listSystemWarehouse
  );
  const classes = useStyles();
  const closeHandler = () => {
    props.closeModal();
  };
  useEffect(() => {
    props.listFinancialSystemWarehouse(plantationId);
  }, []);
  listSystemWarehouse = listSystemWarehouse
    ? Object.values(listSystemWarehouse)
    : [];
  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase();
    const itemData = listSystemWarehouse.filter((item) => {
      const searchValue = item.title.toUpperCase();
      if (searchValue.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterRawSystemWarehouse(itemData);
    setSearch(e.target.value);
  };
  const selectRawMaterials = (item) => {
    setDetailWareHouse(true);
    // props.setModalType('exitRawMaterialId')
    if (selectedItems.has(item.id)) {
      selectedItems.delete(item.id);
    } else {
      selectedItems.set(item.id, item);
    }
    setSelectedItems(new Map(selectedItems));
    props.getExitPlantationIdByRawMaterialId(plantationId, item.id);
  };
  return (
    <div className="select_raw_materials">
      <div className="form-title">
        <h2>انتخاب مواد اولیه از لیست</h2>
        <div className="submit-close">
          <Button clicked={() => closeHandler()}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <input
        type="text"
        className="search"
        placeholder="جستجو"
        onChange={searchFilterHandler}
      />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>عنوان</th>
            <th>گروه </th>
            <th>تعداد خروجی انبار </th>
            <th>کد سیستم</th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {search ? (
            filterRawSystemWarehouse?.map((item, index) => (
              <SelectSystemWarehouseRows
                key={index}
                isSelected={selectedItems.has(item ? item.id : "")}
                selectRawMaterials={selectRawMaterials}
                item={item}
              />
            ))
          ) : loading ? (
            <Spinner />
          ) : (
            listSystemWarehouse?.map((item, index) => (
              <SelectSystemWarehouseRows
                key={index}
                isSelected={selectedItems.has(item ? item.id : "")}
                selectRawMaterials={selectRawMaterials}
                item={item}
              />
            ))
          )}
        </tbody>
      </table>
      {/* {modalType === 'exitRawMaterialId' ? (
        <Modal>
          <ExitPlantationIdByRawMaterialId />
        </Modal>
      ) : (
        ''
      )} */}

      {detailWareHouse ? (
        <SecondModal
          show={detailWareHouse}
          // modalClosed={closeMachineryTypeHandler}
        >
          <ExitPlantationIdByRawMaterialId />
        </SecondModal>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({
  operationTypeTab: { loading, listSystemWarehouse },
  plantationState: { plantationId },
  modalType: { modalType: modalType },
}) => ({
  loading,
  listSystemWarehouse,
  plantationId,
  modalType,
});

export default connect(mapStateToProps, {
  listFinancialSystemWarehouse,
  closeModal,
  setModalType,
  getExitPlantationIdByRawMaterialId,
})(SelectSystemWarehouse);

const SelectSystemWarehouseRows = ({
  item,
  selectRawMaterials,
  isSelected,
}) => (
  <tr
    style={{ backgroundColor: isSelected ? "green" : "#ffffff" }}
    key={item?.id}
  >
    <td>{item?.title}</td>
    <td>{item?.group ? item.group.name : ""}</td>
    <td>{item?.asp_storage_exits_count}</td>
    <td>{item?.asp_code}</td>

    <td>
      {
        <div>
          <Button btnType="success" clicked={() => selectRawMaterials(item)}>
            {!isSelected ? "انتخاب" : "انصراف"}
          </Button>
        </div>
      }
    </td>
  </tr>
);
