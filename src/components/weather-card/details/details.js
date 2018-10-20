import React from "react";
import PropTypes from "prop-types";
import * as _ from "lodash";

import ConditionEntity from "./../condition-entity/condition-entity";
import Temperature from "./../temperature/temperature";
import Forecast from "../forecast/forecast";

import HumidityIcon from "./../../icons/humidity";
import WindIcon from "./../../icons/wind";
import TemperatureIcon from "./../../icons/temperature";
import PressureIcon from "./../../icons/pressure";

import getConditionIcon from "./../../icons/conditionIconGetter";
import { isDay, getTime, getFutureDay } from "../../../shared/utils";

import styles from "./details.scss";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getFirstDay: getFutureDay(1, this.props.timezone),
      getSecondDay: getFutureDay(2, this.props.timezone),
      getThirdDay: getFutureDay(3, this.props.timezone),
      isDay: isDay(getTime(this.props.timezone))
    };
  }
  render() {
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
    } = this.props.data;
    const { firstDay, secondDay, thirdDay } = forecast;
    const { timezone } = this.props;

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
            iconComponent={<HumidityIcon />}
            value={`${humidity}%`}
          />
          <ConditionEntity
            iconComponent={<TemperatureIcon />}
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
            iconComponent={<WindIcon />}
            value={`${windSpeed}m/s`}
          />
          <ConditionEntity
            iconComponent={<PressureIcon />}
            value={`${pressure}hPa`}
          />
        </div>
        <div className={styles.forecast}>
          <Forecast
            data={firstDay}
            day={this.state.getFirstDay}
            isDay={this.state.isDay}
          />
          <Forecast
            data={secondDay}
            day={this.state.getSecondDay}
            isDay={this.state.isDay}
          />
          <Forecast
            data={thirdDay}
            day={this.state.getThirdDay}
            isDay={this.state.isDay}
          />
        </div>
      </div>
    );
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
};

export default Details;
