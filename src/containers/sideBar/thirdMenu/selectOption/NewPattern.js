import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../../components/ui/button/button";
import { closeModal, newPattern } from "../../../../redux/actions";

const AddNewPattern = (props) => {
  let { yearId } = props;
  const [pattern, setPattern] = useState({
    title: "",
    discription: "",
  });

  let history = useHistory();

  const closeNewPattern = () => {
    history.goBack();
  };

  const setPatternState = (e) => {
    setPattern({
      ...pattern,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    props.newPattern(pattern.title, 2, yearId, pattern.discription);
    toast.success("عملیات باموفقیت انجام شد", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
    });
  };
  return (
    <div className="operation  new_pattern">
      <div className="form-title">
        <span>افزودن/ویرایش الگوی کاشت</span>
        <div className="submit-close">
          <button onClick={closeNewPattern}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="title_form">
          <label>عنوان</label>
          <input
            type="text"
            name="title"
            value={pattern.title}
            onChange={setPatternState}
          />
        </div>
        <div className="discription">
          <label style={{ display: "block" }}>توضیحات</label>
          <textarea
            value={pattern.discription}
            name="discription"
            onChange={setPatternState}
          />
        </div>

        <Button btnType="submit">ثبت</Button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ plantationState: { yearId } }) => ({
  yearId,
});

export default connect(mapStateToProps, {
  closeModal,
  newPattern,
})(AddNewPattern);
