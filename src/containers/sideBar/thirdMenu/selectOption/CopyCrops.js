import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../../../../components/ui/button/button";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { useHistory } from "react-router-dom";
import { listYears, postCopyCrops } from "../../../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "200px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CopyCrops = (props) => {
  let { years, plantationId, yearId } = props;
  const classes = useStyles();
  const [yearTo, setYearTo] = useState(5);
  let history = useHistory();
  const handleYearChange = (event) => {
    // let { value } = target
    setYearTo(event.target.value);
  };

  const submitCloseHandler = () => {
    history.goBack();
  };

  const copyCropsHandler = () => {
    props.postCopyCrops(plantationId, yearTo, yearId);
    if (yearId === yearTo) {
      toast.error("سال زراعی جاری و مقصد می بایست متفاوت باشند", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="operation  copy_crops">
      <div className="form_title">
        <h2>کپی محصول</h2>
        <CloseIcon onClick={submitCloseHandler} />
      </div>
      <div className="crop_year">
        <label> سال زراعی مقصد :</label>
        <FormControl variant="outlined" className={classes.formControl}>
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

      <Button btnType="success" clicked={copyCropsHandler}>
        ثبت
      </Button>
    </div>
  );
};

const mapStateToProps = ({
  plantationState: { plantationId, yearId },
  years: { years },
}) => ({
  plantationId,
  yearId,
  years,
});

export default connect(mapStateToProps, {
  listYears,
  postCopyCrops,
})(CopyCrops);
