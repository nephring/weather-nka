import React from 'react'

import LocationName from './location-name/location-name'
import DateTime from './date-time/date-time'
import Temperature from './temperature/temperature'

import styles from './weather-card.module.scss'

const WeatherCard = () => (
  <div className={styles.card}>
    <div className={styles.main}>
      <LocationName />
      <div className={styles.mainRowWrapper}>
        <DateTime />
        <Temperature />
      </div>
    </div>
    <div className={styles.details}>
    <p>test</p>
      {
        //details here 
      }
    </div>
  </div>
)


export default WeatherCard
