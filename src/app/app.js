import React from 'react'

import WeatherCard from './../components/weather-card/weather-card'

import styles from './app.module.scss'
import sydneyImg from './../static/img/sydney.jpg'

const App = () => (
  <div className={styles.container}>
    {/* <WeatherCard
      city="cracow"
      country="poland"
      cityImg={sydneyImg} /> */}
    <WeatherCard 
      city="sydney"
      country="australia"
      countryISO="AU"
      cityImg={sydneyImg} />
  </div>
)

export default App
