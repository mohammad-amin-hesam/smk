import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import {
  setPlantationState,
  listPatterns,
  listPatternsByPlantingYearId,
  setPatternId,
} from "../../../../redux/actions";

const CropPatternManagement = (props) => {
  let history = useHistory();
  let { pattern, yearId } = props;
  pattern = pattern ? Object.values(pattern) : [];
  useEffect(() => {
    props.listPatternsByPlantingYearId(yearId);
  }, []);

  return (
    <div className="operation pattern_managment" style={{ zIndex: 99999999 }}>
      <CloseIcon onClick={props.close} color="secondary" />
      <ul>
        {pattern.map((item) => {
          return (
            <li onClick={() => props.setPatternId(item.id)} key={item.id}>
              <Link
                to={`/cropPatternManagement/${item.title}/${history.location.search}`}
              >
                {item.title}({item.type})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({
  plantationState: { plantationId, plantationState, yearId },
  pattern: { pattern: pattern, listPatterns },
}) => ({
  plantationId,
  plantationState,
  pattern,
  yearId,
  listPatterns,
});

export default connect(mapStateToProps, {
  setPlantationState,
  listPatterns,
  listPatternsByPlantingYearId,
  setPatternId,
})(CropPatternManagement);
