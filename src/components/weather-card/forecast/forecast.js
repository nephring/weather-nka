import React from 'react'

import CloudsManyIcon from '../../icons/clouds-many'

import styles from './forecast.module.scss'

const Forecast = props => (
  <div className={styles.container}>
    <div className={styles.icon}>
      <CloudsManyIcon />
    </div>
    <div className={styles.day}>
      <p>Thursday</p>
    </div>
    <div className={styles.temps}>
      <div className={styles.maxTemp}>
        <p>{props.data.tempMax}&deg;</p>
      </div>
      <div className={styles.minTemp}>
        <p>{props.data.tempMin}&deg;</p>
      </div>
    </div>
  </div>
)

export default Forecast