import React, { useState } from 'react';
import '../App.css';
import { CounterCard } from '../components/CounterCard';

function CompleteCounterCard() {
  const [inputValue, setInputValue] = useState<string>('');
  const [count1, setCount1] = useState<number>(1);
  const [count2, setCount2] = useState<number>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSetInitialCount = () => {
    const initialCount = Number(inputValue);
    if (!isNaN(initialCount)) {
      setCount1(initialCount);
      setCount2(initialCount);
    }
  };

  const handleCountChange1 = (newCount: number) => {
    setCount1(newCount);
  };

  const handleCountChange2 = (newCount: number) => {
    setCount2(newCount);
  };

  return (
    <div id="completeCounter">
      <h1 id="heading">COUNTER</h1>
      <div id="initialCountSetter">
         
        <label>
          Initial Count:
          <input type="number" value={inputValue} onChange={handleInputChange} />
        </label>
        <button onClick={handleSetInitialCount}>Set Initial Count</button>
      </div>
      <div className="counters">
        <CounterCard count={count1} onCountChange={handleCountChange1} label="Item type 1" />
        <CounterCard count={count2} onCountChange={handleCountChange2} label="Item type 2" />
      </div>
      <p id="total">Total Count: {count1 + count2}</p>
      <p>Item 1 - {count1}</p>
      <p>Item 2 - {count2}</p>
    </div>
  );
}

export default CompleteCounterCard;
