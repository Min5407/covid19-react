import React, { useState, useEffect } from "react";
import "./home.style.scss";
import axios from "axios";

import Loading from "../../components/loading/loading.component";
import ChartNumbers from "../../components/chart-numbers/chartNumbers.components";

function HomePage() {
  const [data, setData] = useState();

  const url = "https://api.covid19api.com/summary";

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { Global },
      } = await axios.get(url);
      console.log(Global);
      setData(Global);
    };
    fetchData();
  }, []);

  if (data) {
    return (
      <div className="homePage">
        <h3>GLOBAL GRAPH</h3>
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
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default HomePage;
