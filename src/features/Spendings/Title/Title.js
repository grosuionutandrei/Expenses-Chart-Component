import React from 'react';
import styles from '../SpendingContainer/SpendingContainer.module.css';
export const Title = (props) => {
  return <h3 className={styles.expenses_spending__title}>{props.title}</h3>;
};
