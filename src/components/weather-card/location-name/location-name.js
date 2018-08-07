import React from 'react'

import styles from './location-name.module.scss'

const LocationName = props => {
  return (<div className={styles.container}>
    <h1 className={styles.city}>{props.city}</h1>
    <p className={styles.country}>{props.country}</p>
  </div>)
}


export default LocationName