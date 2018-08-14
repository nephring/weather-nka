import React from 'react'
import ConditionEntity from './../condition-entity/condition-entity'
import Temperature from './../temperature/temperature'
import Forecast from '../forecast/forecast'

import HumidityIcon from './../../icons/humidity'
import WindIcon from './../../icons/wind'
import TemperatureIcon from './../../icons/temperature'
import PressureIcon from './../../icons/pressure'

import getConditionIcon from './../../icons/conditionIconGetter'


import styles from './details.module.scss'

const Details = props => {
  console.log(props.data.id)
  return (
    <div className={styles.container}>
      <div className={styles.conditionContainer}>
        <div className={styles.temperatureWrapper}>
          <Temperature temp={props.data.temp} />
          <div className={styles.conditionIcon}>
            {getConditionIcon(props.data.id, true)}
          </div>
        </div>
        <span className={styles.conditionStatus}>{props.data.description}</span>
      </div>
      <hr className={styles.separator} />
      <div className={styles.conditionSection}>
        <ConditionEntity
          iconComponent={<HumidityIcon size={25} />}
          value={`${props.data.humidity}%`}
        />
        <ConditionEntity
          iconComponent={<TemperatureIcon size={25} />}
          value={
            <div className={styles.temps}>
              <span>{props.data.tempMin}&deg;</span>
              <span className={styles.maxTemp}>{props.data.tempMax}&deg;</span>
            </div>
          }
        />
        <ConditionEntity
          iconComponent={<WindIcon size={25} />}
          value={`${props.data.windSpeed}m/s`}
        />
        <ConditionEntity
          iconComponent={<PressureIcon size={25} />}
          value={`${props.data.pressure}hPa`}
        />
      </div>
      <div className={styles.forecast}>
        <Forecast data={props.data.forecastData.firstDay} />
        <Forecast data={props.data.forecastData.secondDay} />
        <Forecast data={props.data.forecastData.thirdDay} />
      </div>
    </div>
  )
}

export default Details