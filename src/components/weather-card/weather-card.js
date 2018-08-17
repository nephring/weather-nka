import React from 'react'
import getData from '../../api'

import LocationName from './location-name/location-name'
import DateTime from './date-time/date-time'
import Details from './details/details'

import styles from './weather-card.module.scss'

class WeatherCard extends React.Component {

  state = {
    id: undefined,
    description: undefined,
    temp: undefined,
    tempMin: undefined,
    tempMax: undefined,
    pressure: undefined,
    humidity: undefined,
    windSpeed: undefined,
    forecast: {
      firstDay: {
        id: undefined,
        description: undefined,
        tempMin: undefined,
        tempMax: undefined
      },
      secondDay: {
        id: undefined,
        description: undefined,
        tempMin: undefined,
        tempMax: undefined
      },
      thirdDay: {
        id: undefined,
        description: undefined,
        tempMin: undefined,
        tempMax: undefined
      }
    }
  }

  async updateData () {
    const weatherData = await getData(this.props.city, this.props.countryISO, "weather")
    const forecastData = await getData(this.props.city, this.props.countryISO, "forecast")
    this.setState({
      id: weatherData.weather[0].id,
      description: weatherData.weather[0].description,
      temp: weatherData.main.temp,
      tempMin: weatherData.main.temp_min,
      tempMax: weatherData.main.temp_max,
      pressure: weatherData.main.pressure,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      forecast: {
        firstDay: {
          id: forecastData.list[7].weather[0].id,
          description: forecastData.list[7].weather[0].description,
          temp: forecastData.list[7].main.temp
        },
        secondDay: {
          id: forecastData.list[15].weather[0].id,
          description: forecastData.list[15].weather[0].description,
          temp: forecastData.list[15].main.temp
        },
        thirdDay: {
          id: forecastData.list[23].weather[0].id,
          description: forecastData.list[23].weather[0].description,
          temp: forecastData.list[23].main.temp
        }
      }
    })
  }

  async componentDidMount () {
    this.updateData()
    this.timer = setInterval(() => this.updateData(), 300000)
  }

  async componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className={styles.card}>
        <div
          style={{
            background: `url(${this.props.cityImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className={styles.main} >
          <LocationName
            city={this.props.city}
            country={this.props.country} />
          <div className={styles.timeContainer}>
            <DateTime timezone={this.props.timezone} />
          </div>
        </div>
        <div className={styles.details}>
          <Details
            data={this.state}
            timezone={this.props.timezone} />
        </div>
      </div>
    )
  }
}


export default WeatherCard
