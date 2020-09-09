import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RefreshIcon from "@material-ui/icons/Refresh";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { DateRangePicker } from "react-advance-jalaali-datepicker";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "../../../components/ui/button/button";
import Calender2 from "../../../components/ui/datePicker/datePicker2";
import Spinner from "../../../components/ui/spinner/spinner";
import excel from "../../../assets/imges/excel.svg";
import {
  setModalType,
  closeModal,
  getOperationReport,
} from "../../../redux/actions";
import Modal from "../../../components/ui/modal/modal";
import AddHuman from "../../../containers/sideBar/thirdMenu/selectOption/newOperaion/addhuman";
import CriteriaSelect from "../../../containers/sideBar/thirdMenu/reportingDashboard/criteriaSelect";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 10,
  },
});

const OperationReport = (props) => {
  let {
    modalType,
    listOperationReport,
    criterias,
    loading,
    plantationId,
  } = props;
  const [showTable, setShowTable] = useState(false);
  let history = useHistory();
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  const handleModal = (name) => {
    props.setModalType(name);
  };

  const reportHandler = () => {
    setShowTable(true);
    let filter = {
      operation_plantation_id: [plantationId],
      ...criterias.reduce(
        (obj, item) => ({ ...obj, operation_type_id: item.selected }),
        {}
      ),
    };
    if (criterias.length > 0) {
      props.getOperationReport(filter);
    } else {
      props.getOperationReport();
    }
  };

  const gobackHandler = () => {
    history.goBack();
  };
  const change = (unix, formatted) => {};
  const DatePickerInput = (props) => {
    return <input className="popo" {...props} />;
  };
  return (
    <div className="operation operation_report ">
      <div className="form-title">
        <h2>گزارش عملیات</h2>
        <div className="submit-close">
          <button onClick={gobackHandler}>
            بازگشت
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <div className="operation_eader">
        <Button
          btnType="success"
          clicked={(e) => handleModal("operationHandler")}
        >
          نوع عملیات
        </Button>
        <Button btnType="success" clicked={(e) => handleModal("HumanHandler")}>
          نیروی انسانی
        </Button>
        <Button btnType="success" clicked={(e) => handleModal("machineryType")}>
          نوع ماشین آلات
        </Button>
        <Button btnType="success" clicked={(e) => handleModal("machinery")}>
          ماشین آلات
        </Button>
        <Button btnType="success" clicked={(e) => handleModal("rawMaterial")}>
          مواد اولیه
        </Button>
        <DateRangePicker
          placeholderStart="تاریخ شروع"
          placeholderEnd="تاریخ پایان"
          format="jYYYY/jMM/jDD"
          onChangeStart={change}
          idStart="rangePickerStart"
          idEnd="rangePickerEnd"
        />
      </div>
      <div className="excel_export">
        <a href="#" className="">
          <img src={excel} />
        </a>
        <Button btnType="success" clicked={reportHandler}>
          {" "}
          اجرای گزارش
          <RefreshIcon />
        </Button>
      </div>

      <div className="operation_list_result">
        <table>
          <thead>
            <tr>
              <th>ردیف</th>
              <th className="normal">نوع عملیات</th>
              <th className="normal">تاریخ</th>
              <th className="width">مسیر</th>
              <th className="width">توضیحات</th>
              <th className="width">مواد اولیه</th>
              <th className="width">نیروی انسانی</th>
              <th className="width">ماشین آلات</th>
              <th className="normal">مقدار</th>
              <th className="normal">هزینه مستقیم</th>
              <th className="width">عملیات</th>
            </tr>
          </thead>
          {loading ? (
            <div
              className={classes.root}
              style={{ position: "absolute", bottom: "0px" }}
            >
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={buffer}
              />
            </div>
          ) : (
            <tbody>
              {showTable &&
                listOperationReport.data?.map((operation, index) => {
                  return (
                    <tr key={operation.id}>
                      <td>{index + 1}</td>
                      <td>
                        {" "}
                        <span>{operation.operation_type.name}</span>{" "}
                      </td>
                      <td>{operation.operation_date}</td>
                      <td>
                        <span>
                          {operation.plantation.path.length
                            ? operation.plantation.path.map((path, index) => {
                                if (index > 0)
                                  return (
                                    <span>
                                      {" "}
                                      {path.depth ? `> ${path.name}` : ""}
                                    </span>
                                  );
                                return <span>{path.name}</span>;
                              })
                            : ""}
                        </span>
                      </td>
                      <td>{operation.description}</td>
                      <td>
                        {operation.storage?.map((rawMaterial) => {
                          return (
                            <p key={rawMaterial.raw_material.id}>
                              <span>{`${rawMaterial.raw_material.name}: `}</span>
                              <span>
                                {rawMaterial.value}
                                {rawMaterial.raw_material.unit}
                              </span>
                              <span> ({rawMaterial.total_price} تومان )</span>
                              <span>
                                تامین کننده : {rawMaterial.supplier.title}
                              </span>
                            </p>
                          );
                        })}
                      </td>
                      <td>
                        {operation.operation_human_resource.map((human) => {
                          return (
                            <p key={human.id}>
                              <span>{human.name}</span>,
                              <span>
                                {" "}
                                {human.amount} ساعت ({human.type})
                              </span>
                              ,<span> بخش {human.plantation.name}</span>
                            </p>
                          );
                        })}
                      </td>

                      <td>
                        {operation.operation_machineries?.map((item, index) => {
                          return (
                            <p key={index}>
                              <span>
                                {item.machinery.name}({item.machinery.type}),
                              </span>
                              <span> {item.amount} ساعت </span>,
                              <span> هزینه {item.price} تومان </span>,
                              <span>
                                {" "}
                                بخش {item.machinery.plantation?.name}{" "}
                              </span>
                            </p>
                          );
                        })}
                      </td>
                      <td>{operation.amount}</td>
                      <td>{operation.cost}</td>
                      <td>
                        <Button btnType="btn_info"> ویرایش</Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
      </div>
      {modalType === "HumanHandler" ? (
        <Modal>
          <AddHuman />
        </Modal>
      ) : (
        ""
      )}
      {modalType === "operationHandler" ? (
        <Modal>
          <CriteriaSelect alias={"operation_type"} title={"انواع عملیات"} />
        </Modal>
      ) : (
        ""
      )}
      {modalType === "machineryType" ? (
        <Modal>
          <CriteriaSelect alias={"machinery_types"} title=" نوع ماشین آلات" />
        </Modal>
      ) : (
        ""
      )}
      {modalType === "machinery" ? (
        <Modal>
          <CriteriaSelect alias={"machinery"} title=" ماشین آلات" />
        </Modal>
      ) : (
        ""
      )}
      {modalType === "rawMaterial" ? (
        <Modal>
          <CriteriaSelect alias={"raw_materials"} title=" مواد اولیه" />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({
  modalType: { modalType: modalType },
  operationReport: { listOperationReport, loading },
  dashboardOptions: { criterias },
  plantationState: { plantationId },
}) => ({
  modalType,
  listOperationReport,
  criterias,
  loading,
  plantationId,
});

export default connect(mapStateToProps, {
  closeModal,
  setModalType,
  getOperationReport,
})(OperationReport);
