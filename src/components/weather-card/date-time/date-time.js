import React from "react";
import PropTypes from "prop-types";

import { getDate, getTime } from "../../../shared/utils";
import styles from "./date-time.scss";

export const isDay = time => {
  return time > "05:00:00" && time < "21:00:00";
};

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getDate(this.props.timezone),
      time: getTime(this.props.timezone)
    };
  }

  changeDate() {
    this.setState({
      date: getDate(this.props.timezone),
      time: getTime(this.props.timezone)
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.changeDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.time}>{this.state.time}</p>
        <p className={styles.date}>{this.state.date}</p>
      </div>
    );
  }
}

DateTime.propTypes = {
  timezone: PropTypes.string.isRequired
};

export default DateTime;
