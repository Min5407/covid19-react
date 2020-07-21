import React, { useState, useEffect } from "react";
import {
  fetchCountryRecoverdData,
  fetchCountryConfirmedData,
  fetchCountryDeathData,
} from "../../pages/countries/api";
import "./columnChart.style.scss";

import ReactApexChart from "react-apexcharts";
import Loading from "../loading/loading.component";

const ColumnChart = ({ country }) => {
  const [confirmedCase, setConfirmedCase] = useState(null);
  const [recoveredCase, setRecoveredCase] = useState(null);
  const [deathCase, setDeathCase] = useState(null);
  const [graphState, setGraphState] = useState(null);

  useEffect(() => {
    const getConfirmedData = async () => {
      const recoveredData = await fetchCountryRecoverdData(country);
      const confirmedData = await fetchCountryConfirmedData(country);
      const deathData = await fetchCountryDeathData(country);
      setRecoveredCase(recoveredData);
      setDeathCase(deathData);
      setConfirmedCase(confirmedData);
    };
    getConfirmedData();
    console.log("hi");
  }, [country]);

  useEffect(() => {
    if (confirmedCase && recoveredCase && deathCase) {
      const modifiedConfirmedCase = confirmedCase.map((i) => i.Cases);
      const modifiedrecoveredCase = recoveredCase.map((i) => i.Cases);
      const modifieddeathCase = deathCase.map((i) => i.Cases);
      const dates = confirmedCase.map((i) =>
        i.Date.slice(5, 10).replace(/-/g, "/")
      );

      const state = {
        series: [
          {
            name: "Confirmed ",
            data: modifiedConfirmedCase,
          },
          {
            name: "Recovered ",
            data: modifiedrecoveredCase,
          },
          {
            name: "Deaths ",
            data: modifieddeathCase,
          },
        ],
        options: {
          plotOptions: {},
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 3,
            curve: "smooth",
            colors: ["#2E93fA", "#66DA26", "#FF9800"],
          },
          xaxis: {
            categories: dates,
          },
          yaxis: {
            title: {
              text: "Corona Virus Case",
              style: {
                color: undefined,
                fontSize: "15px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 800,
              },
            },
            labels: {
              show: true,
              style: {
                //  padding: "10px",
                fontSize: "10px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },
          fill: {
            opacity: 1,
            type: ["gradient", "gradient", "gradient"],
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " cases";
              },
            },
          },
        },
      };

      setGraphState(state);
    }
    console.log("change");
  }, [confirmedCase]);
  return (
    <div className="chart">
      {graphState ? (
        <ReactApexChart
          options={graphState.options}
          series={graphState.series}
          height="500px"
          width="1100px"
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ColumnChart;
