import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../../../components/ui/button/button";
import {
  closeModal,
  addCustomer,
  editCustomer,
  ListCustomers,
} from "../../../../redux/actions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const AddSales = (props) => {
  let { customers, loading } = props;

  useEffect(() => {
    props.ListCustomers();
  }, []);

  let history = useHistory();
  const [addSales, setAddSales] = useState({
    salesAmount: "",
    customer: "",
    pricePerKilo: "",
    discription: "",
  });

  const closeNewPattern = () => {
    props.closeModal();
    history.push("/customers");
  };

  const setAddSalesHandler = (e) => {
    setAddSales({
      ...addSales,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    // props.addCustomer(addEditCustomer)
  };
  return (
    <div className="add_edit_customers operation">
      <div className="form-title">
        <h2>افزودن فروش</h2>
        <div className="submit-close">
          <button onClick={closeNewPattern}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <form onSubmit={submit}>
        <label>مقدار فروش</label>

        <input
          type="text"
          value={addSales.salesAmount}
          name="salesAmount"
          required
          onChange={setAddSalesHandler}
        />
        <label>انتخاب مشتری</label>
        <input
          type="text"
          value={addSales.customer}
          name="customer"
          onChange={setAddSalesHandler}
        />
        <label>قیمت هر کیلو</label>
        <input
          type="text"
          name="pricePerKilo"
          value={addSales.pricePerKilo}
          onChange={setAddSalesHandler}
        />
        <div className="discription">
          <label>توضیحات</label>
          <textarea
            name="discription"
            value={addSales.discription}
            onChange={setAddSalesHandler}
          />
        </div>
        <Button btnType="submit">ثبت</Button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ customers: { loading, customers } }) => ({
  loading,
  customers,
});

export default connect(mapStateToProps, {
  closeModal,
  addCustomer,
  editCustomer,
  ListCustomers,
})(AddSales);
