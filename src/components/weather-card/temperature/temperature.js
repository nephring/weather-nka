import React from "react";
import PropTypes from "prop-types";

import styles from "./temperature.scss";

const Temperature = props => (
  <p className={styles.temp}>
    {Math.floor(props.temp)}
    &deg;
  </p>
);

Temperature.propTypes = {
  temp: PropTypes.number
};

export default Temperature;
