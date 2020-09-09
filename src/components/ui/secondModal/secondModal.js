import React from "react";

import BackDrop from "../backdrop/backdrop";
import "./secondModal.css";

const SecondModal = (props) => {
  return (
    <div>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className="ErrorModal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <img
          className="close"
          src={require("../../../assets/imges/close.svg")}
          onClick={props.modalClosed}
        />
        {props.children}
      </div>
    </div>
  );
};

export default React.memo(
  SecondModal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
