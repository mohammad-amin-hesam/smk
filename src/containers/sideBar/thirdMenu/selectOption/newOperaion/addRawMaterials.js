import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SelectRawMaterial from "./selectRawMaterials";
import SelectSystemWarehouse from "./selectSystemWarehouse";
import {
  setModalType,
  removeItemFinancialWareHouse,
  decrementIdFw,
} from "../../../../../redux/actions";
import Modal from "../../../../../components/ui/modal/modal";
import { connect } from "react-redux";

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
    width: "fitContent",
    margin: "5px",
    display: "inline-block",
    boxShadow: "0 0.5em 0.5em #999",
  },
  label: {
    fontSize: "0.75em",
    fontWeight: "700",
  },
}));

const AddRawMaterials = (props) => {
  let {
    seletedItemSystemWarehouse,
    modalType,
    selectedExitByPlantationIdByRawMaterialId,
    listExitPlantationIdByRawMaterialId,
    iFw,
  } = props;

  const [seletedItemRawMaterials, setSeletedItemRawMaterials] = useState(null);
  const [listSeletedItemWarehouse, setListSeletedItemWarehouse] = useState([]);
  const [showTabsRawMaterial, setShowTabsRawMaterial] = useState(true);

  const [value, setValue] = useState(0);
  const [showListMaterial, setShowListMaterial] = useState(false);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const closeHandler = () => {
    setShowListMaterial(true);
  };
  const showModal = () => {
    props.setModalType("addRawMaterial");
  };
  const showModalWarehous = () => {
    props.setModalType("systemWareHouse");
  };

  const selectedItemsRawMaterial = (selectedItems) => {
    setSeletedItemRawMaterials(selectedItems);
  };
  const SelectedItemsWarehouse = () => {
    setListSeletedItemWarehouse();
  };

  // let findItem = listExitPlantationIdByRawMaterialId.filter((item) => {
  //   return item.id == selectedExitByPlantationIdByRawMaterialId[0]?.id
  // })

  const removeTab = () => {
    props.decrementIdFw();
    props.removeItemFinancialWareHouse(iFw);
    setShowTabsRawMaterial(false);
  };

  return (
    <React.Fragment>
      {showTabsRawMaterial ? (
        <div>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  label="انتخاب از سیستم انبار سامانه جامع"
                  {...a11yProps(0)}
                  disabled={
                    selectedExitByPlantationIdByRawMaterialId[iFw] !== undefined
                  }
                />
                <Tab
                  label="انتخاب از سیستم انبار مالی"
                  {...a11yProps(1)}
                  disabled={seletedItemRawMaterials !== null}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <p class="operation_value">
                <label>انتخاب مواد اولیه</label>
                <input
                  type="text"
                  placeholder="انتخاب مواد اولیه از لیست"
                  value={
                    seletedItemRawMaterials
                      ? seletedItemRawMaterials.raw_material.name
                      : ""
                  }
                  name="nameRawMaterial"
                  onClick={showModal}
                />
                <label>مقدار</label>
                <input type="number" style={{ width: "70px" }} min="0" />
              </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p class="operation_value">
                <label>انتخاب مواد اولیه</label>
                <input
                  type="text"
                  placeholder="برای مشاهده یا انتخاب کلیک کنید"
                  onClick={showModalWarehous}
                  readOnly
                  disabled={
                    selectedExitByPlantationIdByRawMaterialId[iFw]
                      ? true
                      : false
                  }
                  defaultValue={
                    selectedExitByPlantationIdByRawMaterialId[iFw]
                      ? selectedExitByPlantationIdByRawMaterialId[iFw]
                          .raw_material_title
                      : ""
                  }
                />
              </p>
            </TabPanel>

            {modalType === "addRawMaterial" ? (
              <Modal>
                <SelectRawMaterial
                  getSelectedItemsRawMaterial={selectedItemsRawMaterial}
                />
              </Modal>
            ) : (
              ""
            )}
            {modalType === "systemWareHouse" ? (
              <Modal>
                <SelectSystemWarehouse
                  getSelectedItemsWarehouse={SelectedItemsWarehouse}
                />
              </Modal>
            ) : (
              ""
            )}
          </div>
          <span class="remove" onClick={() => removeTab()}>
            حذف
          </span>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = ({
  operationTypeTab: {
    listSeletedIemsRawMaterial,
    selectedExitByPlantationIdByRawMaterialId,
    listExitPlantationIdByRawMaterialId,
    seletedItemSystemWarehouse,
  },
  modalType: { modalType: modalType },
}) => ({
  listSeletedIemsRawMaterial,
  modalType,
  selectedExitByPlantationIdByRawMaterialId,
  listExitPlantationIdByRawMaterialId,
  seletedItemSystemWarehouse,
});

export default connect(mapStateToProps, {
  setModalType,
  removeItemFinancialWareHouse,
  decrementIdFw,
})(AddRawMaterials);
