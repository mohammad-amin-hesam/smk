import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { listRawMaterialByPlantationPatternByPlantatinIdByPatternId } from "../../../../../redux/actions";

const RawMaterial = (props) => {
  let {
    patternId,
    plantationId,
    loading,
    changeItem,
    listRawMaterialByPlantainIdByPatternId,
  } = props;

  const listRawMaterial = listRawMaterialByPlantainIdByPatternId
    ? Object.values(listRawMaterialByPlantainIdByPatternId)
    : [];

  useEffect(() => {
    props.listRawMaterialByPlantationPatternByPlantatinIdByPatternId(
      plantationId,
      patternId
    );
  }, []);

  return (
    <div className="raw_material">
      <button className="success">بازگشت به مقدار اولیه</button>
      <button className="submit">ثبت</button>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ردیف</th>
            <th>عنوان </th>
            <th>
              <span>مقدار</span>
              <p className="thead">
                <span>مقدار</span>
                <span>نیازبه تایید</span>
                <span>مقدار هزینه</span>
                <span> اختلاف</span>
              </p>
            </th>
            <th>
              <span>هزینه</span>
              <p className="thead">
                <span>هزینه</span>
                <span>مقدارهزینه</span>
                <span>اختلاف</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {listRawMaterial?.map((item) => {
            return item.map((rawMaterial, index) => {
              return (
                <tr
                  style={{
                    backgroundColor:
                      rawMaterial.value > 0 ? "#ff847c" : "rgba(68,157,68,.5)",
                  }}
                >
                  <td>{index}</td>
                  <td>{rawMaterial.name}</td>
                  <td className="valu_content">
                    <input type="text" />
                    <input type="checkbox" />
                    <span>{rawMaterial.value}</span>
                  </td>
                  <td className="valu_content">
                    <input type="text" />
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  plantationState: { plantationId },
  pattern: {
    pattern: pattern,
    patternId,
    listRawMaterialByPlantainIdByPatternId,
  },
}) => ({
  plantationId,
  patternId,
  listRawMaterialByPlantainIdByPatternId,
});
export default connect(mapStateToProps, {
  listRawMaterialByPlantationPatternByPlantatinIdByPatternId,
})(RawMaterial);
