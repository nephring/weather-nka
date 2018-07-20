import React from 'react'
import moment from 'moment-timezone'

import styles from './date-time.module.scss'

class DateTime extends React.Component {

  constructor (props) {
    super(props)
    this.state = { date: moment() }
  }

  getTime = () => {
    return (
      `${moment().tz('australia/sydney').format('HH')}:` +
      `${moment().tz('australia/sydney').format('mm')}:` +
      `${moment().tz('australia/sydney').format('ss')}`
    )
  }

  getDate = () => {
    return (
      `${moment().tz('australia/sydney').format('dddd')}, ` +
      `${moment().tz('australia/sydney').format('MMMM')} ` +
      `${moment().tz('australia/sydney').format('D')}, ` +
      `${moment().tz('australia/sydney').format('YYYY')}`
    )
  }

  changeDate () {
    this.setState({ date: moment() })
  }

  componentDidMount () {
    this.timer = setInterval(() => this.changeDate(), 1000)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className={styles.container}>
        <p className={styles.time}>
          {this.getTime()}
        </p>
        <p className={styles.date}>
          {this.getDate()}
        </p>
      </div>
    )
  }
}

export default DateTime