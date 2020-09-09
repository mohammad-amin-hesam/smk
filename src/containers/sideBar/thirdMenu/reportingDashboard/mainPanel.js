import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from "react-slick";
import InputLabel from "@material-ui/core/InputLabel";

import {fetchDashboardOptions, fetchDashboardReports} from "../../../../redux/actions";
import AddIndicator from "./addIndicator";
import SecondModal from "../../../../components/ui/secondModal/secondModal";
import CriteriaSelect from "./criteriaSelect";
import GaugePanel from "./gaugePanel";
import BarChartPanel from "./barChartPanel";

function SliderArrow(props) {

    const {className, onClick, direction} = props;
    return (
        <img
            className={className}
            src={
                direction === "prev" ?
                    require("../../../../assets/imges/right-arrow.svg") :
                    require("../../../../assets/imges/back.svg")
            }
            onClick={onClick}
        />
    );
}

const MainPanel = props => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    }));

    useEffect(() => {
        props.fetchDashboardOptions(props.plantationId)
    }, []);

    let reportPanel = <div/>;
    useEffect(() => {
        const requirements = {
            category: 1,
            divider: optionDivider,
            indicator: optionIndicator,
            criteria: props.optionCriteria,
            plantationId: props.plantationId,
            ratio: ""
        };
        if (props.result) {
            reportPanel = <div>{
                props.result.map(item => (
                    item.report.type === "gage" ?
                        <GaugePanel result={item} requirements={requirements}/> :
                        item.report.type === "bar" ?
                            <BarChartPanel result={item} requirements={requirements}/> :
                            null
                ))
            }</div>;
        }
        setReportElements(reportPanel);
    }, [props.result]);

    const classes = useStyles();
    const [optionDivider, setOptionDivider] = useState(props.dividers ? props.dividers[0].alias : "sum");
    const [optionCriteria, setOptionCriteria] = useState("");
    const [optionIndicator, setOptionIndicator] = useState("");
    const [addIndicatorOpen, setAddIndicatorOpen] = useState(false);
    const [criteriaSelect, setCriteriaSelect] = useState(false);
    const [reportElements, setReportElements] = useState(<div/>);
    const [checkCriteria, setCheckCriteria] = useState([]);

    let temp = [];
    useEffect(() => {
        if (props.criteria) {
            props.criteria.map(item => {
                let check = false;
                let length = 0;
                props.selectedCriteria.map(selected => {
                    if (selected.name === item.alias) {
                        check = true;
                        length = selected.selected.length;
                    };
                });
                temp.push({
                    check: check,
                    length: length
                });
            });
        }
        setCheckCriteria(temp);
    }, [props.selectedCriteria]);

    useEffect(() => {
        setAddIndicatorOpen(false);
    }, [props.addIndicatorResult]);


    const reportBtnHandler = () => {
        const requirements = {
            category: 1,
            divider: optionDivider,
            indicator: optionIndicator,
            criteria: props.optionCriteria,
            plantationId: props.plantationId,
            ratio: ""
        };
        props.fetchDashboardReports(requirements);
    };

    const settings = slides => {
        return {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slides,
            slidesToScroll: 1,
            nextArrow: <SliderArrow direction="next"/>,
            prevArrow: <SliderArrow direction="prev"/>
        }
    };

    const criteriaCancelHandler = () => {
        setCriteriaSelect(false);
    };

    const criteriaClickHandler = event => {
        setOptionCriteria(props.criteria[event.target.value]);
        setCriteriaSelect(true);
    };

    return (
        <div className="MainPanel">
            <button className="DefaultButton">پیش فرض</button>
            <div className="Row">
                <div className="Element" style={{width: '30%'}}>
                    <span>اساس گزارش گیری :</span>
                    <FormControl variant="filled" className={classes.formControl}>
                        <Select
                            style={{width: '15vh', height: '80%', fontFamily: 'inherit'}}
                            disableUnderline
                            defaultValue={props.dividers ? props.dividers[0].alias : null}
                            value={optionDivider}
                            onChange={(event) =>
                                setOptionDivider(event.target.value)}>
                            {
                                props.dividers ?
                                    props.dividers.map((divider, index) => (
                                        <MenuItem
                                            style={{fontFamily: 'inherit'}}
                                            key={index}
                                            value={divider.alias}>
                                            {divider.title}
                                        </MenuItem>
                                    )) :
                                    <div/>
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className="Element" style={{width: '70%'}}>
                    <span>پالایش </span>
                    <Slider className="Slider" {...settings(4)}>
                        {
                            props.criteria ?
                                props.criteria.map((criteria, index) => (
                                    <div key={index} className="FilterButton">
                                        <button
                                            className={checkCriteria.length === props.criteria.length? checkCriteria[index].check ? "btnSlickActive": "btnSlick" : "btnSlick"}
                                            value={index}
                                            onClick={criteriaClickHandler}>
                                            {criteria.title}<br/>
                                            { checkCriteria.length === props.criteria.length? checkCriteria[index].check ? "مورد انتخاب شده" + checkCriteria[index].length : "" : ""}
                                        </button>
                                    </div>
                                )) :
                                <div/>
                        }
                    </Slider>
                </div>
            </div>
            <SecondModal
                show={criteriaSelect}
                modalClosed={criteriaCancelHandler}
            >
                {criteriaSelect ?
                    <CriteriaSelect
                        title={optionCriteria.title}
                        alias={optionCriteria.alias} /> : null}
            </SecondModal>
            <div className="Row">
                <div className="Element" style={{width: '35%'}}>
                    <span>شاخص فعال </span>
                    <Slider className="Slider" {...settings(3)}>
                        {
                            props.indicators ?
                                props.indicators.public.map((indicator, index) => (
                                    <div key={index} className="FilterButton">
                                        <button
                                            className={optionIndicator === indicator.id ? "btnSlickActive" : "btnSlick"}
                                            onClick={
                                                () => optionIndicator === indicator.id ?
                                                    setOptionIndicator("") :
                                                    setOptionIndicator(indicator.id)
                                            }>
                                            {indicator.title}
                                        </button>
                                    </div>
                                )) :
                                <div/>
                        }
                    </Slider>
                </div>
                <div className="Element" style={{width: '30%', marginRight: '30px'}}>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel
                            style={{fontFamily: 'inherit'}}
                            htmlFor="filled-age-native-simple">
                            شاخص اختصاصی
                        </InputLabel>
                        <Select
                            style={{width: '25vh', fontFamily: 'inherit', fontSize: '0.7rem'}}
                            disableUnderline
                            defaultValue={props.indicators ? props.indicators.private[0].id : null}
                            value={optionIndicator}
                            onChange={event => setOptionIndicator(event.target.value)}
                        >
                            <p>شاخص های اختصاصی را از این قسمت انتخاب کنید</p>
                            {
                                props.indicators ?
                                    props.indicators.private.map((indicator, index) => (
                                        <div className="DashboardSelectItem" key={index} value={indicator.id}>
                                            {indicator.title}
                                        </div>
                                    )) :
                                    <div/>
                            }
                        </Select>
                    </FormControl>
                    <button
                        className="BtnAddIndicator"
                        onClick={() => setAddIndicatorOpen(!addIndicatorOpen)}
                    >
                        {
                            addIndicatorOpen ?
                                <img src={require('../../../../assets/imges/close-red.svg')}/> :
                                <img src={require('../../../../assets/imges/plus-symbol-black.svg')}/>

                        }
                    </button>
                    {addIndicatorOpen ? <AddIndicator/> : null}
                </div>
                <div className="TestElement" style={{width: '25%', float: 'left'}}>
                    {
                        props.excelSrc ?
                            <a href={props.excelSrc.src}
                               download="foo.txt" target="_blank" >
                                <img
                                    src={require('../../../../assets/imges/excel.svg')}
                                />
                            </a>
                            :
                            null
                    }
                    <button
                        onClick={reportBtnHandler}
                        className="ReportButton"
                    >
                        <img
                            src={require('../../../../assets/imges/update-arrows.svg')}
                        />
                        اجرای گزارش
                    </button>
                </div>
            </div>
            {reportElements}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.dashboardOptions.options.categories,
        criteria: state.dashboardOptions.options.criteria,
        dividers: state.dashboardOptions.options.dividers,
        indicators: state.dashboardOptions.options.indicators,
        plantationId: state.plantationState.plantationId,
        optionCriteria: state.dashboardOptions.criterias,
        result: state.dashboardReports.reports.result,
        addIndicatorResult: state.dashboardReports.addIndicatorResult,
        excelSrc: state.dashboardReports.reports.excel_export,
        selectedCriteria: state.dashboardOptions.criterias
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDashboardOptions: pId => dispatch(fetchDashboardOptions(pId)),
        fetchDashboardReports: requirements => dispatch(fetchDashboardReports(requirements))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);