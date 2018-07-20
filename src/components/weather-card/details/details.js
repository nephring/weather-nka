import React from 'react'
import ConditionEntity from './../condition-entity/condition-entity'
import Forecast from '../forecast/forecast'

import { ClearSkyDayIcon, HumidityIcon, WindIcon, TemperatureIcon, PressureIcon } from './../../icons/icons'

import styles from './details.module.scss'

const Details = () => (
  <div className={styles.container}>
    <div className={styles.mainConditionIcon}>
      <ClearSkyDayIcon size={120} />
      <p>Sunny</p>
    </div>
    <hr className={styles.separator} />
    <div className={styles.conditionSection}>
      <ConditionEntity
        iconComponent={<HumidityIcon size={25} />}
        value='35%'
      />
      <ConditionEntity
        iconComponent={<TemperatureIcon size={25} />}
        value={(<span>25&deg;</span>)}
      />
      <ConditionEntity
        iconComponent={<WindIcon size={25} />}
        value='7 m/s'
      />
      <ConditionEntity
        iconComponent={<PressureIcon size={25} />}
        value='1012 hPa'
      />
    </div>
    <div className={styles.forecast}>
      <Forecast />
      <Forecast />
      <Forecast />
    </div>
  </div>
)

export default Details