import React from 'react'

// import LocationName from './location-name/location-name'
// import DateTime from './date-time/date-time'

import styles from './weather-card.module.scss'

const WeatherCard = () => (
  <div className={styles.card}>
    <div className={styles.main}></div>
    <div className={styles.details}></div>
  </div>
)


export default WeatherCard
