import React from "react"
import PropTypes from "prop-types"
import moment from "moment-timezone"
import * as _ from "lodash"

import ConditionEntity from "./../condition-entity/condition-entity"
import Temperature from "./../temperature/temperature"
import Forecast from "../forecast/forecast"

import HumidityIcon from "./../../icons/humidity"
import WindIcon from "./../../icons/wind"
import TemperatureIcon from "./../../icons/temperature"
import PressureIcon from "./../../icons/pressure"

import getConditionIcon from "./../../icons/conditionIconGetter"
import { isDay, getTime } from "./../date-time/date-time"

import styles from "./details.module.scss"

const getFutureDay = (day, timezone) => {
  return moment(new Date())
    .add(day, "days")
    .tz(`${timezone}`)
    .format("dddd")
}

class Details extends React.Component {
  state = {
    getFirstDay: getFutureDay(1, this.props.timezone),
    getSecondDay: getFutureDay(2, this.props.timezone),
    getThirdDay: getFutureDay(3, this.props.timezone),
    isDay: isDay(getTime(this.props.timezone))
  }

  render () {
    const {
      temp,
      id,
      description,
      humidity,
      tempMin,
      tempMax,
      windSpeed,
      pressure,
      forecast
    } = this.props.data
    const { timezone } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.conditionContainer}>
          <div className={styles.temperatureWrapper}>
            <Temperature temp={temp} />
            <div className={styles.conditionIcon}>
              {getConditionIcon(id, isDay(getTime(timezone)))}
            </div>
          </div>
          <span className={styles.conditionStatus}>
            {_.upperFirst(description)}
          </span>
        </div>
        <hr className={styles.separator} />
        <div className={styles.conditionSection}>
          <ConditionEntity
            iconComponent={<HumidityIcon size={"25"} />}
            value={`${humidity}%`}
          />
          <ConditionEntity
            iconComponent={<TemperatureIcon size={"25"} />}
            value={
              <div className={styles.temps}>
                <span>
                  {tempMin.toFixed(0)}
                  &deg;
                </span>
                <span className={styles.maxTemp}>
                  {tempMax.toFixed(0)}
                  &deg;
                </span>
              </div>
            }
          />
          <ConditionEntity
            iconComponent={<WindIcon size={"25"} />}
            value={`${windSpeed}m/s`}
          />
          <ConditionEntity
            iconComponent={<PressureIcon size={"25"} />}
            value={`${pressure}hPa`}
          />
        </div>
        <div className={styles.forecast}>
          <Forecast
            data={forecast.firstDay}
            day={this.state.getFirstDay}
            isDay={this.state.isDay}
          />
          <Forecast
            data={forecast.secondDay}
            day={this.state.getSecondDay}
            isDay={this.state.isDay}
          />
          <Forecast
            data={forecast.thirdDay}
            day={this.state.getThirdDay}
            isDay={this.state.isDay}
          />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  timezone: PropTypes.string,
  data: PropTypes.shape({
    temp: PropTypes.number,
    id: PropTypes.number,
    description: PropTypes.string,
    humidity: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    windSpeed: PropTypes.number,
    pressure: PropTypes.number,
    forecast: PropTypes.object
  })
}

export default Details
