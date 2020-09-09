import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../../../components/ui/button/button";
import {
  closeModal,
  addCustomer,
  editCustomer,
  ListCustomers,
} from "../../../../redux/actions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const AddEditCustomer = (props) => {
  let { customers } = props;
  customers = customers ? Object.values(customers) : "";
  let history = useHistory();
  let { id } = useParams();
  const [addEditCustomer, setAddEditCustomer] = useState({
    name: "",
    address: "",
    phone_number: "",
    description: "",
  });
  const backHandler = () => {
    props.closeModal();
    history.push("/customers");
  };

  let customerIdfind = customers.find((customer) => customer.id == id);

  const setCustomerProfile = (e) => {
    setAddEditCustomer({
      ...addEditCustomer,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (id) {
      props.editCustomer(id, customerIdfind);
    } else {
      props.addCustomer(addEditCustomer);
      history.push("/customers");
    }
  };
  return (
    <div className="add_edit_customers operation">
      <div className="form-title">
        <span>افزودن/ویرایش مشتری</span>
        <div className="submit-close">
          <button onClick={backHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <form onSubmit={submit}>
        <label>نام</label>
        <input
          type="text"
          defaultValue={id ? customerIdfind.name : addEditCustomer.name}
          name="name"
          required
          onChange={setCustomerProfile}
        />
        <label>آدرس</label>
        <input
          type="text"
          defaultValue={id ? customerIdfind.address : addEditCustomer.address}
          name="address"
          onChange={setCustomerProfile}
          className="address"
        />
        <label>تلفن تماس</label>
        <input
          type="text"
          name="phone_number"
          defaultValue={
            id ? customerIdfind.phone_number : addEditCustomer.phone_number
          }
          onChange={setCustomerProfile}
          pattern="(09)[0-9]{9}"
        />
        <div className="description">
          <label>توضیحات</label>
          <textarea
            name="description"
            defaultValue={
              id ? customerIdfind.description : addEditCustomer.description
            }
            onChange={setCustomerProfile}
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
})(AddEditCustomer);
