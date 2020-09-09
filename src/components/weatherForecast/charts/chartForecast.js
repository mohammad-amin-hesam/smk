import React from "react";
import {Line, Bar} from "react-chartjs-2";
import "moment-timezone";
import moment from "moment-jalaali";


const ChartForecast = props => {

    const labels = ["temperature", "precipitation", "wind"];
    const labelsTranslate = ["دما", "بارش", "باد"];
    const getChartData = () => {
        let chartLabels = [];
        let chartData = [];
        let chartLabel = "";
        let borderColor = "rgba(255, 51, 51, 1)";
        let backgroundColor = "rgba(255, 51, 51, 0.3)";
        if (props.forecasts.length > 0) {
            props.forecasts.map(forecast => {
                const momentFrom = moment(forecast.time.from.date).locale('fa').format("( HH:mm - ");
                const momentTo = moment(forecast.time.to.date).locale('fa').format("HH:mm )");
                const momentDay = moment(forecast.time.day.date).locale('fa').format("jYYYY/jMM/jDD");
                chartLabels.push("" + momentFrom + momentTo + momentDay);
                switch (props.mode) {
                    case labels[0]: {
                        chartData.push(forecast.temperature.now.value);
                        chartLabel = labelsTranslate[0];
                        borderColor = "rgba(255, 51, 51, 1)";
                        backgroundColor = "rgba(255, 51, 51, 0.3)";
                        break;
                    }
                    case labels[1]: {
                        chartData.push(forecast.precipitation.value);
                        chartLabel = labelsTranslate[1];
                        borderColor = "rgba(0, 153, 255, 1)";
                        backgroundColor = "rgba(0, 153, 255, 0.3)";
                        break;
                    }
                    case labels[2]: {
                        chartData.push(forecast.wind.speed.value);
                        chartLabel = labelsTranslate[2];
                        borderColor = "rgba(255, 80, 80, 1)";
                        backgroundColor = "rgba(166, 166, 166, 0.3)";
                        break;
                    }
                    default: {
                        chartData.push("0");
                        break;
                    }
                }
            });
        }

        return {
            labels: chartLabels,
            datasets: [
                {
                    label: chartLabel,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    data: chartData
                }
            ]
        }
    };
    const chartData = getChartData();
    return (
        <div>
            {props.mode !== labels[1] ? <Line data={chartData} /> : <Bar data={chartData}/>}
        </div>
    )
};

export default ChartForecast;