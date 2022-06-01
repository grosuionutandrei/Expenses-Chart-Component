import React from 'react';
import styles from './SpendingContainer.module.css';
export const SpendingContainer = (props) => {
  return (
    <article className={styles.expenses_spending__container}>
      {props.children}
    </article>
  );
};
