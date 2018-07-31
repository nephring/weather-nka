import React from 'react'

import LocationName from './location-name/location-name'
import DateTime from './date-time/date-time'
import Details from './details/details'

import styles from './weather-card.module.scss'

const WeatherCard = props => (
  <div className={styles.card}>
    <div
      style={{ 
        backgroundImage: props.cityImg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' 
      }}
      className={styles.main} >
      <LocationName />
      <div className={styles.timeContainer}>
        <DateTime />
      </div>
    </div>
    <div className={styles.details}>
      <Details />
      {
        //details here 
      }
    </div>
  </div>
)


export default WeatherCard
