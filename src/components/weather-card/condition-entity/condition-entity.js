import React from "react";
import PropTypes from "prop-types";

import styles from "./condition-entity.scss";

const ConditionEntity = props => (
  <div className={styles.conditionEntity}>
    {props.iconComponent}
    <span>{props.value}</span>
  </div>
);

ConditionEntity.propTypes = {
  iconComponent: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default ConditionEntity;
