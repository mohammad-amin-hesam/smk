import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  closeModal,
  getlistMachineryByPlantationIdBYParentId,
  selecedItemHandler,
} from "../../../../../redux/actions";
import Spinner from "../../../../../components/ui/spinner/spinner";
import Button from "../../../../../components/ui/button/button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

const MachineryByParentIdByPlantationId = (props) => {
  let { loading, listMachineryByplantationIdByParentId, selectedItem } = props;
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [filterMachinery, setFilterMachinery] = useState(
    listMachineryByplantationIdByParentId
  );
  const classes = useStyles();

  let listMachinery = listMachineryByplantationIdByParentId
    ? Object.values(listMachineryByplantationIdByParentId)
    : [];

  let listItems = listMachinery[0] ? Object.values(listMachinery[0]) : [];

  // const closeHandler = (selectedItems) => {
  //   // props.getListSelectedItemsRawMaterial(selectedItems)
  //   getSelectedItemsRawMaterial(selectedItems)
  //   props.closeModal()
  // }

  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase();
    const itemData = listItems.filter((item) => {
      const searchValue = item.name.toUpperCase();
      if (searchValue.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterMachinery(itemData);
    setSearch(e.target.value);
  };

  const selectedItemHandler = (item) => {
    props.closeModal();
    props.selecedItemHandler(item);
  };
  const closeHandler = () => {
    props.closeModal();
  };

  return (
    <div className="machinery_plantationId">
      <div className="form-title">
        <h2>انتخاب مواد اولیه از لیست</h2>
        <div className="submit-close" clicked={closeHandler}>
          <Button>
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
            <th> مالک </th>
            <th>نوع </th>
            <th>پلاک</th>
            <th>توضیحات </th>
            <th>وضعیت کنونی </th>
            <th>اسب بخار </th>
            <th>مسیر </th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {search ? (
            filterMachinery?.map((item, index) => (
              <SelectMachineryRows
                key={index}
                item={item}
                selectedItemHandler={selectedItemHandler}
                selectedItem={selectedItem}
              />
            ))
          ) : loading ? (
            <Spinner />
          ) : (
            listItems?.map((item, index) => (
              <SelectMachineryRows
                key={index}
                item={item}
                selectedItemHandler={selectedItemHandler}
                selectedItem={selectedItem}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  operationTypeTab: { loading, listMachineryByplantationIdByParentId },
  plantationState: { plantationId },
  pattern: { selectedItem },
}) => ({
  loading,
  plantationId,
  listMachineryByplantationIdByParentId,
  selectedItem,
});

export default connect(mapStateToProps, {
  getlistMachineryByPlantationIdBYParentId,
  closeModal,
  selecedItemHandler,
})(MachineryByParentIdByPlantationId);

const SelectMachineryRows = ({ item, selectedItem, selectedItemHandler }) => (
  <tr key={item.id}>
    <td>{item.name}</td>
    <td>{item.ownership}</td>
    <td>{item.type.title}</td>
    <td>{item.plaque}</td>
    <td>{item.description}</td>
    <td>{item.current_status}</td>
    <td>{item.horsepower}</td>
    <td>
      {item.plantation.path.map((path) => {
        return path.name;
      })}
    </td>

    <td>
      <Button btnType="success" clicked={() => selectedItemHandler(item)}>
        انتخاب
      </Button>
    </td>
  </tr>
);
