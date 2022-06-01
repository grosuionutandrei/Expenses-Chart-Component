import './App.css';
import { Balance } from './Balance/Balance';
import { SpendingContainer } from './features/Spendings/SpendingContainer/SpendingContainer';
import { Title } from './features/Spendings/Title/Title';
import { Chart } from './features/Spendings/Chart/Chart';

function App() {
  const balance = () => {
    return 921.48;
  };

  return (
    <div className="App">
      <Balance balance={`$${balance()}`} />
      <SpendingContainer>
        <Title title={'Spending - Last 7 days'} />
        <Chart monthBalance={balance()} />
      </SpendingContainer>
    </div>
  );
}

export default App;
