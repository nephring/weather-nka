import React from 'react'

import LocationName from './location-name/location-name'
import DateTime from './date-time/date-time'
import Details from './details/details'

import styles from './weather-card.module.scss'

const WeatherCard = props => (
  <div className={styles.card}>
    <div
      style={{ 
        background: `url(${props.cityImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={styles.main} >
      <LocationName 
        city={props.city}
        country={props.country}/>
      <div className={styles.timeContainer}>
        <DateTime 
          city={props.city}
          country={props.country}/>
      </div>
    </div>
    <div className={styles.details}>
      <Details />
    </div>
  </div>
)


export default WeatherCard
