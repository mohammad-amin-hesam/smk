import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { connect } from "react-redux";
import {
  closeModal,
  setModalType,
  incrementId,
  removeItemMachinery,
  incrementTId,
  incrementIdFw,
  decrementIdFw,
  removeItemFinancialWareHouse,
} from "../../../../../redux/actions";
import Calender from "../../../../../components/ui/datePicker/datePicker";
import Calender2 from "../../../../../components/ui/datePicker/datePicker2";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import SelectHumanResource from "./selectHumanResource";
import SelectTypeOperaion from "./selectTypOperation";
import AddRawMaterials from "./addRawMaterials";
import AddUsedMachinery from "./addUsedMachinery";
import FurtherDetails from "./furtherDetails";
import AddHuman from "./addhuman";
import Modal from "../../../../../components/ui/modal/modal";
import Button from "../../../../../components/ui/button/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper
  },
}));

const NewOperation = (props) => {
  let { modalType, id, tId, iFw, selectedItem, selectedItemTractor } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [tabsMachinery, setTabsMachinery] = useState([]);
  const [fillItems, setFillItems] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let { path, url } = useRouteMatch();
  const [showFormValue, setShowFormValue] = useState(false);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const closeNewOperaion = () => {
    history.goBack();
  };

  const handleChangePanle = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const addHumanResource = () => {
  //   history.push(`/addHumanResource/${location.search}`)
  // }

  const addHumanResource = () => {
    props.setModalType("addHumanResource");
    setShowFormValue(true);
  };

  const handlerComponent = () => {
    props.incrementIdFw();
    tabs.length === 0 ? setTabs([1]) : setTabs((prev) => [...prev, prev + 1]);
    props.incrementIdFw();
  };

  const reverseArray = (arr) => {
    if (arr.length === 0) {
      return [];
    }
    return [arr.pop()].concat(reverseArray(arr));
  };

  // const removeTab = (index) => {
  //    props.decrementIdFw()
  //   let arr = tabs.filter((tab, i) => index != i)
  //   setTabs(arr)
  // }
  const handlerAddMachinery = () => {
    let arr = tabs;
    let value = null;
    let valTr = null;

    if (selectedItem[id - 1]) {
      value = selectedItem[id - 1];
    } else if (selectedItemTractor[tId]) {
      valTr = selectedItemTractor[tId];
    }

    if (selectedItem.length == 0 && value !== null) {
      setTabsMachinery((prev) => [...prev, <AddUsedMachinery id={id} />]);
      props.incrementId();
      return;
    } else if (selectedItemTractor.length == 0 && valTr !== null) {
      setTabsMachinery((prev) => [...prev, <AddUsedMachinery id={id} />]);
      props.incrementTId();
      return;
    }

    if (id > 0 && value === null && valTr == null) {
      toast.error("لطفا فیلد ماشین آلات را پر کنید", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setTabsMachinery((prev) => [...prev, <AddUsedMachinery id={id} />]);
      props.incrementId();
    }
  };
  return (
    <div className="operation new_operation">
      <div className="form-title">
        <span>عملیات جدید</span>
        <div className="submit-close">
          <button onClick={closeNewOperaion}>
            بازگشت
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="عملیات جدید" {...a11yProps(0)} />
          <Tab label="+" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChangePanle("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              تاریح انجام عملیات
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* <Calender /> */}
              <Calender2 />
              <span>انتخاب از روی تقویم</span>
              <DateRangeIcon />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded="false">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              انتخاب نوع عملیات
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SelectTypeOperaion />
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded="false">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              انتخاب نیروی انسانی
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {showFormValue ? <SelectHumanResource /> : ""}
            <Typography>
              <Fab size="small" className="dd_new" aria-label="add">
                <AddIcon onClick={addHumanResource} />
              </Fab>
              <span>افزودن نیروی انسانی جدید</span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded="false">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              انتخاب مواد اولیه
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {tabs.map((tab, index) => {
              return (
                <Fragment key={`tabMaterialItem${index}${tab}`}>
                  <AddRawMaterials
                    iFw={iFw}
                    handleFill={() => {
                      setFillItems([...fillItems, tab]);
                    }}
                  />
                </Fragment>
              );
            })}
            {console.log(fillItems, tabs)}
            {fillItems.length === tabs.length && (
              <Typography>
                <Fab
                  className="dd_new"
                  size="small"
                  aria-label="add"
                  onClick={() => handlerComponent()}
                >
                  <AddIcon />
                </Fab>
                <span>افزودن مواد اولیه</span>
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded="false">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>ماشین آلات</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {tabsMachinery.map((tabMachine, index) => (
              <>{tabMachine}</>
            ))}

            <Typography>
              <Fab
                size="small"
                className="dd_new"
                aria-label="add"
                onClick={handlerAddMachinery}
              >
                <AddIcon />
              </Fab>
              <span>افزودن ماشین آلات</span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded="false">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>توضیحات تکمیلی</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FurtherDetails />
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      {modalType === "addHumanResource" ? (
        <Modal>
          <AddHuman />
        </Modal>
      ) : (
        ""
      )}

      <button className="final_registration">ثبت نهایی</button>
    </div>
  );
};

const mapStateToProps = ({
  modalType: { modalType: modalType },
  operationTypeTab: { id, selectedItem, selectedItemTractor, tId, iFw },
}) => ({
  modalType,
  id,
  tId,
  iFw,
  selectedItem,
  selectedItemTractor,
});

export default connect(mapStateToProps, {
  closeModal,
  setModalType,
  incrementId,
  incrementTId,
  incrementIdFw,
  decrementIdFw,
  removeItemMachinery,
  removeItemFinancialWareHouse,
})(NewOperation);
