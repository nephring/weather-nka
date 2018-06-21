import React from 'react'

import WeatherCard from './components/weather-card/weather-card'

import './app.css'


const App = () => (
  <div>
    <div className="container">
      <div className="row">
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
    <div className="container">
      <div className="row">
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  </div>
)

export default App
