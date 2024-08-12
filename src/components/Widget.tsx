import React from 'react';
import styles from './Widget.module.css';
import error from '../assets/error.svg';
import info from "../assets/info.svg"

type WidgetProps = {
  type: 'error' | 'info' | 'warning';
  message: string;
};

const Widget: React.FC<WidgetProps> = ({ type, message }) => (
  <div className={`${styles.widget} ${styles[type]}`}>
    <span className={styles.symbol}>
      {type === 'error' && <img src={error} alt="Error" />}
      {type === 'info' && <img src={info} alt="Info" />}
      {type === 'warning' && '⚠️'}
    </span>
    <h3>{message}</h3>
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis numquam esse praesentium, voluptatum itaque tempore quas? Vitae, odio nulla similique deleniti neque, rem magnam omnis deserunt maiores pariatur, ipsa cum.</h5>
  </div>
);

export default Widget;
