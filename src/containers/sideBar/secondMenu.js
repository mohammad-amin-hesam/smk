import React, { useEffect, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Collapsing from "../../assets/imges/collapsing-white.svg";
import Companies from "./secondMenu/comapanies";
import Farms from "./secondMenu/farms";
import {
  listYears,
  setPatternPlanting,
  setPlantationDirection,
  setPlantationState,
} from "../../redux/actions";
import Field from "./secondMenu/fields";
import Section from "./secondMenu/sections";
import Piece from "./secondMenu/pieces";
import Plants from "./secondMenu/plants";
import Units from "./secondMenu/units";

function getSteps() {
  return [
    "انتخاب شرکت",
    "انتخاب کشت و صنعت",
    "انتخاب حوزه",
    "انتخاب بخش",
    "انتخاب واحد",
    "انتخاب قطعه",
    "انتخاب محصول",
  ];
}

let stepName = "";

const SecondMenu = (props) => {
  function getStepContent({
    step,
    companyId,
    farmId,
    farmSectionId,
    sectionId,
    specialityId,
    yearId,
    year,
    unitId,
    pieceId,
    plantId,
  }) {
    typeof step == "string" && (step = step * 1);
    switch (step) {
      case 0: {
        stepName = { name: "company", id: 0 };
        return (
          <Route>
            <Companies />
          </Route>
        );
      }
      case 1: {
        stepName = { name: "farm", id: companyId };
        return (
          <Route>
            <Farms companyId={companyId} />
          </Route>
        );
      }
      case 2: {
        stepName = { name: "field", id: farmId };
        return (
          <Route>
            <Field farmId={farmId} />
          </Route>
        );
      }
      case 3: {
        stepName = { name: "section", id: specialityId };
        return (
          <Route>
            <Section farmId={farmId} fieldId={specialityId} />
          </Route>
        );
      }
      case 4: {
        stepName = { name: "unit", id: sectionId };
        return (
          <Route>
            <Units sectionId={sectionId} yearId={year} />
          </Route>
        );
      }
      case 5: {
        stepName = { name: "piece", id: unitId };
        return (
          <Route>
            <Piece yearId={year} unitId={unitId} />
          </Route>
        );
      }
      case 6: {
        stepName = { name: "plant", id: pieceId };
        return (
          <Route>
            <Plants yearId={year} pieceId={pieceId} />
          </Route>
        );
      }
      case 7: {
        props.setPlantationState("plant", plantId, yearId);
        return (
          <Route>
            <Plants yearId={year} pieceId={pieceId} />
          </Route>
        );
      }
      default: {
        stepName = "company";
        return "Unknown step";
      }
    }
  }

  let {
    data: {
      step,
      companyId,
      farmId,
      farmSectionId,
      sectionId,
      specialityId,
      unitId,
      yearId,
      pieceId,
      plantId,
      years,
    },
  } = props;
  let { path, url } = useRouteMatch();
  const [activeStep, setActiveStep] = useState(Number(step) - 1 || 0);
  const [year, setYear] = useState(5);
  let history = useHistory();

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(0, newList.length);
    newList.push(props.companies[companyId]);
    props.setPlantationDirection(newList);
  }, [companyId]);

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(1, newList.length - 1);
    newList.push(props.farms[farmId]);
    props.setPlantationDirection(newList);
  }, [farmId]);

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(2, newList.length - 2);
    newList.push(props.fields[specialityId]);
    props.setPlantationDirection(newList);
  }, [specialityId]);

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(3, newList.length - 3);
    newList.push(props.sections[sectionId]);
    props.setPlantationDirection(newList);
  }, [sectionId]);

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(4, newList.length - 4);
    newList.push(props.units[unitId]);
    props.setPlantationDirection(newList);
  }, [unitId]);

  useEffect(() => {
    let newList = [...props.plantationDirection];
    newList.splice(5, newList.length - 5);
    newList.push(props.pieces[pieceId]);
    props.setPlantationDirection(newList);
  }, [pieceId]);

  useEffect(() => {
    props.setPlantationState("plant", plantId, yearId);
    let newList = [...props.plantationDirection];
    newList.splice(6, newList.length - 6);
    newList.push(props.plants[props.plantPatternId]);
    props.setPlantationDirection(newList);
  }, [plantId, props.plantPatternId]);

  useEffect(() => {
    setActiveStep(Number(step) - 1 || 0);
    // if(stepName.name) {
    props.setPlantationState(stepName.name, stepName.id, year);
    // }
  }, [
    step,
    companyId,
    farmId,
    farmSectionId,
    sectionId,
    unitId,
    yearId,
    year,
    pieceId,
    activeStep,
  ]);

  useEffect(() => {
    props.listYears();
  }, []);

  const steps = getSteps();

  const [state, setState] = useState({
    year: "",
    name: "hai",
  });

  const handleYearChange = ({ target }) => {
    let { value } = target;
    setYear(value);
  };
  const handleBack = () => {
    if (activeStep == 0) return;
    let url = "";
    const q = new URLSearchParams(history.location.search);
    const specialityId = q.get("specialityId") || q.get("speciality_id");
    let step = q.get("step") || 1;
    switch (step) {
      case 1:
        url = "/";
        break;
      case 2:
        url = `/step=${step}&`;
        break;
      case 3:
        url = "/";
        break;
    }
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleStep = (step) => () => {
    // history.push(`/map`)
    // setActiveStep(step)
  };

  const onCollapse = (e) => {
    e.preventDefault();
  };
  return (
    <div className="second_menu">
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepButton onClick={handleStep(index)}>
              <span className="label_step">
                {" "}
                {index == activeStep && label}
              </span>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <div className="crop_year">
          <span> سال زارعی :</span>
          <FormControl variant="outlined">
            <InputLabel htmlFor="age-native-simple"></InputLabel>
            <Select
              native
              //  defaultValue={y.default == 1}
              onChange={handleYearChange}
              className="selected_year"
              inputProps={{
                name: "year",
                id: "outlined-age-native-simple",
              }}
            >
              {props?.loading ? (
                <option>...</option>
              ) : (
                props?.years?.map((y) => (
                  <option
                    key={y.id}
                    selected={y.default == 1}
                    //  defaultValue={y.id}
                    value={y.id}
                  >{`${y.from}-${y.to}`}</option>
                ))
              )}
            </Select>
          </FormControl>
        </div>
        <hr />

        <div>
          <Typography>
            {getStepContent({
              step: `${activeStep}` || step,
              companyId,
              farmId,
              farmSectionId,
              specialityId,
              sectionId,
              unitId,
              yearId,
              year,
              pieceId,
              plantId,
            })}
          </Typography>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className="button previous"
            >
              بازگشت
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <img src={Collapsing} alt="collapsing" onClick={onCollapse} />
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    years: state.years.years,
    loading: state.years.loading,
    companies: state.company.companies,
    farms: state.farms.farms,
    fields: state.fields.fields,
    sections: state.section.section,
    units: state.units.units,
    pieces: state.pieces.pieces,
    plants: state.plants.plants,
    plantationDirection: state.plantationState.plantationDirection,
    plantPatternId: state.plantationState.patternPlanting,
  };
};

export default connect(mapStateToProps, {
  listYears,
  setPlantationState,
  setPlantationDirection,
  setPatternPlanting,
})(SecondMenu);
