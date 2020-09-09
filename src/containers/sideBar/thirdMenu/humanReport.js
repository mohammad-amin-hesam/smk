import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { listHumanByYearIdAndPlantationId } from "../../../redux/actions";
import Spinner from "../../../components/ui/spinner/spinner";
import Button from "../../../components/ui/button/button";

const HumanReport = (props) => {
  let { listHumanReport, loading, plantationId, yearId } = props;
  const [search, setSearch] = useState("");
  const [filterHumanReport, setFilterHumanReport] = useState("");
  listHumanReport = listHumanReport ? Object.values(listHumanReport) : "";
  let history = useHistory();
  const closeHandler = () => {
    history.push(`/`);
  };
  useEffect(() => {
    props.listHumanByYearIdAndPlantationId(yearId, plantationId);
  }, []);

  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase();
    const itemData = listHumanReport.filter((item) => {
      const searchValue = item.name.toUpperCase();
      if (searchValue.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterHumanReport(itemData);
    setSearch(e.target.value);
  };
  return (
    <div className="operation  human_report ">
      <div className="form-title">
        <h2>انتخاب نیروی انسانی از روی لیست</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <input type="text" placeholder="جستجو" onChange={searchFilterHandler} />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>نام</th>
            <th> تلفن تماس </th>
            <th>سمت </th>
            <th>تحصیلات</th>
            <th>گرایش </th>
            <th>نوع فعالیت </th>
            <th>نوع استخدام </th>
            <th>مسیر </th>
          </tr>
        </thead>
        <tbody>
          {search ? (
            <HumanReportRows data={filterHumanReport} />
          ) : loading ? (
            <Spinner />
          ) : (
            <HumanReportRows data={listHumanReport} />
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  listHumanReport: { loading, listHumanReport },
  plantationState: { plantationId, yearId },
}) => ({
  loading,
  listHumanReport,
  plantationId,
  yearId,
});

export default connect(mapStateToProps, {
  listHumanByYearIdAndPlantationId,
})(HumanReport);

const HumanReportRows = ({ data }) =>
  data?.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.cellphone}</td>
      <td>{item.type.title}</td>
      <td>{item.education}</td>
      <td>{item.tendency}</td>
      <td>{item.activity_type}</td>
      <td>{item.employment_type}</td>
      <td>
        {item.plantation.path.map((el) => {
          return (
            <td>
              <span>{el.depth.title}</span>:<span>{el.name}</span>
            </td>
          );
        })}
      </td>
    </tr>
  ));
