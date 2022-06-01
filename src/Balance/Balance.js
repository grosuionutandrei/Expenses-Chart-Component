import React from 'react';
import styles from './Balance.module.css';
export const Balance = (props) => {
  return (
    <div className={styles.expenses_balance}>
      <p className={styles.expenses_balance__sold}>
        My balance
        <span className={styles.expenses_balance__amount}>{props.balance}</span>
      </p>
      <svg
        className={styles.expenses_balance__logo}
        width="72"
        height="48"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
};
