import React from 'react'

import styles from './temperature.module.scss'

const Temperature = props => (
  <div className={styles.container}>
    <p className={styles.temp}>{Math.floor(props.temp)}&deg;</p>
  </div>
)

export default Temperature