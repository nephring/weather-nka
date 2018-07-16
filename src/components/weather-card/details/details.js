import React from 'react'

import { SunIcon, HumidityIcon, WindIcon } from './../../icons/icons'

import styles from './details.module.scss'

const Details = () => (
  <div className={styles.container}>
    <div className={styles.conditionIcon}>
      <SunIcon />
    </div>
    <div className={styles.smallDetails}>
      <div className={styles.humidity}>
        <HumidityIcon />
        <p>35%</p>
      </div>
      <div className={styles.wind}>
        <WindIcon />
        <p>7 m/s</p>
      </div>
    </div>
    <div className={styles.forecast}>
      <p>test</p>
    </div>
  </div>
)

export default Details