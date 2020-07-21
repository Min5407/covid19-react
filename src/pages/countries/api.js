import axios from "axios";

export const getLocationApiKey = "0f761a30-fe14-11e9-b59f-e53803842572";

export const fetchCountries = async () => {
  const url = "https://api.covid19api.com/countries";
  let data = await axios.get(url);

  return data;
};

export const fetchUserLocation = async () => {
  const {
    data: { country_code },
  } = await axios(`https://geolocation-db.com/json/${getLocationApiKey}`);

  // console.log(new Date().toJSON().slice(0, 10).replace(/-/g, "-"));
  return country_code;
};

export const fetchCountryRecoverdData = async (country) => {
  let today = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const url = `https://api.covid19api.com/total/country/${country}/status/recovered?from=2020-03-01T00:00:00Z&to=${today}T00:00:00Z`;
  const { data } = await axios(url);
  return data;
};
export const fetchCountryConfirmedData = async (country) => {
  let today = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const url = `https://api.covid19api.com/total/country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=${today}T00:00:00Z`;
  const { data } = await axios(url);

  return data;
};
export const fetchCountryDeathData = async (country) => {
  let today = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const url = `https://api.covid19api.com/total/country/${country}/status/deaths?from=2020-03-01T00:00:00Z&to=${today}T00:00:00Z`;
  const { data } = await axios(url);
  return data;
};
