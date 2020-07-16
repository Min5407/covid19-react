import React, { useState, useEffect } from "react";
import "./chartNumbers.style.scss";
import CountUp from "react-countup";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ErrorIcon from "@material-ui/icons/Error";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

function ChartNumbers({ data, label, random }) {
  const covidData = data;
  const backgroundColor = ["one", "two", "three"];

  return (
    <div className={`card ${backgroundColor[random]}`}>
      <div className="card_title">
        {label === "Total confirmed" ? <ErrorIcon /> : null}
        {label === "Total Recovered" ? <LocalHospitalIcon /> : null}
        {label === "Total Deaths" ? <LocalFloristIcon /> : null}
        <h2>{label}</h2>
      </div>
      <div className="count">
        <CountUp start={0} end={covidData} duration={1.5} />
      </div>
    </div>
  );
}

export default ChartNumbers;
