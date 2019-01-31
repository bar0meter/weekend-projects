import React, { useState, useEffect, Fragment } from "react";

function SearchForm({ searchCity }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    searchCity(value);
    setValue("");
  };

  const [value, setValue] = useState("");
  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </Fragment>
  );
}

function MainContent({ weatherData }) {
  const [data, setData] = useState(weatherData);
  useEffect(
    () => {
      if (Object.keys(weatherData).length && weatherData.cod === 200) {
        fetch("country_names_abb.json")
          .then(res => res.json())
          .then(data => {
            weatherData = {
              ...weatherData,
              sys: {
                ...weatherData.sys,
                country: data[weatherData.sys.country]
              }
            };
            setData(weatherData);
            console.log(weatherData);
          });
      }
    },
    [weatherData]
  );
  return Object.keys(data).length ? (
    <Fragment>
      <h3>
        {data.name}
        {data.sys ? `, ${data.sys.country}` : ""}
      </h3>
      <div>
        <span>
          Current Temperature:{" "}
          {(parseFloat(data.main.temp) - 273.15).toFixed(1)} °C
        </span>
      </div>
    </Fragment>
  ) : (
    ""
  );
}

function Sidebar_1({ main }) {
  return main ? (
    <Fragment>
      <div />
    </Fragment>
  ) : (
    ""
  );
}

function Sidebar_2({ coordinates, weather }) {
  return coordinates ? (
    <Fragment>
      <div>
        Latitude: {coordinates.lat}, Longitude: {coordinates.lon}
      </div>
      <div>{weather[0].main}</div>
    </Fragment>
  ) : (
    ""
  );
}

function DisplayWeather() {
  const [data, setData] = useState({
    cityName: "",
    weatherData: {}
  });
  const handleSearchCity = cityName => {
    setData({ ...data, cityName });
  };

  useEffect(() => {
    if (data.cityName !== "")
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          data.cityName
        }&APPID=0e353240941fcc7969405d2900e3377e`
      )
        .then(res => res.json())
        .then(weatherData => {
          setData({ cityName: "", weatherData });
        });
  });

  return (
    <div className="wrapper">
      <div className="searchBar">
        <SearchForm searchCity={handleSearchCity} />
      </div>
      <div className="main">
        <div className="displayMain">
          <MainContent weatherData={data.weatherData} />
        </div>
        <div className="sideBar">
          <div className="sideBar-1" />
          <div className="sideBar-2">
            <Sidebar_2
              coordinates={data.weatherData.coord}
              weather={data.weatherData.weather}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather;
