import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ListCustomers } from "../../../../redux/actions";
import Spinner from "../../../../components/ui/spinner/spinner";
import Button from "../../../../components/ui/button/button";

const Customers = (props) => {
  let { customers, loading } = props;
  let { path, url } = useRouteMatch();
  let history = useHistory();
  customers = customers ? Object.values(customers) : "";

  useEffect(() => {
    props.ListCustomers();
  }, []);

  const addCustomersHandler = () => {
    history.push(`${path}/addEditCustomer`);
  };

  const editCustomerHandler = (item) => {
    history.push(`${path}/addEditCustomer/${item.id}`);
  };

  const closeHandler = () => {
    // history.push(`/`)
    history.goBack();
  };
  return (
    <div className="customers operation">
      <div className="form-title">
        <span>مشتریان</span>
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
              <th>آدرس </th>
              <th>تلفن تماس</th>
              <th> توضیحات </th>
              <th>عملیات </th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer, index) => {
              return (
                <tr key={customer.id}>
                  <td>{index + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone_number}</td>
                  <td>{customer.description}</td>
                  <td>
                    <Button
                      btnType="submit"
                      clicked={() => editCustomerHandler(customer)}
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
      <Button btnType="success" clicked={addCustomersHandler}>
        افزودن مشتری
      </Button>
    </div>
  );
};

const mapStateToProps = ({ customers: { loading, customers } }) => ({
  loading,
  customers,
});

export default connect(mapStateToProps, {
  ListCustomers,
})(Customers);
