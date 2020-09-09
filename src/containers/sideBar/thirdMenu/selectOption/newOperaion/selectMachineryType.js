import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  getListMachineryByParentId,
  closeModal,
  setModalType,
  getListMachineryTypeByParentId,
  getlistMachineryByPlantationIdBYParentId,
} from "../../../../../redux/actions";
import Spinner from "../../../../../components/ui/spinner/spinner";
import Button from "../../../../../components/ui/button/button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SecondModal from "../../../../../components/ui/secondModal/secondModal";
import MachineryByParentIdByPlantationId from "./MachineryByParentIdByPlantationId";

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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const SelectMachineryType = (props) => {
  let { loading, listMachineryTypeByParentId, plantationId } = props;
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [
    machineryByParentIdByPlantationId,
    setMachineryByParentIdByPlantationId,
  ] = useState(false);
  listMachineryTypeByParentId = listMachineryTypeByParentId
    ? Object.values(listMachineryTypeByParentId)
    : [];
  const classes = useStyles();

  let listMachineryType = listMachineryTypeByParentId[0]
    ? Object.values(listMachineryTypeByParentId[0])
    : [];

  const closeHandler = () => {
    setMachineryByParentIdByPlantationId(false);
    setOpen(false);
  };

  // useEffect(() => {
  //   props.getListMachineryByParentId()
  // }, [])

  const showModal = (item) => {
    setOpen(true);
    item.has_child && props.getListMachineryTypeByParentId(item.id);
    !item.has_child &&
      props.getlistMachineryByPlantationIdBYParentId(plantationId, item.id);
    setMachineryByParentIdByPlantationId(true);
  };

  const closeMachineryTypeHandler = () => {
    setMachineryByParentIdByPlantationId(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="select_raw_materials">
      <div className="form-title">
        <h2>انتخاب ماشین آلات از لیست</h2>
        <div className="submit-close">
          <button onClick={() => closeHandler()}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </button>
        </div>
      </div>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>عنوان</th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          {listMachineryType?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <Button btnType="success" clicked={() => showModal(item)}>
                    انتخاب
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {machineryByParentIdByPlantationId ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <MachineryByParentIdByPlantationId />
        </Modal>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({
  operationTypeTab: { loading, listMachineryTypeByParentId },
  modalType: { modalType: modalType },
  plantationState: { plantationId },
}) => ({
  loading,
  listMachineryTypeByParentId,
  modalType,
  plantationId,
});

export default connect(mapStateToProps, {
  getListMachineryByParentId,
  closeModal,
  getListMachineryTypeByParentId,
  setModalType,
  getlistMachineryByPlantationIdBYParentId,
})(SelectMachineryType);
