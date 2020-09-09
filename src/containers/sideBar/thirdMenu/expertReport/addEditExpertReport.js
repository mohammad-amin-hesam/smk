import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "../../../../components/ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { listTypeOperation } from "../../../../redux/actions";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Calender from "../../../../components/ui/datePicker/datePicker";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddEditExpertReport(props) {
  let { listExpertReport, typeOperation } = props;
  let listReports = listExpertReport ? listExpertReport.data : "";
  let { id } = useParams();
  const classes = useStyles();
  const [addEditExpertReport, setAddEditExpertReport] = useState({
    dateOperation: "",
    description: "",
  });
  let history = useHistory();
  const closeHandler = () => {
    history.push(`/`);
  };
  const addEditExpertReportHandler = (e) => {
    setAddEditExpertReport({
      ...addEditExpertReport,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    props.listTypeOperation();
  }, []);

  let reportId = listReports ? listReports.find((item) => item.id == id) : "";
  return (
    <div className="operation  add_edit_expert_report">
      <div className="form-title">
        <h2>افزودن/ویرایش گزارش عملیات</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <form>
        <div className="form_opertion">
          <div className="date_picker">
            <label>تاریخ عملیات</label>
            <Calender />
            {/* <input
              type="text"
              name="dateOperation"
              value={addEditExpertReport.dateOperation}
              onChange={addEditExpertReportHandler}
            /> */}
          </div>

          <div className="type_opertion">
            <label>نوع عملیات</label>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
              >
                {typeOperation?.map((select) => {
                  return (
                    <option key={select.id} value={select.title}>
                      {select.title}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="description">
          <label>توضیحات</label>
          <textarea
            name="description"
            value={id ? reportId.body : addEditExpertReport.description}
            onChange={addEditExpertReportHandler}
          />
        </div>
        <Button btnType="submit">ثبت</Button>
      </form>
    </div>
  );
}

const mapStateToProps = ({
  listExpertReport: { loading, listExpertReport, typeOperation },
}) => ({
  loading,
  listExpertReport,
  typeOperation,
});

export default connect(mapStateToProps, {
  listTypeOperation,
})(AddEditExpertReport);
