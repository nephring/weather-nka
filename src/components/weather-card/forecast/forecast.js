import React from "react"
import PropTypes from "prop-types"

import getConditionIcon from "./../../icons/conditionIconGetter"

import styles from "./forecast.module.scss"

class Forecast extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          {getConditionIcon(this.props.data.id, this.props.isDay)}
        </div>
        <div className={styles.day}>
          <p>{this.props.day}</p>
        </div>
        <div className={styles.temp}>
          <p>
            {Math.floor(this.props.data.temp)}
            &deg;
          </p>
        </div>
      </div>
    )
  }
}

Forecast.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    temp: PropTypes.number
  }),
  isDay: PropTypes.bool,
  day: PropTypes.string
}

export default Forecast
