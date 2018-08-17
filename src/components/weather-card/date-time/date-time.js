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
      `${moment().tz(`${this.props.timezone}`).format('HH')}:` +
      `${moment().tz(`${this.props.timezone}`).format('mm')}:` +
      `${moment().tz(`${this.props.timezone}`).format('ss')}`
    )
  }

  getDate = () => {
    return (
      `${moment().tz(`${this.props.timezone}`).format('dddd')}, ` +
      `${moment().tz(`${this.props.timezone}`).format('MMMM')} ` +
      `${moment().tz(`${this.props.timezone}`).format('D')}, ` +
      `${moment().tz(`${this.props.timezone}`).format('YYYY')}`
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