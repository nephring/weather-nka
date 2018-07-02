import React from 'react'

import styles from './temperature.module.scss'

const Temperature = () => (
  <div className={styles.container}>
    <p className={styles.temp}>20&deg;</p>
  </div>
)

export default Temperature