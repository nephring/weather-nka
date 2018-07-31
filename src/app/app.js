import React from 'react'

import WeatherCard from './../components/weather-card/weather-card'

import styles from './app.module.scss'
import sydneyIMG from './../static/img/sydney.jpg'

const App = () => (
  <div className={styles.container}>
    <WeatherCard cityImg={sydneyIMG}/>
    <WeatherCard />
    <WeatherCard />
    <WeatherCard />
  </div>
)

export default App
