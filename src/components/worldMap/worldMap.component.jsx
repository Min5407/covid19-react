import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent, mapData }) => {
  console.log(mapData);
  return (
    <>
      <ComposableMap
        data-tip=""
        width={400}
        height={180}
        projectionConfig={{ scale: 60 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  let newData = mapData.find(function (data) {
                    let lowerName = NAME.toLowerCase();
                    return (
                      lowerName === data.Slug.toLowerCase() ||
                      lowerName === data.Country.toLowerCase()
                    );
                  });
                  {
                    newData
                      ? setTooltipContent(
                          `<strong>${newData.Country}</strong><br/><br/>
                          Total Case: ${newData.TotalConfirmed}<br/>
                          Total Recovered: ${newData.TotalRecovered}<br/>
                          Total Deaths: ${newData.TotalDeaths}<br/>`
                        )
                      : setTooltipContent(`<strong>${NAME}</strong>`);
                  }
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "lightblue",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
