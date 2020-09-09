import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { listmacheneryByPlantaionId } from "../../../redux/actions";
import Spinner from "../../../components/ui/spinner/spinner";
import Button from "../../../components/ui/button/button";

const MachineryReport = (props) => {
  let { machinery, loading, plantationId } = props;
  const [search, setSearch] = useState("");
  const [filterMachinery, setFilterMachinery] = useState("");
  let history = useHistory();
  machinery = machinery ? Object.values(machinery) : "";
  const closeHandler = () => {
    history.push(`/`);
  };

  useEffect(() => {
    props.listmacheneryByPlantaionId(plantationId);
  }, []);

  const searchFilterHandler = (e) => {
    const textSeach = e.target.value.toUpperCase();
    const itemData = machinery.filter((item) => {
      const searchValue = item.name.toUpperCase();
      if (searchValue.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterMachinery(itemData);
    setSearch(e.target.value);
  };

  return (
    <div className="operation  machinery_report">
      <div className="form-title">
        <h2>انتخاب ماشین آلات از لیست</h2>
        <div className="submit-close">
          <Button clicked={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
      <input
        type="text"
        value={search}
        onChange={searchFilterHandler}
        placeholder="جستجو"
      />

      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>عنوان</th>
              <th> مالک </th>
              <th>نوع </th>
              <th>توضیحات</th>
              <th> وضعیت کنونی </th>
              <th>اسب بخار </th>
              <th>مسیر </th>
            </tr>
          </thead>
          <tbody>
            {machinery?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.ownership}</td>
                  <td>{item.type.title}</td>
                  <td>{item.description}</td>
                  <td>{item.current_status}</td>
                  <td>{item.horsepower}</td>
                  <td>
                    {item.plantation.path.map((el) => {
                      return (
                        <td>
                          {el.depth.title}:{el.name}
                        </td>
                      );
                    })}
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
  machinery: { loading, machinery },
  plantationState: { plantationId },
}) => ({
  loading,
  machinery,
  plantationId,
});

export default connect(mapStateToProps, {
  listmacheneryByPlantaionId,
})(MachineryReport);
