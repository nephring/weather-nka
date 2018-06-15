import React from 'react'

import CardHeader from '../card-header/card-header'

import {
  CloudFogIcon
  // CloudRainLightIcon,
  // CloudRainIcon,
  // FogIcon,
  // MoonCloudRainLightIcon,
  // MoonCloudRainIcon,
  // MoonCloudSnowIcon,
  // MoonCloudIcon,
  // MoonFogIcon,
  // MoonIcon,
  // SunCloudRainLightIcon,
  // SunCloudRainIcon,
  // SunCloudSnowIcon,
  // SunCloudIcon,
  // SunFogIcon,
  // SunIcon

} from '../icons/icons'


import './weather-card.css'

const WeatherCard = () => (
  <div className="shape">
    <CardHeader />
    <p><CloudFogIcon /> 30 C</p>
    {/* <p><CloudRainLightIcon /></p>
    <p><CloudRainIcon /></p>
    <p><FogIcon /></p>
    <p><MoonCloudRainLightIcon /></p>
    <p><MoonCloudRainIcon /></p>
    <p><MoonCloudSnowIcon /></p>
    <p><MoonCloudIcon /></p>
    <p><MoonFogIcon /></p>
    <p><MoonIcon /></p>
    <p><SunCloudRainLightIcon /></p>
    <p><SunCloudRainIcon /></p>
    <p><SunCloudSnowIcon /></p>
    <p><SunCloudIcon /></p>
    <p><SunFogIcon /></p>
    <p><SunIcon /></p> */}

  </div>)


export default WeatherCard
