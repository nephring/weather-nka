import React from 'react'
import moment from 'moment'

import styles from './date-time.module.scss'

class DateTime extends React.Component {

  constructor (props) {
    super(props)
    this.state = { date: moment() }
  }

  getTime = () => {
    return (
      `${moment().format('HH')}:` +
      `${moment().format('mm')}:` +
      `${moment().format('ss')}`
    )
  }

  getDate = () => {
    return (
      `${moment().format('dddd')}, ` +
      `${moment().format('MMMM')} ` +
      `${moment().format('D')}, ` +
      `${moment().format('YYYY')}`
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
        <h2 className={styles.time}>
          {this.getTime()}
        </h2>
        <p className={styles.date}>
          {this.getDate()}
        </p>
      </div>
    )
  }
}

export default DateTime