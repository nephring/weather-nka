import React from 'react'
import clearSkyDay from './svg/clear-sky_d.svg'

import styles from './clear-sky-day.module.scss'

class ClearSkyDayIcon extends React.Component {
  render () {
    return (
      <img
        src={clearSkyDay}
        style={{}}
        alt="clear-sky-day-icon"
        width={25}
        height={25} />
    )
  }
}

export default ClearSkyDayIcon