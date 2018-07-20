import React from 'react'

import { CloudsManyIcon } from './../../icons/icons'

import styles from './forecast.module.scss'

const Forecast = () => (
  <div className={styles.container}>
    <div className={styles.icon}>
      <CloudsManyIcon size={25} />
    </div>
    <div className={styles.day}>
      <p>Thursday</p>
    </div>
    <div className={styles.temps}>
      <div className={styles.maxTemp}>
        <p>25&deg;</p>
      </div>
      <div className={styles.minTemp}>
        <p>15&deg;</p>
      </div>
    </div>
  </div>
)

export default Forecast