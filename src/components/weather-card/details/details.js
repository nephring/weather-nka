import React from 'react'
import ConditionEntity from './../condition-entity/condition-entity'

import { ClearSkyDayIcon, HumidityIcon, WindIcon, TemperatureIcon, PressureIcon } from './../../icons/icons'

import styles from './details.module.scss'

const Details = () => (
  <div className={styles.container}>
    <div className={styles.mainConditionIcon}>
      <ClearSkyDayIcon />
      <p>Sunny</p>
    </div>
    <hr className={styles.separator} />
    <div className={styles.conditionSection}>
      <ConditionEntity
        iconComponent={<HumidityIcon />}
        value='35%'
      />
      <ConditionEntity
        iconComponent={<TemperatureIcon />}
        value={(<span>25&deg;</span>)}
      />
      <ConditionEntity
        iconComponent={<WindIcon />}
        value='7 m/s'
      />
      <ConditionEntity
        iconComponent={<PressureIcon />}
        value='1012 hPa'
      />
    </div>
    <div className={styles.forecast}>
      <p>test</p>
    </div>
  </div>
)

export default Details