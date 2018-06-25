import React from 'react'

import LocationName from './location-name/location-name'

import './weather-card.css'

const WeatherCard = () => (
  <div className="wrapper">
    <div className="flex-container">
      <div className="main">
        <LocationName />
      </div>
      <div className="details"></div>
    </div>
  </div>)


export default WeatherCard
