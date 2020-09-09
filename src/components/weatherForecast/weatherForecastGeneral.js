import React from "react";
import {connect} from "react-redux";
import "moment-timezone";
import moment from "moment-jalaali";

const getWeekDay = day => {
    switch (day) {
        case 1:
            return "دو شنبه";
        case 2:
            return "سه شنبه";
        case 3:
            return "چهار شنبه";
        case 4:
            return "پنج شنبه";
        case 5:
            return "جمعه";
        case 6:
            return "شنبه";
        case 7:
            return "یک شنبه";
        default:
            return "";
    }
};

const WeatherForecastGeneral = props => {
    let myCurrent = {};
    for (let i = 0; i < props.current.length; i++) {
        if (props.current[i].id === props.selectedCurrent) {
            myCurrent = props.current[i];
            break;
        }
    }
    const m = moment(myCurrent.current.lastUpdate.date);
    return (
        <div className="WeatherForecastGeneral">
            <div className="row">
                <div className="column">
                    <span>{myCurrent.name}</span>
                    <div> آخرین بروزرسانی
                        : {getWeekDay(m.isoWeekday())}{m.locale('fa').format(' (jYYYY/jMM/jDD) HH:mm')} </div>
                    <div>{myCurrent.current.weather.description}</div>
                    <div>
                        <img
                            src={
                                require(`../../assets/imges/icon/weather_icons/${myCurrent.current.weather.icon}@2x.png`)
                            }
                        />
                        {myCurrent.current.temperature.now.value} درجه سانتیگراد
                    </div>
                </div>
                <div className="column">
                    <div></div>
                    <div></div>
                    <div>بارش : {myCurrent.current.precipitation.value}</div>
                    <div>رطوبت : {myCurrent.current.humidity.value} %</div>
                    <div> وزش باد :{myCurrent.current.wind.speed.value} m/s</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        current: state.weatherCurrent.current
    }
};

export default connect(mapStateToProps)(WeatherForecastGeneral)