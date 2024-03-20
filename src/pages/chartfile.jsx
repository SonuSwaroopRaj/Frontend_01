
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts"


const ChartFile = (props) => {

    const [overallfeedback, setOverallFeedback] = useState([]);

    const questiononecount = props.questiondt;
    console.log(questiononecount);

    const series = [
        {
            data: questiononecount,
        },
    ]
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                vertical: true,
            },
        },
        dataLabels: {
            enabled: false,
        },

        colors: ["#34c38f"],
        grid: {
            borderColor: "#f1f1f1",
        },
        xaxis: {
            categories: [
                "Positive",
                "Negative",
                "Neutral",
            ],
        },
    }


    return (
        <div>
            <div>
                <ReactApexChart options={options} series={series} type="bar" height="450" width="600" />
            </div>
        </div>
    )
}

export default ChartFile;