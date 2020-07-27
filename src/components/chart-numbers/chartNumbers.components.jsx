import React from "react";
import "./chartNumbers.style.scss";
import CountUp from "react-countup";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ErrorIcon from "@material-ui/icons/Error";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

function ChartNumbers({ data, label, number }) {
  const covidData = data;
  const backgroundColor = ["one", "two", "three"];
  return (
    <div className={`card ${backgroundColor[number]}`}>
      <div className="card_title">
        {label === "Total confirmed" ? (
          <ErrorIcon style={{ color: "#f7b733" }} />
        ) : null}
        {label === "Total Recovered" ? (
          <LocalHospitalIcon style={{ color: "#38ef7d" }} />
        ) : null}
        {label === "Total Deaths" ? (
          <LocalFloristIcon style={{ color: "#fc4a1a" }} />
        ) : null}
        <h2>{label}</h2>
      </div>

      <div className={`count ${backgroundColor[number]}`}>
        <CountUp start={0} end={covidData} duration={1.5} />
      </div>
    </div>
  );
}

export default ChartNumbers;
