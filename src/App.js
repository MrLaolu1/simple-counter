import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count => count + 1)
  }
  const decreaseCount = () => {
    if (count !== 0) setCount(count => count - 1)
  }

  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <div className='flexGroup'>
        <button onClick={decreaseCount}>DECREASE</button>
        <label>{count}</label>
        <button onClick={increaseCount}>INCREASE</button>
      </div>
    </div>
  );
}

export default App;
