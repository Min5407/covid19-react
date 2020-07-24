import React, { useState, useEffect } from "react";
import "./home.style.scss";
import axios from "axios";

import ReactTooltip from "react-tooltip";
import ChartNumbers from "../../components/chart-numbers/chartNumbers.components";
import Loading from "../../components/loading/loading.component";
import WorldMap from "../../components/worldMap/worldMap.component";

function HomePage() {
  const [data, setData] = useState();
  const [content, setContent] = useState("");
  const [date, setDate] = useState();

  const [mapData, setMapData] = useState();

  const url = "https://api.covid19api.com/summary";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data.Global);
        setMapData(data.Countries);
        setDate(data.Date.toString().slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (data && mapData) {
    return (
      <div className="homePage">
        <div className="hompage_title">
          <h2>World Records</h2>
          <h2>{date} </h2>
        </div>
        <div className="chartNumbers">
          {
            <ChartNumbers
              data={data.TotalConfirmed}
              label="Total confirmed"
              number={0}
            />
          }
          {
            <ChartNumbers
              data={data.TotalRecovered}
              label="Total Recovered"
              number={1}
            />
          }
          {
            <ChartNumbers
              data={data.TotalDeaths}
              label="Total Deaths"
              number={2}
            />
          }
        </div>

        <div className="map">
          <WorldMap mapData={mapData} setTooltipContent={setContent} />
          <ReactTooltip html multiline className="toolTip">
            {content}
          </ReactTooltip>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default HomePage;
