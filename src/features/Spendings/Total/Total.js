import React from 'react';
import style from '../SpendingContainer/SpendingContainer.module.css';
import styles from '../../../Balance/Balance.module.css';
export const Total = (props) => {
  return (
    <p
      className={`${style.expenses_spending__month} ${style.expenses_spending__total__title}`}
    >
      Total this month
      <span
        className={styles.expenses_balance__amount}
      >{`$${props.total}`}</span>
    </p>
  );
};
