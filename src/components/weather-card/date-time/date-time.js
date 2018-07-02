import React from 'react'

import styles from './date-time.module.scss'

const DateTime = () => (
  <div className={styles.container}>
    <h2 className={styles.time}>14:00:23</h2>
    <p className={styles.date}>Thursday, May 19, 2016</p>
  </div>
)

export default DateTime