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

  const [mapData, setMapData] = useState();

  const url = "https://api.covid19api.com/summary";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data.Global);
        setMapData(data.Countries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (data && mapData) {
    return (
      <div className="homePage">
        <h2 className="hompage_title">World Records</h2>
        <div className="chartNumbers">
          {
            <ChartNumbers
              data={data.TotalConfirmed}
              label="Total confirmed"
              random={0}
            />
          }
          {
            <ChartNumbers
              data={data.TotalRecovered}
              label="Total Recovered"
              random={1}
            />
          }
          {
            <ChartNumbers
              data={data.TotalDeaths}
              label="Total Deaths"
              random={2}
            />
          }
        </div>

        <div className="map">
          <WorldMap setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default HomePage;
