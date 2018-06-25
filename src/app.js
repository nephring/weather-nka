import React from 'react'

import WeatherCard from './components/weather-card/weather-card'

import styles from './app.module.css'


const App = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.row}>
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.row}>
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  </div>
)

export default App
