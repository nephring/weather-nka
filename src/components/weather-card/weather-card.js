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
    windSpeed: undefined
  }

  componentDidMount () {
    getData(this.props.city, this.props.countryISO)
      .then(data => {
        this.setState({
          id: data.weather[0].id,
          description: data.weather[0].description,
          temp: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed
        })
      })
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
            <DateTime
              city={this.props.city}
              country={this.props.country} />
          </div>
        </div>
        <div className={styles.details}>
          <Details data={this.state} />
        </div>
      </div>
    )
  }
}


export default WeatherCard
