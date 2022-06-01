import React, { useState, useEffect } from 'react';
import { Percentage } from '../Percentage/Percentage';
import styles from '../SpendingContainer/SpendingContainer.module.css';
import { Total } from '../Total/Total';
import chartStyles from './Chart.module.css';
import { getTodayString, today } from '../../../Helpers/Helpers';

export const Chart = (props) => {
  const [spendings, setSpendings] = useState('');
  const [hoveringDay, setHoveringDay] = useState('');

  useEffect(() => {
    let execute = true;
    async function getData() {
      const data = await fetch('http://localhost:3005/expenses').then((res) =>
        res.json()
      );
      setSpendings(data);
    }

    if (execute) {
      getData();
    }

    return () => {
      execute = false;
    };
  }, []);

  if (!spendings) {
    return <p>Loading!!!</p>;
  }

  const maxAmount = () => {
    let max = spendings[0].amount;
    for (const item of spendings) {
      if (item > max) {
        max = item;
      }
    }
    return max;
  };

  function sum(spendings, x) {
    if (x === 0) {
      return spendings[x].amount;
    }
    return spendings[x].amount + sum(spendings, x - 1);
  }

  let calcSum = sum(spendings, spendings.length - 1);

  const isToday = () => {
    return getTodayString(today());
  };

  const handleMouseOver = (event) => {
    setHoveringDay(event.target.id);
  };

  const handleMouseOut = (event) => {
    setHoveringDay('');
  };

  const renderData = () => {
    return spendings.map((item) => (
      <div key={`${Math.random().toString()} ${item.day} `}>
        <p
          data-day={item.day}
          style={{ position: 'absolute', bottom: `${item.amount * 2 + 30}px` }}
          className={
            item.day === hoveringDay
              ? `${chartStyles.expenses_spending__chart__amount__visibile}`
              : `${chartStyles.expenses_spending__chart__amount__hidden}`
          }
        >
          {item.amount}
        </p>
        <p
          id={item.day}
          style={{ height: `${item.amount * 2}px` }}
          className={
            item.day === isToday()
              ? `${chartStyles.expenses_spending__chart__column} ${chartStyles.expenses_spending__chart__column__today}`
              : `${chartStyles.expenses_spending__chart__column}`
          }
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        ></p>
        <p id={item.day} style={{ position: 'absolute', bottom: '0px' }}>
          {item.day}
        </p>
      </div>
    ));
  };

  return (
    <>
      <div
        style={{
          height: `${maxAmount() * 3 + 50}px`,
          marginTop: `${maxAmount() * 2 + 50}px`,
        }}
        className={`${styles.expenses_spending__chart} ${chartStyles.expenses_spending__chart}`}
      >
        {renderData()}
      </div>
      <Total total={calcSum} />
      <Percentage
        percentage={Math.floor((calcSum * 100) / props.monthBalance)}
      />
    </>
  );
};
