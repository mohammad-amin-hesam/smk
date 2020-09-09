import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

import { getOperationByPlantationIdByOperationType } from "../../../../../redux/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const OperatinTypesSprout = (props) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  let {
    plantationId,
    id,
    listOperationTypeByPlantationIdByOperationTypeId,
  } = props;

  listOperationTypeByPlantationIdByOperationTypeId = listOperationTypeByPlantationIdByOperationTypeId
    ? Object.values(listOperationTypeByPlantationIdByOperationTypeId)
    : [];

  useEffect(() => {
    props.getOperationByPlantationIdByOperationType(plantationId, id);
  });

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value} onChange={(e) => setValue(e.target.value)}>
          {listOperationTypeByPlantationIdByOperationTypeId.map(
            (select, index) => {
              return (
                <option key={index} value={select.subject}>
                  {select.name}
                </option>
              );
            }
          )}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = ({
  plantationState: { plantationId, plantationState },
  operationTypeTab: { listOperationTypeByPlantationIdByOperationTypeId },
}) => ({
  plantationId,
  listOperationTypeByPlantationIdByOperationTypeId,
});

export default connect(mapStateToProps, {
  getOperationByPlantationIdByOperationType,
})(OperatinTypesSprout);
