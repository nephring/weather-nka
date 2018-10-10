import React from "react";
import PropTypes from "prop-types";
import getData from "../../api";

import LocationName from "./location-name/location-name";
import DateTime from "./date-time/date-time";
import Details from "./details/details";

import styles from "./weather-card.scss";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
      loading: true,
      error: false
    };
  }

  async updateData() {
    const weatherData = await getData(
      this.props.city,
      this.props.countryISO,
      "weather"
    );
    const forecastData = await getData(
      this.props.city,
      this.props.countryISO,
      "forecast"
    );

    try {
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
        },
        loading: false
      });
    } catch (e) {
      this.setState({
        error: true,
        loading: false
      });
    }
  }

  async componentDidMount() {
    this.updateData();
    this.timer = setInterval(() => this.updateData(), 300000);
  }

  async componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.loading ? (
          <div className={styles.spinner} />
        ) : (
          <div>
            {this.state.error ? (
              <div className={styles.cardError}>
                <p>There has been problem to get data for this card</p>
              </div>
            ) : (
              <div className={styles.card}>
                <div
                  style={{
                    background: `url(${this.props.cityImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                  className={styles.main}
                >
                  <LocationName
                    city={this.props.city}
                    country={this.props.country}
                  />
                  <div className={styles.timeContainer}>
                    <DateTime timezone={this.props.timezone} />
                  </div>
                </div>
                <div className={styles.details}>
                  <Details data={this.state} timezone={this.props.timezone} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

WeatherCard.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  countryISO: PropTypes.string,
  cityImg: PropTypes.string,
  timezone: PropTypes.string
};

export default WeatherCard;
