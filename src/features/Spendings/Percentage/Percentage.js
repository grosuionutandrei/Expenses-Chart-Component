import React from 'react';
import style from '../SpendingContainer/SpendingContainer.module.css';
import styles from '../../../Balance/Balance.module.css';
export const Percentage = (props) => {
  return (
    <p
      className={`${style.expenses_spending__percentage} ${styles.expenses_balance__amount}`}
    >
      {`+${props.percentage}%`}
      <span className={style.expenses_spending__total__title}>
        from last month
      </span>
    </p>
  );
};
