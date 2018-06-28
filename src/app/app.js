import React from 'react'

import WeatherCard from './../components/weather-card/weather-card'

import styles from './app.module.scss'

const App = () => (
  <div className={styles.container}>
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
  </div>
)

export default App
