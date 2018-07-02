import React from 'react'

import styles from './location-name.module.scss'

const LocationName = () => (
  <div className={styles.container}>
    <h1 className={styles.city}>Sydney</h1>
    <p className={styles.country}>AUSTRALIA</p>
  </div>
)

export default LocationName