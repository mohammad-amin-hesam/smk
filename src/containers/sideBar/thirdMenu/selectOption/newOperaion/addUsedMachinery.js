import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  listHumanByYearIdAndPlantationId,
  setModalType,
  incrementTId,
  removeItemMachinery,
} from "../../../../../redux/actions";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Calender from "../../../../../components/ui/datePicker/datePicker";
import Calender2 from "../../../../../components/ui/datePicker/datePicker2";
import Button from "../../../../../components/ui/button/button";
import SelectMachinery from "./selectMachinery";
import Modal from "../../../../../components/ui/modal/modal";

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
    backgroundColor: "#F5F5F5",
    width: 350,
    margin: "30px auto",
    boxShadow: "0 0.5em 0.5em #999",
  },
}));

const AddUsedMachinery = (props) => {
  let {
    loading,
    plantationId,
    yearId,
    types,
    modalType,
    selectedItem,
    selectedItemTractor,
    id,
    tId,
  } = props;
  const [value, setValue] = useState(0);
  const [showTabs, setShowTabs] = useState(true);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showModalAddUsedMachinery = () => {
    props.setModalType("selectMachinery");
  };

  const removeItemHandler = () => {
    props.removeItemMachinery(id);
    setShowTabs(false);
  };

  return (
    <>
      {showTabs ? (
        <div className="operation_tab">
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <label>ماشین آلات مورد استفاده</label>
              <input
                onClick={showModalAddUsedMachinery}
                className="selected"
                disabled={selectedItem[id] ? true : false}
                value={
                  selectedItem[id] || selectedItemTractor[tId]
                    ? selectedItem[id]
                      ? selectedItem[id].name
                      : selectedItemTractor[tId]
                      ? selectedItemTractor[tId].name
                      : null
                    : null
                }
              />
            </Grid>
            <Grid item xs={7}>
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="ساعات بهره برداری" {...a11yProps(0)} />
                    <Tab label="بازه تاریخی" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div class="operation_value">
                    <label>ساعات بهره برداری</label>
                    <input
                      type="number"
                      name="operation_type_value"
                      id="operationTypeArea"
                      min="0"
                    />
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div class="operation_value" style={{ display: "flex" }}>
                    <Calender2 />
                    <Calender2 />
                  </div>
                </TabPanel>
              </div>
            </Grid>
          </Grid>
          <label>هزینه مستقیم (تومان)</label>
          <input type="number" />
          <span class="remove" onClick={() => removeItemHandler()}>
            حذف
          </span>
          {modalType === "selectMachinery" ? (
            <Modal>
              <SelectMachinery />
            </Modal>
          ) : (
            ""
          )}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = ({
  listHumanReport: { loading, listHumanReport },
  plantationState: { plantationId },
  modalType: { modalType: modalType },
  operationTypeTab: { selectedItemTractor, selectedItem, tId },
}) => ({
  loading,
  listHumanReport,
  plantationId,
  modalType,
  selectedItem,
  selectedItemTractor,
  tId,
});

export default connect(mapStateToProps, {
  listHumanByYearIdAndPlantationId,
  setModalType,
  incrementTId,
  removeItemMachinery,
})(AddUsedMachinery);
