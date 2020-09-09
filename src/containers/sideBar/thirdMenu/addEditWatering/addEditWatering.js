import React, {useEffect, useState} from "react";
import {connect} from "react-redux"
import Button from "../../../../components/ui/button/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router";
import Collapse, {Panel} from 'rc-collapse';
import {DatePicker} from "react-advance-jalaali-datepicker";
import "rc-collapse/assets/index.css";
import "./accardion.scss"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Bar} from "react-chartjs-2";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {toast} from 'react-toastify';

import {
    fetchIrrigationOperations,
    fetchWaterResourceByPlantation,
    fetchWaterResourceUsage,
    postIrrigationOperation,
    postIrrigationOperationCheckProof,
    setHumanResourceWatering
} from "../../../../redux/actions";
import SecondModal from "../../../../components/ui/secondModal/secondModal";
import SelectHumanResource from "./selectHumanResource";
import "../../../../styles/local/packages/form.scss";
import "../../../../styles/local/packages/bar.scss";
import "../../../../styles/local/packages/progressbar&breadcrumb.scss";
import "../../../../styles/local/packages/progressbar&breadcrumb.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

const AddEditWatering = props => {
    const plantationId = new URLSearchParams(props.location.search).get("plantId");
    let humanWateringData = [] ;
    let history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const comeBack = event => {
        history.goBack();
    };

    const tabTitles = [
        "مقدار نفر ساعت",
        "بازه تاریخی",
        "درصد مزارعه کاری",
        "وزن مزارعه کاری"
    ];

    const [selectedResource, setSelectedResource] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedFinishDate, setSelectedFinishDate] = useState(null);
    const [humanResourceOpen, setHumanResourceOpen] = useState(false);
    const [humanTabArray, setHumanTabArray] = useState([]);
    const [selectedHumanIndex, setSelectedHumanIndex] = useState(0);
    const [chartData, setChartData] = useState(null);
    const [nhour, setNhour] = useState([]);
    const [tabDateRange, setTabDateRange] = useState([]);
    const [postSubmitData, setPostSubmitData] = useState(null)

    useEffect(() => {
        props.fetchWaterResourcesByPlantation(plantationId, props.yearId);
        props.fetchIrrigationOperations(props.yearId, plantationId, props.patternPlanting)
    }, []);

    useEffect(() => {
        if (props.resourcesByPlantation) {
            setSelectedResource(props.resourcesByPlantation[0])
        }
    }, [props.resourcesByPlantation]);

    useEffect(() => {
        if (selectedResource) {
            props.fetchWaterResourceUsage(selectedResource.id, props.yearId)
        }
    }, [selectedResource]);

    useEffect(() => {
        let newList = [];
        let newTabDateRange = [];
        if (props.selectedHumanWatering) {
            props.selectedHumanWatering.map((human, index) => {
                newList.push(0);
                newTabDateRange.push({startDate: "", endDate: ""});
            });
            setHumanTabArray([...newList]);
            setNhour([...newList]);
            setTabDateRange([...newTabDateRange]);
        }
    }, [props.selectedHumanWatering]);

    useEffect(() => {
        if (props.irrigationOperations) {
            getChartData(props.irrigationOperations.month);
        }
    }, [props.irrigationOperations]);

    useEffect(() => {
        if (nhour.length > 0 ) {
            humanWateringData = [] ;
            nhour.map((item, index) => humanWateringData.push({
                id: props.selectedHumanWatering[index].id,
                type: "nhour",
                humanResourceHour: item
            }))
        }
    }, [nhour]);

    useEffect(() => {
        if (tabDateRange.length > 0 ) {
            humanWateringData = [] ;
            tabDateRange.map((item, index) => humanWateringData.push({
                id: props.selectedHumanWatering[index].id,
                type: "range",
                humanResourceRange: [item.startDate, item.endDate]
            }))

        }
    }, [tabDateRange]);

    useEffect(() => {
        if (props.irrigationCheckProofResult === 0 ) {
            props.postIrrigationOperation(postSubmitData)
        }
        }, [props.irrigationCheckProofResult]);

    useEffect(() => {
        if(props.irrigationResult) {
            toast.success("عملیات با موفقیت انجام شد", {
                position: toast.POSITION.TOP_CENTER,
                rtl: true,
                style: {font: "inherit"}
            });
        }
    }, [props.irrigationResult]);

    const humanResourceCancelHandler = () => {
        setHumanResourceOpen(false);
    };

    const handleTabChange = (event, newValue) => {
        let newList = [...humanTabArray];
        newList[selectedHumanIndex] = newValue;
        setHumanTabArray([...newList]);
    };

    const getChartData = operations => {
        let fetchedArray = [];
        let fetchedCurrentValue = [];
        for (let key in operations) {
            fetchedArray.push(operations[key].crop_requirement)
            if (operations[key].used_per_month) {
                fetchedCurrentValue.push(operations[key].used_per_month)
            } else {
                fetchedCurrentValue.push(0)
            }
        }

        setChartData({
            labels: persianMonths,
            datasets: [
                {
                    label: "نیاز آبی",
                    data: fetchedArray,
                    backgroundColor: "rgba(173, 173, 133,0.5)"
                },
                {
                    label: "مقدار کنونی",
                    data: fetchedCurrentValue,
                    backgroundColor: "rgba(0, 102, 255,0.5)"
                }
            ]
        })
    };

    const nhourChangeHandler =( event, i ) => {
        let newList = [...nhour] ;
        newList[i] = Number(event.target.value);
        setNhour([...newList]);
    }

    const humanRemoveHandler = index => {
        let newList = [...props.selectedHumanWatering];
        newList.splice(index, 1);
        props.setHumanResourceWatering([...newList])
    };

    const formSubmitClickHandler = () => {
        let postData;
        if (selectedResource === null || selectedStartDate === null || selectedFinishDate === null) {
            toast.info("همه مقادیر فرم را پر کنید", {
                position: toast.POSITION.TOP_CENTER,
                rtl: true,
                style: {font: "inherit"}
            });
        } else {
            postData = {
                plantation_id: props.plantationId,
                pattern_planting_id: props.patternPlanting,
                water_resource_id: selectedResource.id,
                planting_year_id: props.yearId,
                start_date_time: selectedStartDate,
                end_date_time: selectedFinishDate,
                auxiliary_date: {humanResourceHour: humanWateringData}
            };
            setPostSubmitData(postData);
            props.postIrrigationOperationCheckProof(postData)
        }
    };

    return (
        <div>
            <div className="AddEditWatering">
                <div className="form-title" style={{position: "sticky"}}>
                    <span style={{fontSize: "1rem"}}>افزودن/ویرایش عملیات آبیاری</span>
                    <div className="submit-close">
                        <Button btnType="success" clicked={comeBack}>
                            <span>بازگشت</span>
                            <ArrowBackIcon/>
                        </Button>
                    </div>
                </div>
                <Collapse accordion={false} defaultActiveKey={["1", "2", "3", "4"]}>
                    <Panel header="عملیات آبیاری" key="1">
                        <div className="form-group"
                             style={{float: "right"}}>
                            <label>منبع آبیاری</label>
                            <select
                                className="form-control"
                                value={props.resourcesByPlantation ? props.resourcesByPlantation.indexOf(selectedResource) : null}
                                onChange={e => setSelectedResource(props.resourcesByPlantation[e.target.value])}
                            >
                                {
                                    props.resourcesByPlantation ?
                                        props.resourcesByPlantation.map((resource, index) => (
                                            <option value={index}>{resource.name}</option>
                                        )) : null
                                }
                            </select>
                        </div>
                        <div className="form-group-2">
                            <label>شروع</label>
                            <DatePicker
                                id={"analysis_date"}
                                placeholder="----/--/--"
                                format="jYYYY/jMM/jDD"
                                customClass="form-control"
                                preSelected={selectedStartDate}
                                onChange={(unix, formatted) => setSelectedStartDate(formatted)}
                            />
                        </div>
                        <div className="form-group-2">
                            <label>پایان</label>
                            <DatePicker
                                id={"analysis_date"}
                                placeholder="----/--/--"
                                format="jYYYY/jMM/jDD"
                                customClass="form-control"
                                preSelected={selectedFinishDate}
                                onChange={(unix, formatted) => setSelectedFinishDate(formatted)}
                            />
                        </div>
                    </Panel>
                    <Panel header="انتخاب نبروی انسانی جدید" key="2">
                        <div className="operation-general-group">
                            <div className="WateringHumanResource">
                                {
                                    props.selectedHumanWatering ?
                                        props.selectedHumanWatering.map((human, i) => (
                                            <div className="human-row">
                                                <div
                                                    className="input-group"
                                                    style={{width: "35%"}}
                                                >
                                                    <span>نیروی انسانی مستقیم</span>
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        value={human.name}
                                                    />
                                                </div>
                                                {/**/}
                                                <div
                                                    className="SUBPLANTS-human"
                                                    onClick={() => setSelectedHumanIndex(i)}
                                                >
                                                    <Tabs
                                                        tabItemContainerStyle={{width: '400px'}}
                                                        value={humanTabArray[i]}
                                                        onChange={handleTabChange}
                                                        indicatorColor="primary"
                                                        style={{fontSize: ".75rem"}}
                                                    >
                                                        <Tab label={<span>{tabTitles[0]}</span>}/>
                                                        <Tab label={tabTitles[1]}/>
                                                        <Tab label={tabTitles[2]} disabled/>
                                                        <Tab label={tabTitles[3]} disabled/>
                                                    </Tabs>
                                                    {/*</AppBar>*/}
                                                    <TabPanel
                                                        value={humanTabArray[i]}
                                                        index={0}
                                                        dir={theme.direction}
                                                    >
                                                        <div className="input-group">
                                                            <span>مقدار نفر ساعت</span>
                                                            <input type="number"
                                                                   step="any"
                                                                   className="small-text n_hours"
                                                                   value={nhour[i]}
                                                                   onChange={(event ) => nhourChangeHandler(event, i)}
                                                            />
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel
                                                        value={humanTabArray[i]}
                                                        index={1}
                                                        dir={theme.direction}
                                                    >
                                                        <DatePicker
                                                            containerClass="date-input"
                                                            id={"analysis_date"}
                                                            placeholder="----/--/--"
                                                            format="jYYYY/jMM/jDD"
                                                            customClass="form-control"
                                                            preSelected={selectedFinishDate}
                                                            onChange={(unix, formatted) => {
                                                                let newList = [...tabDateRange];
                                                                newList[i].startDate = formatted;
                                                                setTabDateRange([...newList]);
                                                            }}
                                                        />
                                                        <DatePicker
                                                            containerClass="date-input"
                                                            id={"analysis_date"}
                                                            placeholder="----/--/--"
                                                            format="jYYYY/jMM/jDD"
                                                            customClass="form-control"
                                                            preSelected={selectedFinishDate}
                                                            onChange={(unix, formatted) => {
                                                                let newList = [...tabDateRange];
                                                                newList[i].endDate = formatted;
                                                                setTabDateRange([...newList]);
                                                            }}
                                                        />
                                                    </TabPanel>
                                                    <TabPanel
                                                        value={humanTabArray[i]}
                                                        index={2}
                                                        dir={theme.direction}
                                                    >
                                                        <div className="input-group">
                                                            <input type="number"
                                                                   className="small-text work-percent"
                                                                // defaultValue={farmerWorkPercent}
                                                            />
                                                            <span className="margin-after">درصد</span>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel
                                                        value={humanTabArray[i]}
                                                        index={3}
                                                        dir={theme.direction}
                                                    >
                                                        <div className="input-group">
                                                            <input
                                                                type="number"
                                                                className="small-text work-weight"
                                                                // defaultValue={farmerworkWeight}
                                                            />
                                                            <span className="margin-after">کیلوگرم</span>
                                                        </div>
                                                    </TabPanel>
                                                </div>
                                                <div
                                                    onClick={ () => humanRemoveHandler(i)}
                                                    className="remove-human"
                                                >
                                                    <span className="remove-human"> حذف</span>
                                                </div>
                                            </div>
                                        )) : null
                                }
                                <div
                                    className="add-human-row"
                                    onClick={() => setHumanResourceOpen(true)}
                                >
                                    <span>+</span>
                                    افزودن نیروی انسانی جدید
                                </div>
                            </div>
                        </div>
                    </Panel>
                    <Panel header={"نمودار مقایسه آبیاری گیاه انتخابی با نیاز آبی آن (مترمکعب)"} key="3">
                        {
                            chartData !== null ?
                                <Bar data={chartData}/> : null
                        }

                    </Panel>
                    <Panel header={"میزان بهره برداری از منبع آبی در مقایسه با ظرفیت سالانه آن (مترمکعب)"} key="4">
                        {
                            props.resourceUsage ?
                                <div>
                                    <span style={{display: "block"}}>{props.resourceUsage.capacity}</span>
                                    <span style={{display: "block"}}>{props.resourceUsage.usage}</span>
                                </div>
                                // <ProgressBar
                                //     animated
                                //     now={props.resourceUsage.capacity}
                                //     min={0}
                                //     max={props.resourceUsage.usage}/>
                                : null
                        }
                    </Panel>
                </Collapse>
                <button
                    className="btn-submit"
                    onClick={formSubmitClickHandler}
                >
                    ثبت نهایی
                </button>
            </div>
            {
                humanResourceOpen ?
                    <SecondModal
                        show={humanResourceOpen}
                        modalClosed={humanResourceCancelHandler}
                    >
                        <SelectHumanResource/>
                    </SecondModal> : null
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        plantationId: state.plantationState.plantationId,
        patternPlanting: state.plantationState.patternPlanting,
        yearId: state.plantationState.yearId,
        resourcesByPlantation: state.waterResources.resourcesByPlantation,
        selectedHumanWatering: state.watering.humanWatering,
        irrigationOperations: state.irrigation.operations,
        resourceUsage: state.waterResources.usage,
        irrigationResult: state.irrigation.postIrrigationResult,
        irrigationCheckProofResult: state.irrigation.checkProofResult
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWaterResourcesByPlantation: (pId, yId) => dispatch(fetchWaterResourceByPlantation(pId, yId)),
        fetchWaterResourceUsage: (resourceId, yearId) => dispatch(fetchWaterResourceUsage(resourceId, yearId)),
        fetchIrrigationOperations: (yId, pId, patternId) => dispatch(fetchIrrigationOperations(yId, pId, patternId)),
        postIrrigationOperationCheckProof: postData => dispatch(postIrrigationOperationCheckProof(postData)),
        postIrrigationOperation: postData => dispatch(postIrrigationOperation(postData)),
        setHumanResourceWatering: selectedHuman => dispatch(setHumanResourceWatering(selectedHuman))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditWatering);