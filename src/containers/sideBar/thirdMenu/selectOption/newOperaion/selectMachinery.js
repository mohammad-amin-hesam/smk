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
import SelectMachineryType from "./selectMachineryType";
import Modal from "../../../../../components/ui/modal/modal";
import SecondModal from "../../../../../components/ui/secondModal/secondModal";
import Tractor from "./tractor";

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

const SelectMachinery = (props) => {
  let {
    loading,
    listMachineryByParentId,
    modalType,
    plantationId,
    listMachineryByplantationIdByParentId,
  } = props;
  const [modalMachineryType, setModalMachineryType] = useState(false);
  const [hasChild, setHasChild] = useState(false);

  listMachineryByParentId = listMachineryByParentId
    ? Object.values(listMachineryByParentId)
    : [];
  const classes = useStyles();

  const closeHandler = () => {
    props.closeModal();
  };

  useEffect(() => {
    props.getListMachineryByParentId();
  }, []);

  const showModalSelectType = (item) => {
    if (item.has_child) {
      props.getListMachineryTypeByParentId(item.id);
      setHasChild(true);
    } else {
      props.getlistMachineryByPlantationIdBYParentId(plantationId, item.id);
      setHasChild(false);
    }
    setModalMachineryType(true);
  };

  const closeMachineryTypeHandler = () => {
    setModalMachineryType(false);
  };
  return (
    <div className="select_raw_materials">
      <div className="form-title">
        <h2>انتخاب ماشین آلات از لیست</h2>
        <div className="submit-close">
          <Button clicked={() => closeHandler()}>
            ثبت و بازگشت به فرم
            <ArrowBackIcon />
          </Button>
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
          {listMachineryByParentId[0]?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <Button
                    btnType="success"
                    clicked={() => showModalSelectType(item)}
                  >
                    انتخاب
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modalMachineryType && hasChild ? (
        <SecondModal
          show={modalMachineryType}
          modalClosed={closeMachineryTypeHandler}
        >
          <SelectMachineryType />
        </SecondModal>
      ) : (
        ""
      )}

      {!hasChild ? (
        <SecondModal
          show={modalMachineryType}
          modalClosed={closeMachineryTypeHandler}
        >
          <Tractor />
        </SecondModal>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({
  operationTypeTab: {
    loading,
    listMachineryByParentId,
    listMachineryByplantationIdByParentId,
  },
  modalType: { modalType: modalType },
  plantationState: { plantationId },
}) => ({
  loading,
  listMachineryByParentId,
  modalType,
  plantationId,
  listMachineryByplantationIdByParentId,
});

export default connect(mapStateToProps, {
  getListMachineryByParentId,
  closeModal,
  getListMachineryTypeByParentId,
  setModalType,
  getlistMachineryByPlantationIdBYParentId,
})(SelectMachinery);
