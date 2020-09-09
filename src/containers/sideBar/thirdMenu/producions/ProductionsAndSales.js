import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ListProductsByPlantingYearIdAndPlantaionId } from "../../../../redux/actions";
import Spinner from "../../../../components/ui/spinner/spinner";
import Button from "../../../../components/ui/button/button";

const ProductionAndSales = (props) => {
  let { plantationId, yearId, products, loading } = props;
  let history = useHistory();

  products = products ? Object.values(products) : [];

  useEffect(() => {
    props.ListProductsByPlantingYearIdAndPlantaionId(yearId, plantationId);
  }, []);
  const closeHandler = () => {
    history.push(`/`);
  };

  const salesDetailsHandler = () => {
    history.push("/salesDetails");
  };

  const plantCultivarHandler = (product) => {
    history.push(`/plantCultivar/${product.crop_id}`);
  };

  return (
    <div className="operation">
      <div className="form-title">
        <h2>تولید و فروش</h2>
        <div className="submit-close">
          <button onClick={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
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
            {products?.map((product, index) => {
              return (
                <tr key={product.crop_id}>
                  <td>{product.crop_id}</td>
                  <td>{product.crop_name}</td>
                  <td>{product.sum_amount}</td>
                  <td>{product.sum_area}</td>
                  <td>
                    <Button
                      btnType="black"
                      clicked={() => plantCultivarHandler(product)}
                    >
                      رقم گیاه
                    </Button>
                    <Button btnType="submit" clicked={salesDetailsHandler}>
                      جزئیات فروش
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
})(ProductionAndSales);
