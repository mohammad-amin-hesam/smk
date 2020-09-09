import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import {
  setPlantationState,
  closeModal,
  setModalType,
} from "../../../../redux/actions";
import selectOption from "../../../../json/selectOption.json";
import Modal from "../../../../components/ui/modal/modal";
import NewOperation from "./newOperaion/newOperation";
import AddNewPattern from "./NewPattern";
import SoilTestRecording from "./SoilTestRecording";
import RecordingWateringOperations from "./RecordingWateringOperations";
import CopyCrops from "./CopyCrops";
import AddCrops from "./AddCrops";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectOption = (props) => {
  let { plantationState, modalType } = props;
  const [value, setValue] = useState("");
  let history = useHistory();
  let location = useLocation();
  const [optionComponent, setOptionComponent] = useState("");
  const classes = useStyles();

  // create component in modal on Click option
  const handleChange = () => {
    switch (value) {
      case "NewOperation":
        setOptionComponent(<NewOperation />);
        break;
      case "NewPattern":
        setOptionComponent(<AddNewPattern />);
        break;
      case "RecordingWateringOperations":
        setOptionComponent(<RecordingWateringOperations />);
        break;
      case "SoilTestRecording":
        setOptionComponent(<SoilTestRecording />);
        break;
      case "AddCrops":
        setOptionComponent(<AddCrops />);
        break;
      case "CopyCrops":
        setOptionComponent(<CopyCrops />);
        break;
      default:
        break;
    }
    props.setModalType("selectOptionMy");
  };

  const handleChangeOption = (value) => {
    history.push(`/${value}/${location.search}`);
  };

  const q = new URLSearchParams(history.location.search);
  const specialityId = q.get("specialityId") || q.get("speciality_id");
  let step = q.get("step") || 0;

  return (
    <div className="select_option">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={value}
          onClick={handleChange}
          onChange={(e) => handleChangeOption(e.target.value)}
        >
          <option>انتخاب عملیات</option>
          {selectOption.map((select, index) => {
            return (
              <option
                key={index}
                value={
                  select.special
                    ? specialityId == 7
                      ? select.add
                        ? "addfish"
                        : "copyfish"
                      : select.add
                      ? "addcrops"
                      : "copycrops"
                    : select.subject
                }
                disabled={!select.activeIn.some((s) => s == step)}
              >
                {select.special
                  ? specialityId == 7
                    ? select.name.replace("{a}", "ماهی ")
                    : select.name.replace("{a}", "محصول")
                  : select.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = ({
  plantationState: { plantationId, plantationState },
  modalType: { modalType: modalType },
}) => ({
  plantationId,
  plantationState,
  modalType,
});

export default connect(mapStateToProps, {
  setPlantationState,
  closeModal,
  setModalType,
})(SelectOption);
