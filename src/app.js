import React from 'react'

import WeatherCard from './components/weather-card/weather-card'

import './app.css'


const App = () => (
  <div className="container">
    <div className="row">
      <WeatherCard />
      {/* <WeatherCard />
      <WeatherCard /> */}
    </div>
  </div>
)

export default App
