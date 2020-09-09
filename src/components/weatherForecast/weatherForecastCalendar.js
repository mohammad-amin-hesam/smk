import React from "react";
import "moment-timezone";
import moment from "moment-jalaali";

const WeatherForecastCalendar = props => {
    const getWeekDay = time => {
        const m = moment(time);
        const day = m.isoWeekday();
        switch (day) {
            case 1:
                return "دو شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 2:
                return "سه شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 3:
                return "چهار شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 4:
                return "پنج شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 5:
                return "جمعه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 6:
                return "شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            case 7:
                return "یک شنبه" + '\n' + m.locale('fa').format("jYYYY/jMM/jDD");
            default:
                return "";
        }
    };
    const getCalendarData = () => {
        let myData = [];
        if (props.forecasts) {
            props.forecasts.map(forecast => {
                myData.push({
                    timeDay: forecast.time.day.date,
                    time: "" +
                        moment(forecast.time.from.date).locale('fa').format("HH:mm - ") +
                        moment(forecast.time.to.date).locale('fa').format("HH:mm "),
                    weatherIcon: forecast.weather.icon,
                    temperatureMax: forecast.temperature.max.value,
                    temperatureMin: forecast.temperature.min.value
                })
            })
        }
        return myData;
    };
    const dividingData = calendarData => {
        const mainArray = [];
        let subArray = [];
        for (let i = 0; i < calendarData.length - 1; i++) {
            subArray.push(calendarData[i]);
            if (calendarData[i].timeDay !== calendarData[i + 1].timeDay) {
                mainArray.push(subArray);
                subArray = [];
            }
            if (i === calendarData.length - 2) {
                subArray.push(calendarData[i + 1]);
                mainArray.push(subArray);
            }
        }
        return mainArray;
    };
    const creatTable = data => {
        return (
            <div className="WeatherForecastTable">
                <table>
                    {data.map(row => (
                        <thead key={data.indexOf(row)}>
                        <tr style={{borderBottom: "1px solid #dddddd"}}>
                            <th>{getWeekDay(row[0].timeDay)}</th>
                            {row.map(item => (
                                <td key={row.indexOf(item)} className="item">
                                    <p>{item.time}</p>
                                    <img
                                        src={
                                            require(`../../assets/imges/icon/weather_icons/${item.weatherIcon}@2x.png`)
                                        }
                                    />
                                    <p>
                                        <span>{item.temperatureMin}</span>
                                        <span>{item.temperatureMax}</span>
                                    </p>
                                </td>
                            ))}
                        </tr>
                        </thead>
                    ))}
                </table>
            </div>
        )
    };
    const calendarData = getCalendarData();
    const dividedData = dividingData(calendarData);
    return (
        <div>{creatTable(dividedData)}</div>
    )
};

export default WeatherForecastCalendar;