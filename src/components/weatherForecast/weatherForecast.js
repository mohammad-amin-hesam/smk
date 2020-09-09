import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import Button from "../ui/button/button";
import {closeModal, fetchWeatherForecast} from "../../redux/actions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import WeatherForecastGeneral from "./weatherForecastGeneral";
import ChartForecast from "./charts/chartForecast";
import WeatherForecastCalendar from "./weatherForecastCalendar";
import Spinner from "../ui/spinner/spinner";

const WeatherForecast = props => {
    useEffect(() => {
        props.fetchWeatherForecast(props.selectedCityId);
    }, []);

    const labels = ["temperature", "precipitation", "wind"];
    const [chartMode, setChartMode] = useState(labels[0]);

    const comeBack = event => {
        props.closeModal();
    };
    let weatherForecast = <Spinner/>;
    if (!props.loading) {
        weatherForecast = <div>
            <ChartForecast forecasts={props.forecasts} mode={chartMode}/>
            <WeatherForecastCalendar forecasts={props.forecasts}/></div>

    }
    return (
        <div className="WeatherForecast">
            <div className="form-title">
                <span>پیش بینی آب و هوا</span>
                <div className="submit-close">
                    <Button btnType="success" clicked={comeBack}>
                        <span>بازگشت</span>
                        <ArrowBackIcon/>
                    </Button>
                </div>
            </div>
            <WeatherForecastGeneral selectedCurrent={props.selectedCurrent}/>
            <div className="btn-group">
                <button onClick={() => setChartMode(labels[0])}>دما</button>
                <button onClick={() => setChartMode(labels[1])}>بارش</button>
                <button onClick={() => setChartMode(labels[2])}>باد</button>
            </div>
            {weatherForecast}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        forecasts: state.weatherForecast.forecast,
        loading: state.weatherForecast.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchWeatherForecast: cityId => dispatch(fetchWeatherForecast(cityId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast)