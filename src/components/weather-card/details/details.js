import React from 'react'

import { SunIcon, HumidityIcon, WindIcon } from './../../icons/icons'

import styles from './details.module.scss'

const Details = () => (
  <div className={styles.container}>
    <div className={styles.mainConditionIcon}>
      <SunIcon />
      <p>Sunny</p>
    </div>
    <hr className={styles.separator} />
    <div className={styles.conditionSection}>
      <div className={styles.conditionEntity}>
        <HumidityIcon />
        <p>35%</p>
      </div>
      <div className={styles.conditionEntity}>
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