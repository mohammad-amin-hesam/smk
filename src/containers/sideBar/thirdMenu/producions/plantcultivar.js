import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ListProductsByPlantingYearIdAndPlantaionId } from "../../../../redux/actions";
import Spinner from "../../../../components/ui/spinner/spinner";
import Button from "../../../../components/ui/button/button";

const PlantCultivar = (props) => {
  let { plantationId, yearId, products, loading } = props;
  const [HiddenCultivar, setHiddenCultivar] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  products = products ? Object.values(products) : [];

  let productIdfind = products.find((product) => product.crop_id == id);

  let productIdvarieties = productIdfind.varieties;

  productIdvarieties = productIdvarieties
    ? Object.values(productIdvarieties)
    : [];

  useEffect(() => {
    props.ListProductsByPlantingYearIdAndPlantaionId(yearId, plantationId);
  }, []);

  const varieties = products.map((product) => {
    return Object.values(product.varieties);
  });

  const closeHandler = () => {
    history.push(`/productions`);
  };
  const salesDetailsHandler = () => {
    history.push("/salesDetails");
  };

  const HiddenCultivarHandler = () => {
    setHiddenCultivar(false);
  };

  const selesAddHandler = () => {
    history.push("/salesAdd");
  };

  return (
    <div className="operation  plant_cultivar">
      <div className="form-title">
        <h2>تولید وفروش</h2>
        <div className="submit-close">
          <button onClick={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ردیف</th>
            <th> نام </th>
            <th>تولید </th>
            <th>مجموع مساحت</th>
            <th>عملیات </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productIdfind.crop_id}</td>
            <td>{productIdfind.crop_name}</td>
            <td>{productIdfind.sum_amount}</td>
            <td>{productIdfind.sum_area}</td>
            <td>
              <Button btnType="black" clicked={HiddenCultivarHandler}>
                پنهان کردن رقم گیاه
              </Button>
              <Button btnType="submit" clicked={salesDetailsHandler}>
                جزئیات فروش
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>رقم گیاه</th>
              <th> تولید </th>
              <th>مجموع مساحت</th>
              <th>مجموع فروش </th>
              <th>عملیات </th>
            </tr>
          </thead>
          <tbody>
            {productIdvarieties?.map((variet, index) => {
              return (
                <tr key={variet.id}>
                  <td>{variet.name}</td>
                  <td></td>
                  <td>{variet.area_total}</td>
                  <td>{variet.sales_total}</td>
                  <td>
                    <Button btnType="submit">جزییات تولید</Button>
                    <Button btnType="success" clicked={selesAddHandler}>
                      افزودن فروش
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
  plantationState: { plantationId, plantationState, yearId },
  products: { products: products, loading },
}) => ({
  plantationId,
  plantationState,
  yearId,
  products,
  loading,
});
export default connect(mapStateToProps, {
  ListProductsByPlantingYearIdAndPlantaionId,
})(PlantCultivar);
