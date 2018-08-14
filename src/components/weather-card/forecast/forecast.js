import React from 'react'

import getConditionIcon from './../../icons/conditionIconGetter'

import styles from './forecast.module.scss'

const Forecast = props => (
  <div className={styles.container}>
    <div className={styles.icon}>
      {getConditionIcon(props.data.id, true)}
    </div>
    <div className={styles.day}>
      <p>{props.day}</p>
    </div>
    <div className={styles.temps}>
      <div className={styles.maxTemp}>
        <p>{Math.floor(props.data.tempMax)}&deg;</p>
      </div>
      <div className={styles.minTemp}>
        <p>{Math.floor(props.data.tempMin)}&deg;</p>
      </div>
    </div>
  </div>
)

export default Forecast