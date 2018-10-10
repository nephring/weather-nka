import React from "react";
import ReactDOM from "react-dom";

import WeatherCard from "./components/weather-card/weather-card";

import styles from "./app.scss";

import sydneyImg from "./static/img/sydney.jpg";
import krkImg from "./static/img/krk.jpg";
import nyImg from "./static/img/ny.jpg";
import viennaImg from "./static/img/vienna.jpg";

const App = () => (
  <div className={styles.container}>
    <WeatherCard
      city="sydney"
      country="australia"
      countryISO="au"
      timezone="australia/sydney"
      cityImg={sydneyImg}
    />

    <WeatherCard
      city="New York"
      country="United States"
      countryISO="usa"
      timezone="america/new_york"
      cityImg={nyImg}
    />

    <WeatherCard
      city="kraków"
      country="poland"
      countryISO="pl"
      timezone="europe/warsaw"
      cityImg={krkImg}
    />

    <WeatherCard
      city="vienna"
      country="austria"
      countryISO="at"
      timezone="europe/vienna"
      cityImg={viennaImg}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
