import React from 'react'

import styles from './condition-entity.module.scss'

const ConditionEntity = props => (
  <div className={styles.conditionEntity}>
    {props.iconComponent}
    <span>{props.value}</span>
  </div>
)

export default ConditionEntity