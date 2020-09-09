import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { listExpertByYearIdAndPlantationId } from "../../../../redux/actions";
import Spinner from "../../../../components/ui/spinner/spinner";
import Button from "../../../../components/ui/button/button";

const ExpertReport = (props) => {
  let { listExpertReport, loading, plantationId, yearId } = props;
  let listReports = listExpertReport ? listExpertReport.data : "";
  let history = useHistory();
  const closeHandler = () => {
    history.push(`/`);
  };
  useEffect(() => {
    props.listExpertByYearIdAndPlantationId(yearId, plantationId);
  }, []);

  const editExpertHandler = (item) => {
    history.push(`/addEditExpertReport/${item.id}`);
  };

  const addExpertReport = () => {
    history.push("/addEditExpertReport");
  };

  return (
    <div className="operation human_report">
      <div className="form-title">
        <h2>گزارش کارشناسی</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <Button btnType="success" clicked={addExpertReport}>
        افزودن گزارش عملیات
      </Button>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ردیف</th>
              <th> نوع </th>
              <th>مسیر </th>
              <th>تاریخ</th>
              <th>گزارش </th>
              <th>تاریخ ثبت </th>
              <th>عملیات </th>
            </tr>
          </thead>
          <tbody>
            {listReports?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.type ? item.type.title : ""}</td>
                  <td>--</td>
                  <td>{item.story_date}</td>
                  <td>{item.body}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <Button
                      btnType="submit"
                      clicked={() => editExpertHandler(item)}
                    >
                      ویرایش
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = ({
  listExpertReport: { loading, listExpertReport },
  plantationState: { plantationId, yearId },
}) => ({
  loading,
  listExpertReport,
  plantationId,
  yearId,
});

export default connect(mapStateToProps, {
  listExpertByYearIdAndPlantationId,
})(ExpertReport);
