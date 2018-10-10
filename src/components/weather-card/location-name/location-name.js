import React from "react";
import PropTypes from "prop-types";
import * as _ from "lodash";

import styles from "./location-name.scss";

const LocationName = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.city}>{_.upperFirst(props.city)}</h1>
      <p className={styles.country}>{_.upperCase(props.country)}</p>
    </div>
  );
};

LocationName.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string
};

export default LocationName;
