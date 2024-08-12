import React, { useEffect, useState } from 'react';
import styles from './CounterCard.module.css';

export interface CounterCardProps {
  count: number;
  onCountChange: (count: number) => void;
  label: string;
}

export function CounterCard({ count, onCountChange, label }) {
  const [localCount, setLocalCount] = useState<number>(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  const handleIncrement = () => {
    const newCount = localCount + 1;
    setLocalCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = localCount - 1;
    setLocalCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className={styles.outerCard}>
      <h3>{label}</h3>
      <div className={styles.counterCard}>
        <button className={styles.counterButton} onClick={handleIncrement}>+</button>
        <p>{localCount}</p>
        <button className={styles.counterButton} onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}


