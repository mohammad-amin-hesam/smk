import React, {useState} from "react";

import forecastLogo from "../../../../assets/imges/calendar-weather.svg";
import WeatherList from "../weatherList/weatherList";

const WeatherIcon = () => {
    const [showList, setShowList] = useState(false);
    const weatherIconClickHandler = () => {
        setShowList(!showList);
    };
    return (
        <div>
            <div onClick={weatherIconClickHandler} className="WeatherForecastIconContainer">
                <img className="WeatherForecastIconLogo" src={forecastLogo} alt="weather" title="پیش بینی آب و هواا"/>
                پیش بینی آب و هوا
            </div>
             <WeatherList display={showList} /> 
        </div>
    );
};

export default WeatherIcon;