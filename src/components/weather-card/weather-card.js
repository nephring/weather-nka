import React from 'react'

import LocationName from './location-name/location-name'

import styles from './weather-card.module.css'

const WeatherCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.flexContainer}>
      <div className={styles.main}>
        <LocationName />
      </div>
      <div className={styles.details}></div>
    </div>
  </div>)


export default WeatherCard
