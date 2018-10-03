import React from "react"
import PropTypes from "prop-types"

import styles from "./temperature.module.scss"

const Temperature = props => (
  <div className={styles.container}>
    <p className={styles.temp}>
      {Math.floor(props.temp)}
      &deg;
    </p>
  </div>
)

Temperature.propTypes = {
  temp: PropTypes.number
}

export default Temperature
