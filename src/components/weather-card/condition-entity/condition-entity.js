import React from 'react'

import styles from './condition-entity.module.scss'

const ConditionEntity = props => (
  <div className={styles.conditionEntity}>
    {props.iconComponent}
    <p>{props.value}</p>
  </div>
)

export default ConditionEntity