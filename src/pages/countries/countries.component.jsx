import React, { useState, useEffect } from "react";
import "./countries.style.scss";

import { fetchCountries, fetchUserLocation } from "./api";
import Loading from "../../components/loading/loading.component";
import ColumnChart from "../../components/column-chart/columnChart.component";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const Countries = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        let country_code = await fetchUserLocation();
        setUserLocation(country_code);
      } catch (error) {
        console.log(error);
      }
    };
    getUserLocation();
  }, []);

  useEffect(() => {
    const countries = async () => {
      try {
        let { data } = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    countries();
  }, []);

  const handleChange = (event) => {
    setUserLocation(event.target.value);
  };

  if (userLocation && countries) {
    return (
      <div className="countryPage">
        <div className="select">
          <InputLabel id="label">Choose a Country</InputLabel>
          <Select
            onChange={handleChange}
            labelId="label"
            id="select"
            value={userLocation}
          >
            {countries.map((country) => (
              <MenuItem
                key={country.Country}
                value={country.ISO2}
                data={country.slug}
              >
                {country.Country}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <ColumnChart country={userLocation} />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Countries;
