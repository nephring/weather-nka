import React from "react"
import moment from "moment-timezone"

import styles from "./date-time.module.scss"

const getDate = timezone => {
  return (
    `${moment()
      .tz(`${timezone}`)
      .format("dddd")}, ` +
    `${moment()
      .tz(`${timezone}`)
      .format("MMMM")} ` +
    `${moment()
      .tz(`${timezone}`)
      .format("D")}, ` +
    `${moment()
      .tz(`${timezone}`)
      .format("YYYY")}`
  )
}

export const getTime = timezone => {
  return (
    `${moment()
      .tz(`${timezone}`)
      .format("HH")}:` +
    `${moment()
      .tz(`${timezone}`)
      .format("mm")}:` +
    `${moment()
      .tz(`${timezone}`)
      .format("ss")}`
  )
}

export const isDay = time => {
  return time > "05:00:00" && time < "21:00:00"
}

class DateTime extends React.Component {
  state = {
    date: getDate(this.props.timezone),
    time: getTime(this.props.timezone)
  }

  changeDate () {
    this.setState({
      date: getDate(this.props.timezone),
      time: getTime(this.props.timezone)
    })
  }

  componentDidMount () {
    this.timer = setInterval(() => this.changeDate(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className={styles.container}>
        <p className={styles.time}>{this.state.time}</p>
        <p className={styles.date}>{this.state.date}</p>
      </div>
    )
  }
}

export default DateTime
