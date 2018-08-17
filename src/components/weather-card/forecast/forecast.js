import React from 'react'

import getConditionIcon from './../../icons/conditionIconGetter'

import styles from './forecast.module.scss'

class Forecast extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          {getConditionIcon(this.props.data.id, this.props.isDay)}
        </div>
        <div className={styles.day}>
          <p>{this.props.day}</p>
        </div>
        <div className={styles.temp}>
          <p>{Math.floor(this.props.data.temp)}&deg;</p>
        </div>
      </div>
    )
  }
}

export default Forecast